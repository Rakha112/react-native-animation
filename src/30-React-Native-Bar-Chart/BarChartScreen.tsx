import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Canvas, Group} from '@shopify/react-native-skia';
import * as d3 from 'd3';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import BarPath from './src/components/BarPath';
import XAxisText from './src/components/XAxisText';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedText from './src/components/AnimatedText';
import {Data, data} from './src/data/data';

const BarChartScreen = () => {
  const {width} = useWindowDimensions();
  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

  const barWidth = 28;
  const graphMargin = 20;

  const canvasHeight = 350;
  const canvasWidth = width;
  const graphHeight = canvasHeight - graphMargin;
  const graphWidth = width;
  const [selsctedDay, setSelsctedDay] = useState<string>('Total');
  const selectedBar = useSharedValue<string | null>(null);
  const selectedValue = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);

  // x domain
  const xDomain = data.map((dataPoint: Data) => dataPoint.label);

  // range of the x scale
  const xRange = [0, graphWidth];

  // Create the x scale
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  // y domain
  const yDomain = [0, d3.max(data, (yDataPoint: Data) => yDataPoint.value)!];

  // range of the y scale
  const yRange = [0, graphHeight];

  // Create the y scale
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  // Animate the bar heights by updating the progress value
  useEffect(() => {
    progress.value = withTiming(1, {duration: 1000});
    selectedValue.value = withTiming(totalValue, {duration: 1000});
  }, [progress, selectedValue, totalValue]);

  const touchHandler = (e: GestureResponderEvent) => {
    // Get the x and y coordinates of the touch
    const touchX = e.nativeEvent.locationX;
    const touchY = e.nativeEvent.locationY;

    // Calculate the index of the touched bar based on touchX and x axis step
    const index = Math.floor((touchX - barWidth / 2) / x.step());

    // if the index is within the bounds of the data array
    if (index >= 0 && index < data.length) {
      const {label, value, day} = data[index];

      // Check if the touch is within the bounds of the touched bar
      if (
        touchX > x(label)! - barWidth / 2 &&
        touchX < x(label)! + barWidth / 2 &&
        touchY > graphHeight - y(value) &&
        touchY < graphHeight
      ) {
        selectedBar.value = label;
        setSelsctedDay(day);
        selectedValue.value = withTiming(value);
      } else {
        selectedBar.value = null;
        setSelsctedDay('Total');
        selectedValue.value = withTiming(totalValue);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          source={require('./src/assets/images/Run.png')}
          style={styles.icon}
        />
        <Text style={styles.textTitle}>Walk & Run Activity</Text>
        <AnimatedText selectedValue={selectedValue} />
        <Text style={styles.textSteps}>{selsctedDay} Steps</Text>
      </View>
      <Canvas
        onTouchStart={touchHandler}
        style={{width: canvasWidth, height: canvasHeight}}>
        {data.map((dataPoint: Data, index) => (
          <Group key={index}>
            <BarPath
              progress={progress}
              x={x(dataPoint.label)!}
              y={y(dataPoint.value)}
              barWidth={barWidth}
              graphHeight={graphHeight}
              label={dataPoint.label}
              selectedBar={selectedBar}
            />
            <XAxisText
              x={x(dataPoint.label)!}
              y={canvasHeight}
              text={dataPoint.label}
              selectedBar={selectedBar}
            />
          </Group>
        ))}
      </Canvas>
    </SafeAreaView>
  );
};

export default BarChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebecde',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  textTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 36,
    color: '#111111',
  },
  textSteps: {
    fontFamily: 'Roboto-Regular',
    fontSize: 38,
    color: '#111111',
  },
});

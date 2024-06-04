import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CircularProgressBar from './src/components/CircularProgressBar';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {useFont} from '@shopify/react-native-skia';
import {generateRandomNumber} from './src/utils/generateRandomNumbers';
import {calculatePercentage} from './src/utils/calculatePercentage';
import {formatNumberWithCommas} from './src/utils/formatNumberWithCommas';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SystemBars} from 'react-native-bars';

const RADIUS = 120;
const STROKE_WIDTH = 30;
const GOALS = 100000;

const CircularProgressBarScreen = () => {
  const percentage = useSharedValue(0);
  const [balance, setBalance] = useState(0);
  const end = useSharedValue(0);
  const font = useFont(require('./src/assets/fonts/Roboto-Bold.ttf'), 60);

  const handlePress = () => {
    const generateRandomValue = generateRandomNumber(GOALS);
    const generatePercentage = calculatePercentage(generateRandomValue, GOALS);
    setBalance(generateRandomValue);
    percentage.value = withTiming(generatePercentage, {duration: 1000});
    end.value = withTiming(generatePercentage / 100, {duration: 1000});
  };

  if (!font) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* If you're not using react-native-bars, you can remove SystemBars */}
      <SystemBars animated={true} barStyle={'light-content'} />
      <View style={styles.contentContainer}>
        <View style={styles.circularContainer}>
          <CircularProgressBar
            radius={RADIUS}
            strokeWidth={STROKE_WIDTH}
            font={font}
            percentage={percentage}
            end={end}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSmall}>Balance</Text>
          <Text style={styles.text}>${formatNumberWithCommas(balance)}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSmall}>Goals</Text>
          <Text style={styles.text}>${formatNumberWithCommas(GOALS)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.textButton}>Random</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CircularProgressBarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0b10',
  },
  contentContainer: {
    justifyContent: 'center',
    backgroundColor: '#19191f',
    padding: 40,
    margin: 10,
    borderRadius: 34,
  },
  circularContainer: {
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20,
    gap: 10,
  },
  textSmall: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto-Light',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto-Bold',
  },
  button: {
    backgroundColor: '#19191f',
    margin: 10,
    padding: 20,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto-Bold',
  },
});

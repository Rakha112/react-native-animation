import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Suspense, useState} from 'react';
import Header from './src/components/Header';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Canvas} from '@react-three/fiber/native';
import Trigger from './src/components/Trigger';
import Loader from './src/components/Loader';
import Shoe from './src/components/Shoe';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const ShopUI3DScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [baseColor, setBaseColor] = useState<string>('pink');
  const [soleColor, setSoleColor] = useState<string>('white');
  const [direction, setDirection] = useState<'x' | 'y'>('y');
  const dataColors = ['pink', 'blue', 'orange', 'red', 'white'];
  const rotate = useSharedValue(0);
  const position = useSharedValue(0);
  const context = useSharedValue(0);
  const handleChangeDirection = () => {
    if (direction === 'y') {
      setDirection('x');
      rotate.value = withSpring(90);
    } else {
      setDirection('y');
      rotate.value = withSpring(0);
    }
  };
  // Using new Gesture API
  const pan = Gesture.Pan()
    .onBegin(() => {
      context.value = position.value;
    })
    .onUpdate(e => {
      position.value = context.value + e.translationX;
    })
    .onEnd(() => {
      position.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} />
      <Header handleChangeDirection={handleChangeDirection} rotate={rotate} />
      <View style={styles.modelContainer}>
        {loading && <Loader />}
        <Canvas camera={{fov: 20}}>
          <directionalLight position={[1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[0, 0, 1]} args={['white', 2]} />
          <directionalLight position={[0, 0, -1]} args={['white', 2]} />
          <directionalLight position={[0, 1, 0]} args={['white', 2]} />
          <directionalLight position={[0, -1, 0]} args={['white', 2]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Shoe
              position={position}
              direction={direction}
              baseColor={baseColor}
              soleColor={soleColor}
            />
          </Suspense>
        </Canvas>
      </View>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.sliderContainer, animatedStyle]}>
          <Image
            source={require('./src/assets/Slider.png')}
            style={styles.slider}
          />
        </Animated.View>
      </GestureDetector>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.textTitle}>Base Color</Text>
          <View style={styles.colorsContainer}>
            {dataColors.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setBaseColor(item);
                  }}>
                  <View style={[styles.color, {backgroundColor: item}]} />
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.textTitle}>Sole Color</Text>
          <View style={styles.colorsContainer}>
            {dataColors.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSoleColor(item);
                  }}>
                  <View style={[styles.color, {backgroundColor: item}]} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopUI3DScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  modelContainer: {height: 300},
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  slider: {width: 200, height: 30},
  contentContainer: {
    paddingHorizontal: 20,
  },
  textTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  color: {width: 50, height: 50},
});

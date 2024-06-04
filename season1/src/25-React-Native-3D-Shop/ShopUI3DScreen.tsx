/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
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
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SystemBars} from 'react-native-bars';

const ShopUI3DScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [baseColor, setBaseColor] = useState<string>('pink');
  const [soleColor, setSoleColor] = useState<string>('white');
  const [direction, setDirection] = useState<'x' | 'y'>('y');
  const dataColors = ['pink', 'blue', 'orange', 'red', 'white'];
  const rotate = useSharedValue(0);
  const position = useSharedValue(0);

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
    .onUpdate(e => {
      position.value = e.translationX;
    })
    .onEnd(() => {
      position.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
  }));

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* If you're not using react-native-bars, you can remove SystemBars */}
      <SystemBars animated={true} barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <Header handleChangeDirection={handleChangeDirection} rotate={rotate} />
        <ScrollView>
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

          <View style={styles.contentContainer}>
            <Text style={styles.textName}>Sneakers Shoes</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.textRating}>(5.0)</Text>
              <Image
                style={styles.star}
                source={require('./src/assets/Star.png')}
              />
              <Image
                style={styles.star}
                source={require('./src/assets/Star.png')}
              />
              <Image
                style={styles.star}
                source={require('./src/assets/Star.png')}
              />
              <Image
                style={styles.star}
                source={require('./src/assets/Star.png')}
              />
              <Image
                style={styles.star}
                source={require('./src/assets/Star.png')}
              />
            </View>
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
            <Text style={styles.textTitle}>Description</Text>
            <Text style={styles.textDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse iaculis nulla tortor, at viverra augue venenatis eget.
              Nam magna ligula, consequat sit amet purus eu, eleifend maximus
              elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis
              urna suscipit, placerat commodo turpis molestie. Cras tristique
              suscipit nisl, eu porttitor ex.,
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>$199</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('BUY NOW');
            }}>
            <Text style={styles.textButton}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
  textName: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  star: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  colorsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  color: {width: 40, height: 40, borderRadius: 50},
  textDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'justify',
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  priceContainer: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrice: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    flex: 2 / 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    padding: 14,
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

import {Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Button = () => {
  const {width} = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      style={[
        styles.container,
        {width: width * 0.9, marginBottom: inset.bottom},
      ]}
      entering={FadeInDown.delay(1000)}
      onPress={() => {
        console.log('BOOKING NOW');
      }}>
      <Text style={styles.text}>Booking Now</Text>
    </AnimatedPressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c6cce',
    padding: 22,
    alignItems: 'center',
    borderRadius: 40,
    // marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

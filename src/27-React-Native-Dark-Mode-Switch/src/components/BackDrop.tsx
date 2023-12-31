import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  translateY: SharedValue<number>;
  openHeight: number;
  closeHeight: number;
  close: () => void;
};

const BackDrop = ({translateY, openHeight, closeHeight, close}: Props) => {
  const backDropAnimation = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [closeHeight, openHeight],
      [0, 0.5],
    );
    const display = opacity === 0 ? 'none' : 'flex';
    return {
      opacity,
      display,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        close();
      }}>
      <Animated.View style={[styles.container, backDropAnimation]} />
    </TouchableWithoutFeedback>
  );
};

export default BackDrop;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    display: 'none',
  },
});

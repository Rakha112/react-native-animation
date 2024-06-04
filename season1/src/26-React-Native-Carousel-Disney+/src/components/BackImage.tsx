import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {MovieType} from '../data/movies';

type Props = {
  item: MovieType;
  index: number;
  x: SharedValue<number>;
};

const BackImage = ({item, index, x}: Props) => {
  const {width} = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-0.6, 1, -0.6],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacityAnim,
    };
  });

  return (
    <Animated.Image
      source={item.image}
      style={[
        StyleSheet.absoluteFillObject,
        {width: width, height: width},
        animatedStyle,
      ]}
    />
  );
};

export default BackImage;

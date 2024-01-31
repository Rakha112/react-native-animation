import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {OnboardingData} from '../data/data';

type Props = {
  x: SharedValue<number>;
  screenWidth: number;
  data: OnboardingData[];
};

const RADIUS = 100;

const Circle = ({x, screenWidth, data}: Props) => {
  const animatedBackgroundColorCircle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      Math.abs(x.value),
      [
        0,
        screenWidth / 2 - 0.0001,
        screenWidth / 2,
        screenWidth - 10,
        screenWidth,
        (screenWidth * 3) / 2 - 0.0001,
        (screenWidth * 3) / 2,
        screenWidth * 2 - 10,
        screenWidth * 2,
      ],
      [
        data[1].backgroundColor,
        data[1].backgroundColor,
        data[0].backgroundColor,
        data[0].backgroundColor,
        data[2].backgroundColor,
        data[2].backgroundColor,
        data[1].backgroundColor,
        data[1].backgroundColor,
        data[0].backgroundColor,
      ],
    );

    return {
      backgroundColor,
    };
  });

  const animatedTransformCircle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      Math.abs(x.value % screenWidth),
      [0, screenWidth],
      [0, -180],
      Extrapolation.CLAMP,
    );
    const scale = interpolate(
      Math.abs(x.value % screenWidth),
      [0, screenWidth / 2, screenWidth],
      [1, 8, 1],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{perspective: 300}, {rotateY: `${rotateY}deg`}, {scale}],
    };
  });
  return (
    <Animated.View
      style={[
        styles.circle,
        animatedBackgroundColorCircle,
        animatedTransformCircle,
      ]}
    />
  );
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    zIndex: 0,
    position: 'absolute',
    width: RADIUS,
    height: RADIUS,
    borderRadius: RADIUS,
    backgroundColor: 'pink',
    alignSelf: 'center',
    bottom: 100,
  },
});

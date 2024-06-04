import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  x: SharedValue<number>;
};

const Backdrop = ({x}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#cde6d5', '#cfe4e4', '#faeb8a'],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });
  return <Animated.View style={[styles.container, animatedColor]} />;
};

export default Backdrop;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

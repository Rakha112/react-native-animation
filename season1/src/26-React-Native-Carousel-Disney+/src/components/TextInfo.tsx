import {StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {MovieType} from '../data/movies';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: MovieType;
  index: number;
  x: SharedValue<number>;
};

const TextInfo = ({item, index, x}: Props) => {
  const {width} = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacityAnim,
    };
  });

  return (
    <Animated.Text style={[styles.text, animatedStyle]}>
      {item.release} - {item.languages} - {item.genre}
    </Animated.Text>
  );
};

export default TextInfo;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
  },
});

import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  topAnimation: SharedValue<number>;
  openHeight: number;
  closeHeight: number;
  backDropColor: string;
  close: () => void;
};

const BackDrop = ({
  topAnimation,
  openHeight,
  closeHeight,
  backDropColor,
  close,
}: Props) => {
  const backDropAnimation = useAnimatedStyle(() => {
    const opacity = interpolate(
      topAnimation.value,
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
      <Animated.View
        style={[
          styles.backDrop,
          backDropAnimation,
          {backgroundColor: backDropColor},
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

export default BackDrop;

const styles = StyleSheet.create({
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    display: 'none',
  },
});

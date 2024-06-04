import {
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  handlePress: () => void;
  buttonVal: SharedValue<number>;
};

const CustomButton = ({handlePress, buttonVal}: Props) => {
  const {height: SCREEN_HEIGHT} = useWindowDimensions();

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      buttonVal.value,
      [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
      ['#fd94b2', '#f8dac2', '#154f40'],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        buttonVal.value === 2 * SCREEN_HEIGHT
          ? withSpring(260)
          : withSpring(120),
      height:
        buttonVal.value === 2 * SCREEN_HEIGHT
          ? withSpring(80)
          : withSpring(120),
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 50,
      height: 50,
      opacity:
        buttonVal.value === 2 * SCREEN_HEIGHT ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            buttonVal.value === 2 * SCREEN_HEIGHT
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        buttonVal.value === 2 * SCREEN_HEIGHT ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            buttonVal.value === 2 * SCREEN_HEIGHT
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[styles.container, animatedColor, buttonAnimationStyle]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>
          Get Started
        </Animated.Text>
        <Animated.Image
          source={require('../assets/images/ArrowIcon.png')}
          style={arrowAnimationStyle}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    zIndex: 1,
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {color: 'white', fontSize: 20, position: 'absolute'},
});

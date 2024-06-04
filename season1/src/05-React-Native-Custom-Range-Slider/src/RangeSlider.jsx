import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const RangeSlider = ({sliderWidth, min, max, step, onValueChange}) => {
  const position = useSharedValue(0);
  const position2 = useSharedValue(sliderWidth);
  const opacity = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const zIndex = useSharedValue(0);
  const zIndex2 = useSharedValue(0);
  const context = useSharedValue(0);
  const context2 = useSharedValue(0);

  // Using new Gesture API
  const pan = Gesture.Pan()
    .onBegin(() => {
      context.value = position.value;
    })
    .onUpdate(e => {
      opacity.value = 1;
      if (context.value + e.translationX < 0) {
        position.value = 0;
      } else if (context.value + e.translationX > position2.value) {
        position.value = position2.value;
        zIndex.value = 1;
        zIndex2.value = 0;
      } else {
        position.value = context.value + e.translationX;
      }
    })
    .onEnd(() => {
      opacity.value = 0;
      runOnJS(onValueChange)({
        min:
          min +
          Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
            step,
        max:
          min +
          Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
            step,
      });
    });

  const pan2 = Gesture.Pan()
    .onBegin(() => {
      context2.value = position2.value;
    })
    .onUpdate(e => {
      opacity2.value = 1;
      if (context2.value + e.translationX > sliderWidth) {
        position2.value = sliderWidth;
      } else if (context2.value + e.translationX < position.value) {
        position2.value = position.value;
        zIndex.value = 0;
        zIndex2.value = 1;
      } else {
        position2.value = context2.value + e.translationX;
      }
    })
    .onEnd(() => {
      opacity2.value = 0;
      runOnJS(onValueChange)({
        min:
          min +
          Math.floor(position.value / (sliderWidth / ((max - min) / step))) *
            step,
        max:
          min +
          Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
            step,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
    zIndex: zIndex.value,
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{translateX: position2.value}],
    zIndex: zIndex2.value,
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const opacityStyle2 = useAnimatedStyle(() => ({
    opacity: opacity2.value,
  }));

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{translateX: position.value}],
    width: position2.value - position.value,
  }));

  // Add this line for Reanimated from v3.5.0
  Animated.addWhitelistedNativeProps({text: true});
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  const minLabelText = useAnimatedProps(() => {
    return {
      text: `$${
        min +
        Math.floor(position.value / (sliderWidth / ((max - min) / step))) * step
      }`,
    };
  });
  const maxLabelText = useAnimatedProps(() => {
    return {
      text: `$${
        min +
        Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
          step
      }`,
    };
  });

  return (
    <View style={[styles.sliderContainer, {width: sliderWidth}]}>
      <View style={[styles.sliderBack, {width: sliderWidth}]} />
      <Animated.View style={[sliderStyle, styles.sliderFront]} />
      <GestureDetector gesture={pan}>
        <Animated.View style={[animatedStyle, styles.thumb]}>
          <Animated.View style={[opacityStyle, styles.label]}>
            <AnimatedTextInput
              style={styles.labelText}
              animatedProps={minLabelText}
              editable={false}
              defaultValue={`$${
                min +
                Math.floor(
                  position.value / (sliderWidth / ((max - min) / step)),
                ) *
                  step
              }`}
            />
          </Animated.View>
        </Animated.View>
      </GestureDetector>
      <GestureDetector gesture={pan2}>
        <Animated.View style={[animatedStyle2, styles.thumb]}>
          <Animated.View style={[opacityStyle2, styles.label]}>
            <AnimatedTextInput
              style={styles.labelText}
              animatedProps={maxLabelText}
              editable={false}
              defaultValue={`$${
                min +
                Math.floor(
                  position2.value / (sliderWidth / ((max - min) / step)),
                ) *
                  step
              }`}
            />
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sliderBack: {
    height: 8,
    backgroundColor: '#DFEAFB',
    borderRadius: 20,
  },
  sliderFront: {
    height: 8,
    backgroundColor: '#3F4CF6',
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    left: -10,
    width: 20,
    height: 20,
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: '#3F4CF6',
    borderWidth: 5,
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    top: -40,
    bottom: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
  },
});

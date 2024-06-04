import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  AnimatedRef,
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {OnboardingData} from '../data/data';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigator/RootNavigator';

type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  x: SharedValue<number>;
};

const Button = ({flatListRef, flatListIndex, dataLength, x}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(300)
          : withSpring(200),
    };
  });

  const nextTextAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  const animatedButtonColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#109a78', '#1e2169', '#F15937'],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  const animatedTextColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#cde6d5', '#cfe4e4', '#faeb8a'],
    );

    return {
      color: backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
        } else {
          navigation.navigate('Home');
        }
      }}>
      <Animated.View
        style={[styles.container, buttonAnimationStyle, animatedButtonColor]}>
        <Animated.Text
          style={[styles.textButton, textAnimationStyle, animatedTextColor]}>
          Get Started
        </Animated.Text>
        <Animated.Text
          style={[
            styles.textButton,
            nextTextAnimationStyle,
            animatedTextColor,
          ]}>
          Next
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 65,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    position: 'absolute',
    fontWeight: 'bold',
  },
});

import {Image, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

type Props = {
  progress: Animated.SharedValue<number>;
};

const Chevron = ({progress}: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));
  return (
    <Animated.View style={iconStyle}>
      <Image source={require('../assets/Chevron.png')} style={styles.chevron} />
    </Animated.View>
  );
};

export default Chevron;

const styles = StyleSheet.create({
  chevron: {
    width: 24,
    height: 24,
  },
});

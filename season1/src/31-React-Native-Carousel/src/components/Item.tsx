import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data} from '../data/data';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: Data;
  width: number;
  height: number;
  marginHorizontal: number;
  fullWidth: number;
  x: SharedValue<number>;
  index: number;
};

const Item = ({
  item,
  width,
  height,
  marginHorizontal,
  fullWidth,
  x,
  index,
}: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      x.value,
      [(index - 1) * fullWidth, index * fullWidth, (index + 1) * fullWidth],
      [20, 0, -20],
      Extrapolation.CLAMP,
    );
    const translateY = interpolate(
      x.value,
      [(index - 1) * fullWidth, index * fullWidth, (index + 1) * fullWidth],
      [60, 0, 60],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{rotateZ: `${rotateZ}deg`}, {translateY: translateY}],
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {width: width, height: height, marginHorizontal: marginHorizontal},
        animatedStyle,
      ]}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={[styles.image, {width: width}]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textExp}>{item.exp}</Text>
        </View>
        <View style={styles.visaContainer}>
          <Image source={item.visa} resizeMode="contain" style={styles.visa} />
        </View>
      </View>
      <Image source={require('../assets/chip.png')} style={styles.chip} />
    </Animated.View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    transformOrigin: 'bottom',
    overflow: 'hidden',
  },
  imageContainer: {flex: 4},
  image: {flex: 1},
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textName: {
    color: '#111111',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textExp: {
    color: '#111111',
    fontSize: 16,
  },
  visaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visa: {
    width: 58,
  },
  chip: {
    position: 'absolute',
    transform: [{scale: 0.4}, {rotateZ: '90deg'}],
    right: -40,
    top: 20,
  },
});

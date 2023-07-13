import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Category} from '../data/data';
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Chevron from './Chevron';

type Props = {
  value: Category;
};

const Accordion = ({value}: Props) => {
  const listRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0.1, heightValue.value],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = measure(listRef).height;
            })();
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
        <Text style={styles.textTitle}>{value.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef}>
          {value.content.map((v, i) => {
            return (
              <View key={i} style={styles.subContainer}>
                <Text style={styles.textSub}>{v}</Text>
              </View>
            );
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    backgroundColor: '#E2EDFB',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#0F56B3',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  textTitle: {fontSize: 16, color: 'black'},
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D6E1F0',
  },
  textSub: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
    height: '100%',
  },
});

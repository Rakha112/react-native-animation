import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';
import Chevron from './Chevron';
import {NestedItem} from '../data/data';

type Props = {
  value: NestedItem;
  parentHeighValue: SharedValue<number>;
};

const Accordion = ({value, parentHeighValue}: Props) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(listRef)!.height);
              parentHeighValue.value = withTiming(
                parentHeighValue.value + measure(listRef)!.height,
              );
            })();
          } else {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(0);
              parentHeighValue.value = withTiming(
                parentHeighValue.value - measure(listRef)!.height,
              );
            })();
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
        <Text style={styles.textTitle}>{value.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          {value.content.map((v, i) => {
            return (
              <View key={i} style={styles.content}>
                <Text style={styles.textContent}>{v}</Text>
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
    backgroundColor: '#E3EDFB',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#0F56B3',
    overflow: 'hidden',
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  content: {
    padding: 20,
    backgroundColor: '#D6E1F0',
  },
  textContent: {
    fontSize: 14,
    color: 'black',
  },
});

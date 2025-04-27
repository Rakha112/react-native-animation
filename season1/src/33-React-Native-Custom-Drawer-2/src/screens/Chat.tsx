import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {message} from '../data/data';
import Message from '../components/Message';
import Header from '../components/Header';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Overlay from '../components/Overlay';
import Drawer from '../components/Drawer';
import {SystemBars} from 'react-native-edge-to-edge';

const Chat = () => {
  const active = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return withTiming(active.value ? 1 : 0);
  });
  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -15],
      Extrapolation.CLAMP,
    );
    return {
      transform: [
        // {perspective: 1000},r
        {scale: active.value ? withTiming(0.8) : withTiming(1)},
        {translateX: active.value ? withSpring(240) : withTiming(0)},
        {
          rotateY: `${rotateY}deg`,
        },
      ],
      borderRadius: active.value ? withTiming(28) : withTiming(0),
    };
  });
  return (
    <>
      <Animated.View style={[styles.container, animatedStyle]}>
        {/* If you're not using react-native-edge-to-edge, you can remove SystemBars */}
        <SystemBars style={'light'} />
        <Header active={active} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={message}
          renderItem={({item, index}) => {
            return <Message item={item} key={index} />;
          }}
        />
        <Overlay active={active} />
      </Animated.View>
      <Drawer active={active} />
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2733',
    overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
  },
});

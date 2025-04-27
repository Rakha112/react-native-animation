/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SystemBars} from 'react-native-edge-to-edge';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Drawer from './src/components/Drawer';
import Header from './src/components/Header';
import Message from './src/components/Message';
import {message} from './src/data/data';

const CustomDrawerScreen = () => {
  const active = useSharedValue(false);
  const drawerWidth = useSharedValue(1000);
  const drawerTranslateX = useSharedValue(-drawerWidth.value);

  const animatedStyle = useAnimatedStyle(() => {
    const containerTranslateX = interpolate(
      drawerTranslateX.value,
      [-drawerWidth.value, 0],
      [0, 100],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{translateX: containerTranslateX}],
    };
  });

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* If you're not using react-native-edge-to-edge, you can remove SystemBars */}
        <SystemBars style={'light'} />
        <Drawer
          active={active}
          translateX={drawerTranslateX}
          drawerWidth={drawerWidth}
        />
        <Animated.View style={[styles.container, animatedStyle]}>
          <Header active={active} />
          <FlatList
            data={message}
            renderItem={({item, index}) => {
              return <Message item={item} key={index} />;
            }}
          />
        </Animated.View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default CustomDrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2733',
  },
});

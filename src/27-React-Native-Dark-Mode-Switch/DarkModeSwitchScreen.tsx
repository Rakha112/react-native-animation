/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetMethods} from './src/components/BottomSheet';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Button from './src/components/Button';
import {SystemBars} from 'react-native-bars';

const DarkModeSwitchScreen = () => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const [theme, setTheme] = useState<string | null | undefined>(colorScheme);
  const [themeSwitch, setThemeSwitch] = useState<string>('system');

  useEffect(() => {
    if (themeSwitch === 'system') {
      setTheme(colorScheme);
    }
  }, [colorScheme, themeSwitch]);

  const backgroundColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor:
        theme === 'dark' ? withTiming('black') : withTiming('white'),
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <SystemBars
          animated={true}
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Animated.View
          style={[
            styles.container,
            {paddingTop: insets.top},
            backgroundColorAnimation,
          ]}>
          <Button bottomSheetRef={bottomSheetRef} theme={theme} />
          <BottomSheet
            ref={bottomSheetRef}
            setTheme={setTheme}
            theme={theme}
            setThemeSwitch={setThemeSwitch}
            themeSwitch={themeSwitch}
          />
        </Animated.View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default DarkModeSwitchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import BottomTabIcon from './BottomTabIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  // I'm using the inset from react-native-safe-area-context as the bottom value.
  // If you're not using react-native-safe-area-context, you can change it according to your needs.
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(TAB_WIDTH * state.index)}],
    };
  });

  return (
    <View
      style={[
        styles.tabBarContainer,
        {width: TAB_BAR_WIDTH, bottom: insets.bottom},
      ]}>
      <Animated.View
        style={[
          styles.slidingTabContainer,
          {width: TAB_WIDTH},
          translateAnimation,
        ]}>
        <View style={styles.slidingTab} />
      </Animated.View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.contentContainer}>
              <BottomTabIcon route={route.name} isFocused={isFocused} />
              <Text
                style={{
                  color: isFocused ? '#0067FF' : 'white',
                  fontSize: 12,
                }}>
                {route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#0067FF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slidingTab: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

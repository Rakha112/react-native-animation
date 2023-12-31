import {StyleSheet, useWindowDimensions} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import BackDrop from './BackDrop';
import Switch from './Switch';
import Icon from './Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  setTheme: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  theme: string | null | undefined;
  setThemeSwitch: React.Dispatch<React.SetStateAction<string>>;
  themeSwitch: string;
};

export interface BottomSheetMethods {
  expand: () => void;
  close: () => void;
}

const BottomSheet = forwardRef<BottomSheetMethods, Props>(
  ({setTheme, theme, setThemeSwitch, themeSwitch}, ref) => {
    const insets = useSafeAreaInsets();
    const {width} = useWindowDimensions();
    const [bottomSheetHeight, setBottomSheetHeight] = useState(1000);
    const OPEN = 0;
    const CLOSE = bottomSheetHeight + insets.bottom;
    const translateY = useSharedValue(CLOSE);

    const expand = useCallback(() => {
      translateY.value = withTiming(OPEN);
    }, [translateY]);

    const close = useCallback(() => {
      translateY.value = withTiming(CLOSE);
    }, [CLOSE, translateY]);

    useImperativeHandle(
      ref,
      () => ({
        expand,
        close,
      }),
      [expand, close],
    );

    const animationStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateY: translateY.value}],
      };
    });

    const backgroundColorAnimation = useAnimatedStyle(() => {
      return {
        backgroundColor:
          theme === 'dark' ? withTiming('#22272B') : withTiming('white'),
      };
    });

    const lineColorAnimation = useAnimatedStyle(() => {
      return {
        backgroundColor:
          theme === 'dark' ? withTiming('white') : withTiming('black'),
      };
    });

    const textColorAnimation = useAnimatedStyle(() => {
      return {
        color: theme === 'dark' ? withTiming('white') : withTiming('black'),
      };
    });

    const pan = Gesture.Pan()
      .onUpdate(event => {
        if (event.translationY < 0) {
          translateY.value = withSpring(OPEN, {
            damping: 200,
            stiffness: 800,
          });
        } else {
          translateY.value = withSpring(event.translationY, {
            damping: 100,
            stiffness: 400,
          });
        }
      })
      .onEnd(() => {
        if (translateY.value > 50) {
          translateY.value = withSpring(CLOSE, {
            damping: 100,
            stiffness: 400,
          });
        } else {
          translateY.value = withSpring(OPEN, {
            damping: 100,
            stiffness: 400,
          });
        }
      });

    return (
      <>
        <BackDrop
          close={close}
          translateY={translateY}
          openHeight={OPEN}
          closeHeight={CLOSE}
        />
        <GestureDetector gesture={pan}>
          <Animated.View
            style={[
              styles.container,
              {
                width: width * 0.92,
                bottom: insets.bottom,
              },
              animationStyle,
              backgroundColorAnimation,
            ]}
            onLayout={({nativeEvent}) => {
              const {height} = nativeEvent.layout;
              if (height) {
                setBottomSheetHeight(height);
                translateY.value = withTiming(height + insets.bottom);
              }
            }}>
            <Animated.View style={[styles.line, lineColorAnimation]} />
            <Icon theme={theme} />
            <Animated.Text style={[styles.textTitle, textColorAnimation]}>
              Choose a style
            </Animated.Text>
            <Animated.Text style={[styles.text, textColorAnimation]}>
              Pop or subtle. Day or nigth.
            </Animated.Text>
            <Animated.Text style={[styles.text, textColorAnimation]}>
              Custimize your interface.
            </Animated.Text>
            <Switch
              setTheme={setTheme}
              theme={theme}
              setThemeSwitch={setThemeSwitch}
              themeSwitch={themeSwitch}
            />
          </Animated.View>
        </GestureDetector>
      </>
    );
  },
);

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  line: {
    position: 'absolute',
    top: 8,
    width: 40,
    height: 4,
    borderRadius: 8,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 14,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

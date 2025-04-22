import { AntDesign } from "@expo/vector-icons";
import { TabTriggerSlotProps } from "expo-router/ui";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";

interface CustomTabButtonProps
  extends React.PropsWithChildren,
    TabTriggerSlotProps {
  icon: keyof typeof AntDesign.glyphMap;
  show: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const CustomTabButton = React.forwardRef<View, CustomTabButtonProps>(
  (props, ref) => {
    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: props.show
          ? withTiming(0, { duration: 100 })
          : withDelay(150, withTiming(1, { duration: 200 })),
        transform: [
          {
            translateY: withTiming(props.show ? 50 : 0),
          },
        ],
      };
    });

    return (
      <AnimatedPressable
        ref={ref}
        {...props}
        style={[styles.button, animatedStyle]}
      >
        <AntDesign
          name={props.icon}
          size={24}
          color={props.isFocused ? "#fcfcfc" : "#81838c"}
        />
      </AnimatedPressable>
    );
  }
);

CustomTabButton.displayName = "CustomTabButton";

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

type Props = {
  children: ReactNode;
  onPress?: () => void;
  delay?: number;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ContentButton = ({ children, onPress, delay = 0 }: Props) => {
  return (
    <AnimatedPressable
      style={styles.container}
      onPress={onPress}
      entering={FadeInDown.delay(delay)}
      exiting={FadeOutDown}
    >
      {children}
    </AnimatedPressable>
  );
};

export default ContentButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 18,
    gap: 16,
  },
});

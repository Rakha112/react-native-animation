import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  scroll: SharedValue<number>;
  maxScrollValue: number;
};

const Circle = ({ scroll, maxScrollValue }: Props) => {
  const { width: SCREEN_WIDHT } = useWindowDimensions();
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      -scroll.value,
      [0, maxScrollValue],
      [200, SCREEN_WIDHT - 20],
      Extrapolation.CLAMP
    );
    return { width };
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          { borderRadius: maxScrollValue / 2 },
          animatedStyle,
        ]}
      />
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "white",
    aspectRatio: 1,
    borderRadius: 100,
  },
});

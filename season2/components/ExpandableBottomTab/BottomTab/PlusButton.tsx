import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  FadeInDown,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  onPress: () => void;
  animatedButtonWidth: SharedValue<number>;
  show: boolean;
};

const PlusButton = ({ animatedButtonWidth, onPress, show }: Props) => {
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      width: animatedButtonWidth.value,
    };
  });

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Animated.View style={[styles.inner, animatedButtonStyle]}>
        {show ? (
          <Animated.Text entering={FadeInDown} style={styles.text}>
            Cancel
          </Animated.Text>
        ) : (
          <Animated.View entering={FadeInDown}>
            <AntDesign name="plus" size={26} color="#111111" />
          </Animated.View>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", zIndex: 6 },
  inner: {
    width: 50,
    height: 50,
    backgroundColor: "#fcfcfc",
    borderRadius: 1000,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter-Regular",
  },
});

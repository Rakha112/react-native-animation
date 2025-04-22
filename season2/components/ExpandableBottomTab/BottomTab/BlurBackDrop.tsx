import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const BlurBackDrop = () => {
  return (
    <Animated.View
      style={StyleSheet.absoluteFillObject}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <BlurView
        intensity={15}
        style={styles.blurContainer}
        experimentalBlurMethod={"dimezisBlurView"}
      />
    </Animated.View>
  );
};

export default BlurBackDrop;

const styles = StyleSheet.create({
  blurContainer: { flex: 1 },
});

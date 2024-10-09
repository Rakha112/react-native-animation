import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import { useFont } from "@shopify/react-native-skia";
import Slider from "@/components/Slider/Slider";
import { useSharedValue } from "react-native-reanimated";
import Circle from "@/components/Slider/Circle";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/Slider/Header";
import Button from "@/components/Slider/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { width } = useWindowDimensions();
  const SLIDER_WIDTH = width;
  const SLIDER_HEIGHT = 200;
  const MAX_VALUE = 250;
  const MIN_VALUE = 0;
  const STEP = 10;
  const font1 = useFont(
    require("../../assets/fonts/SpaceMono-Regular.ttf"),
    18
  );
  const font2 = useFont(
    require("../../assets/fonts/SpaceMono-Regular.ttf"),
    48
  );
  const scroll = useSharedValue(0);

  const handleScroll = (e: number) => {
    scroll.value = e;
  };

  if (!font1 || !font2) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="light" />
      <Header />
      <View style={styles.contentContainer}>
        <Circle scroll={scroll} maxScrollValue={MAX_VALUE * STEP} />
        <Slider
          font1={font1}
          font2={font2}
          height={SLIDER_HEIGHT}
          width={SLIDER_WIDTH}
          minValue={MIN_VALUE}
          maxValue={MAX_VALUE}
          step={STEP}
          onScroll={handleScroll}
        />
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

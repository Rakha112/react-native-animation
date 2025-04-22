import BlurBackDrop from "@/components/ExpandableBottomTab/BottomTab/BlurBackDrop";
import BottomTabContent from "@/components/ExpandableBottomTab/BottomTab/BottomTabContent";
import { CustomTabButton } from "@/components/ExpandableBottomTab/BottomTab/CustomTabButton";
import PlusButton from "@/components/ExpandableBottomTab/BottomTab/PlusButton";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import React, { useCallback, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("screen").width;
const BOTTOM_TAB_HEIGHT = 70;

const ExpandableBottomTabLayout = () => {
  const [show, setShow] = useState(false);
  const animatedWidth = useSharedValue(WIDTH * 0.5);
  const animatedHeight = useSharedValue(70);
  const animatedBorderRadius = useSharedValue(80);
  const animatedButtonWidth = useSharedValue(50);

  const onPress = useCallback(() => {
    if (show) {
      animatedWidth.value = withDelay(150, withTiming(WIDTH * 0.5));
      animatedHeight.value = withDelay(150, withTiming(BOTTOM_TAB_HEIGHT));
      animatedBorderRadius.value = withDelay(150, withTiming(80));
      animatedButtonWidth.value = withTiming(50);
    } else {
      animatedWidth.value = withSpring(WIDTH * 0.9);
      animatedBorderRadius.value = withSpring(30);
      animatedButtonWidth.value = withDelay(100, withSpring(WIDTH * 0.8));
    }
    setShow(!show);
  }, [show]);

  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabList}>
        <TabTrigger name="home" href="/ExpandableBottomTab" asChild>
          <CustomTabButton icon="home" show={show}>
            Home
          </CustomTabButton>
        </TabTrigger>
        <PlusButton
          animatedButtonWidth={animatedButtonWidth}
          onPress={onPress}
          show={show}
        />
        <TabTrigger
          name="settings"
          href="/ExpandableBottomTab/settings"
          asChild
        >
          <CustomTabButton icon="setting" show={show}>
            Settings
          </CustomTabButton>
        </TabTrigger>
      </TabList>
      <BottomTabContent
        show={show}
        animatedHeight={animatedHeight}
        animatedBorderRadius={animatedBorderRadius}
        animatedWidth={animatedWidth}
        bottomTabHeight={BOTTOM_TAB_HEIGHT}
      />
      {show && <BlurBackDrop />}
    </Tabs>
  );
};

export default ExpandableBottomTabLayout;

const styles = StyleSheet.create({
  tabList: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    padding: 8,
    width: WIDTH * 0.5,
    height: 70,
    alignItems: "center",
    zIndex: 5,
  },
});

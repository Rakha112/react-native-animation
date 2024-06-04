import { StackNavigator } from "@/layouts/StackNavigator";
import { TransitionPresets } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      if (Platform.OS === "android") {
        // enables edge-to-edge mode
        NavigationBar.setPositionAsync("absolute");
        // transparent backgrounds to see through
        NavigationBar.setBackgroundColorAsync("#ffffff00");
      }
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <StackNavigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <StackNavigator.Screen name="index" />
      <StackNavigator.Screen name="3dModel/index" />
    </StackNavigator>
  );
}

/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  View,
  Linking,
} from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowIcon from "@/assets/icons/ArrowIcon.svg";
import YoutubeIcon from "@/assets/icons/YoutubeIcon.svg";
import { MotiView } from "moti";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const { width } = useWindowDimensions();

  const data = [
    {
      navigate: "3dModel",
      title: "01. Load 3D Model With React Three Fiber",
    },
    {
      navigate: "Slider",
      title: "02. Custom Slider With Skia, Reanimated and Gesture Handler",
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar animated style="dark" />
          <MotiView
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            style={[styles.cardContainer, { width: width * 0.95 }]}
          >
            <View>
              <Text style={styles.cardText}>React Native</Text>
              <Text style={styles.cardText}>Animation Tutorial</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                Linking.openURL(
                  "https://www.youtube.com/channel/UCUb0G_PXtgWV_TmuJXLFxRw"
                );
              }}
            >
              <MotiView style={[styles.cardButton, { width: width * 0.8 }]}>
                <YoutubeIcon width={50} height={50} />
                <Text style={styles.cardButtonText}>Watch on Youtube</Text>
              </MotiView>
            </TouchableWithoutFeedback>
          </MotiView>
          {data.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.navigate(v.navigate as any);
                }}
                key={i}
              >
                <MotiView
                  style={styles.listContainer}
                  from={{ opacity: 0, translateY: 50, scale: 0.5 }}
                  animate={{ opacity: 1, translateY: 0, scale: 1 }}
                  transition={{ delay: 100 + i * 100 }}
                >
                  <Text style={styles.listText}>{v.title}</Text>
                  <ArrowIcon width={14} height={14} />
                </MotiView>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F6" },
  cardContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#1C6BC8",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 25,
  },
  cardText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
  },
  cardButton: {
    backgroundColor: "white",
    height: 46,
    borderRadius: 12.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardButtonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Inter-Medium",
  },
  listContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  listText: { color: "black", fontFamily: "Inter-Medium" },
});

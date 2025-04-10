import { router } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

const Header = () => {
  const handlePress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.backButton}>
        <Image
          source={require("../../assets/icons/LeftArrow.png")}
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.text}>Add Weight</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 40 : 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    zIndex: 2,
  },
  icon: {
    width: 28,
    height: 28,
  },
  text: {
    position: "absolute",
    textAlign: "center",
    left: 0,
    right: 0,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    zIndex: 1,
  },
});

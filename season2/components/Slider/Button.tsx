import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = () => {
  const handlePress = () => {
    console.log("Next");
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>Next</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 18,
    margin: 20,
    borderRadius: 100,
  },
  text: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
  },
});

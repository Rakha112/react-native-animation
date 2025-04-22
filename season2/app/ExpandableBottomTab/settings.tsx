import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const settings = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="light" />
      <Text>settings</Text>
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});

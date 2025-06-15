import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import ContentButton from "./ContentButton";

type Props = {
  animatedHeight: SharedValue<number>;
  animatedWidth: SharedValue<number>;
  animatedBorderRadius: SharedValue<number>;
  show: boolean;
  bottomTabHeight: number;
};

const BottomTabContent = ({
  animatedHeight,
  show,
  animatedBorderRadius,
  animatedWidth,
  bottomTabHeight,
}: Props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      height: animatedHeight.value,
      borderRadius: animatedBorderRadius.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {show && (
        <View
          onLayout={(e) => {
            animatedHeight.value = withSpring(
              e.nativeEvent.layout.height + bottomTabHeight
            );
          }}
        >
          <ContentButton delay={200}>
            <MaterialIcons name="credit-card" size={24} color="#fcfcfc" />
            <Text style={styles.text}>Add new Card</Text>
          </ContentButton>
          <ContentButton delay={300}>
            <MaterialCommunityIcons
              name="cash-plus"
              size={24}
              color="#fcfcfc"
            />
            <Text style={styles.text}>Add Income</Text>
          </ContentButton>
          <ContentButton delay={400}>
            <MaterialCommunityIcons
              name="swap-horizontal"
              size={24}
              color="#fcfcfc"
            />
            <Text style={styles.text}>Transfer Between Cards</Text>
          </ContentButton>
          <ContentButton delay={500}>
            <MaterialIcons name="bar-chart" size={24} color="#fcfcfc" />
            <Text style={styles.text}>Set Budget Limit</Text>
          </ContentButton>
        </View>
      )}
    </Animated.View>
  );
};

export default BottomTabContent;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    zIndex: 4,
    backgroundColor: "#292929",
    overflow: "hidden",
  },
  text: {
    color: "#fcfcfc",
    fontFamily: "Inter-Regular",
  },
});

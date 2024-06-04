import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Canvas,
  Circle,
  RadialGradient,
  vec,
} from "@shopify/react-native-skia";
import { useSharedValue, withTiming } from "react-native-reanimated";

const Gradient = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const gradient = useSharedValue(0);

  useEffect(() => {
    if (width !== 0) {
      gradient.value = withTiming(width / 2, { duration: 1000 });
    }
  }, [width]);

  return (
    <Canvas
      style={StyleSheet.absoluteFillObject}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
      }}
    >
      <Circle r={width / 2} cx={width / 2} cy={height / 2}>
        <RadialGradient
          c={vec(width / 2, height / 2)}
          r={gradient}
          colors={["#3b3b3b", "black"]}
        />
      </Circle>
    </Canvas>
  );
};

export default Gradient;

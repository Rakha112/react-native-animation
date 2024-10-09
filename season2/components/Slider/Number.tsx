import React from "react";
import { Blur, SkFont, Text as SKText } from "@shopify/react-native-skia";
import {
  Extrapolation,
  interpolate,
  SharedValue,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  font: SkFont;
  number: number;
  index: number;
  active: SharedValue<boolean>;
  translateX: SharedValue<number>;
  width: number;
  height: number;
};

const Number = ({
  font,
  number,
  index,
  active,
  translateX,
  width,
  height,
}: Props) => {
  const text = number.toString();
  const textSize = font.measureText(text);
  const blur = useDerivedValue(() => {
    return active.value ? withTiming(5) : withTiming(0);
  });

  const selectedValue = useDerivedValue(() => {
    return -translateX.value / 10;
  });

  const opacity = useDerivedValue(() => {
    return interpolate(
      selectedValue.value,
      [index - 1, index, index + 1],
      [0, 1, 0],
      Extrapolation.CLAMP
    );
  });

  return (
    <SKText
      opacity={opacity}
      font={font}
      text={text}
      color={"white"}
      x={index * 100 + width / 2 - textSize.width / 2}
      y={height / 2 - 20}
    >
      <Blur blur={blur} mode={"clamp"} />
    </SKText>
  );
};

export default Number;

import React from "react";
import { SkFont, Text as SKText } from "@shopify/react-native-skia";

type Props = {
  number: number;
  index: number;
  font: SkFont;
  width: number;
  height: number;
};

const SliderText = ({ number, font, index, height, width }: Props) => {
  const text = number % 10 === 0 ? number.toString() : "";
  const textSize = font.measureText(text);
  return (
    <SKText
      font={font}
      text={text}
      color={"white"}
      x={index * 10 + width / 2 - textSize.width / 2}
      y={height / 2 + 70}
    />
  );
};

export default SliderText;

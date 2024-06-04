import React from 'react';
import {Text, useFont} from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  x: number;
  y: number;
  text: string;
  selectedBar: SharedValue<string | null>;
};

const XAxisText = ({x, y, text, selectedBar}: Props) => {
  const font = useFont(require('../assets/fonts/Roboto-Bold.ttf'), 18);

  const color = useDerivedValue(() => {
    if (selectedBar.value === text) {
      return withTiming('#111111');
    } else if (selectedBar.value === null) {
      return withTiming('#111111');
    } else {
      return withTiming('#d1d0c5');
    }
  });

  if (!font) {
    return null;
  }

  const fontSize = font.measureText(text);

  return (
    <Text
      font={font}
      x={x - fontSize.width / 2}
      y={y}
      text={text}
      color={color}
    />
  );
};

export default XAxisText;

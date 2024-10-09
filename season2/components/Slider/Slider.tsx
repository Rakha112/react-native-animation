import React from "react";
import {
  runOnJS,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withClamp,
  withDecay,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Canvas, Group, Line, SkFont } from "@shopify/react-native-skia";
import SliderText from "./SliderText";
import Number from "./Number";

type Props = {
  font1: SkFont;
  font2: SkFont;
  height: number;
  width: number;
  minValue: number;
  maxValue: number;
  step: number;
  onScroll?: (value: number) => void;
};

const Slider = ({
  font1,
  font2,
  height,
  width,
  minValue,
  maxValue,
  step,
  onScroll,
}: Props) => {
  const xCenter = width / 2;
  const yCenter = height / 2;
  const translateX = useSharedValue(0);
  const active = useSharedValue(false);

  const createArrayInRange = (min: number, max: number): number[] => {
    const length = max - min + 1;
    return Array.from({ length }, (_, i) => min + i);
  };

  const numbers = createArrayInRange(minValue, maxValue);

  useAnimatedReaction(
    () => translateX.value,
    (value) => {
      if (onScroll) {
        runOnJS(onScroll)(value);
      }
    },
    [onScroll]
  );

  const pan = Gesture.Pan()
    .onChange((e) => {
      active.value = true;
      const _translateX = -(translateX.value + e.changeX);
      if (_translateX < 0) {
        translateX.value = withSpring(-_translateX, {
          damping: 10,
          stiffness: 100,
        });
      } else if (_translateX > (numbers.length - 1) * step) {
        translateX.value = withSpring(-_translateX, {
          damping: 10,
          stiffness: 100,
        });
      } else {
        translateX.value = -_translateX;
      }
    })
    .onFinalize((e) => {
      if (translateX.value > 0) {
        translateX.value = withSpring(0, {
          damping: 10,
          stiffness: 100,
        });
        active.value = false;
      } else if (translateX.value < -((numbers.length - 1) * step)) {
        translateX.value = withSpring(-((numbers.length - 1) * step), {
          damping: 10,
          stiffness: 100,
        });
        active.value = false;
      } else {
        translateX.value = withClamp(
          {
            min: -((numbers.length - 1) * step),
            max: 0,
          },
          withDecay(
            {
              velocity: e.velocityX,
              clamp: [-((numbers.length - 1) * step), 0],
            },
            (finish) => {
              if (finish) {
                translateX.value = withSpring(
                  Math.round(translateX.value / step) * step,
                  {
                    damping: 10,
                    stiffness: 100,
                  }
                );
                active.value = false;
              }
            }
          )
        );
      }
    });

  const transform = useDerivedValue(() => {
    return [{ translateX: translateX.value }];
  });

  const transform2 = useDerivedValue(() => {
    return [{ translateX: translateX.value * 10 }];
  });

  return (
    <GestureDetector gesture={pan}>
      <Canvas style={{ width: width, height: height }}>
        <Group transform={transform2}>
          {numbers.map((number, index) => (
            <Number
              active={active}
              font={font2}
              index={index}
              number={number}
              translateX={translateX}
              width={width}
              height={height}
              key={index}
            />
          ))}
        </Group>
        <Line
          p1={{ x: xCenter, y: yCenter }}
          p2={{
            x: xCenter,
            y: yCenter + 5,
          }}
          color="white"
          strokeWidth={2}
        />
        <Group transform={transform}>
          {numbers.map((number, index) => (
            <Group key={index}>
              <Line
                p1={{ x: index * step + xCenter, y: yCenter + 15 }}
                p2={{
                  x: index * step + xCenter,
                  y:
                    index % 10 === 0
                      ? yCenter + 45
                      : number % 5 === 0
                      ? yCenter + 38
                      : yCenter + 30,
                }}
                color="white"
                strokeWidth={2}
              />
              <SliderText
                font={font1}
                index={index}
                number={number}
                width={width}
                height={height}
              />
            </Group>
          ))}
        </Group>
      </Canvas>
    </GestureDetector>
  );
};

export default Slider;

import React from 'react';
import {LinearGradient, Path, Skia} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';

type Props = {
  chartHeight: number;
  chartWidth: number;
  chartMargin: number;
  curvedLine: string;
  animationGradient: SharedValue<{x: number; y: number}>;
};

const Gradient = ({
  chartHeight,
  chartWidth,
  chartMargin,
  curvedLine,
  animationGradient,
}: Props) => {
  const getGradientArea = (
    chartLine: string,
    width: number,
    height: number,
  ) => {
    // Create a path from the chart line
    const gradientAreaSplit = Skia.Path.MakeFromSVGString(chartLine);

    // Close the path if exists
    if (gradientAreaSplit) {
      gradientAreaSplit
        // add line to the bottom right corner
        .lineTo(width - chartMargin, height)
        // add line to the bottom left corner
        .lineTo(chartMargin, height)
        // add line to the first point
        .lineTo(chartMargin, gradientAreaSplit.getPoint(0).y);
    }

    return gradientAreaSplit;
  };
  return (
    <Path path={getGradientArea(curvedLine!, chartWidth, chartHeight)!}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={animationGradient}
        colors={['rgba(234, 249, 132, 0.2)', 'rgba(234, 249, 132, 0)']}
      />
    </Path>
  );
};

export default Gradient;

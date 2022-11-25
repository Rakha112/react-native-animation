import React, {memo} from 'react';
import Svg from 'react-native-svg';
import {useDerivedValue, withTiming} from 'react-native-reanimated';
import AnimatedCheckMarkPath from './AnimatedCheckMarkPath';
import AnimatedColor from './AnimatedColor';
const CustomCheckBox = memo(props => {
  const {
    checked,
    checkMarkColor,
    checkedBorderColor,
    unCheckedBorderColor,
    checkedBackgroundColor,
    unCheckedBackgroundColor,
    height,
    width,
  } = props;
  const progress = useDerivedValue(() => {
    return withTiming(checked ? 1 : 0);
  });

  return (
    <Svg width={width} height={height} viewBox="0 0 49 49">
      <AnimatedColor
        progress={progress}
        checkedBorderColor={checkedBorderColor}
        unCheckedBorderColor={unCheckedBorderColor}
        checkedBackgroundColor={checkedBackgroundColor}
        unCheckedBackgroundColor={unCheckedBackgroundColor}
      />
      <AnimatedCheckMarkPath
        progress={progress}
        checkMarkColor={checkMarkColor}
      />
    </Svg>
  );
});

export default CustomCheckBox;

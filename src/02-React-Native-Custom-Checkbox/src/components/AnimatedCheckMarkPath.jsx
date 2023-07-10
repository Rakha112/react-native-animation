import React, {useRef, useState, memo} from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import {Path} from 'react-native-svg';
const AnimatedCheckMarkPath = memo(props => {
  const {progress, checkMarkColor} = props;
  const [length, setLength] = useState(0);
  const pathRef = useRef(null);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const checkMarkAnimation = useAnimatedProps(() => {
    const strokeDashoffset = length - length * progress.value;
    const opacity = progress.value;
    return {strokeDashoffset, opacity};
  });
  return (
    <AnimatedPath
      animatedProps={checkMarkAnimation}
      onLayout={() => setLength(pathRef.current.getTotalLength())}
      ref={pathRef}
      d="M12 24.4068L20.6667 32.9999L36.5 17.1667"
      stroke={checkMarkColor}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={length}
      fill="none"
    />
  );
});

export default AnimatedCheckMarkPath;

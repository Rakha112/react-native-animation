import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber/native';
import {MeshDistortMaterial} from '@react-three/drei/native';
import {SharedValue, interpolateColor} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import {Mesh, MeshStandardMaterial} from 'three';

type Props = {
  x: SharedValue<number>;
};

const Abstract = ({x}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
      ['#109a78', '#1e2169', '#F15937'],
    );
    const material = meshRef.current.material as MeshStandardMaterial;
    material.color.set(backgroundColor);
  });

  return (
    <mesh ref={meshRef}>
      <MeshDistortMaterial distort={0.3} speed={5} />
      <sphereGeometry args={[2.5, 250, 250]} />
    </mesh>
  );
};

export default Abstract;

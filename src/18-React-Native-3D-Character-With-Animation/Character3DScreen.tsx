import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import Character from './src/components/Character';
import {LoaderProvider} from './src/context/LoaderProvider';
import Trigger from './src/components/Trigger';
import Loader from './src/components/Loader';

const Character3DScreen = () => {
  const [OrbitControls, events] = useControls();

  return (
    <LoaderProvider>
      <SafeAreaView style={styles.container}>
        <Loader />
        <View style={styles.modelContainer} {...events}>
          <Canvas
            onCreated={state => {
              const _gl: any = state.gl.getContext();
              const pixelStorei = _gl.pixelStorei.bind(_gl);
              _gl.pixelStorei = function (...args: any[]) {
                const [parameter] = args;
                switch (parameter) {
                  case _gl.UNPACK_FLIP_Y_WEBGL:
                    return pixelStorei(...args);
                }
              };
            }}>
            <OrbitControls enablePan={false} />
            <ambientLight intensity={3} />
            <Suspense fallback={<Trigger />}>
              <Character />
            </Suspense>
          </Canvas>
        </View>
      </SafeAreaView>
    </LoaderProvider>
  );
};

export default Character3DScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modelContainer: {
    flex: 1,
  },
});

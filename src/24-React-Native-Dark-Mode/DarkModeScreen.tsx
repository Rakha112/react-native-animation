import {FlatList, StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from './src/components/Header';
import {message} from './src/data/data';
import Message from './src/components/Message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Canvas,
  Group,
  Image,
  Mask,
  Rect,
  SkImage,
  makeImageFromView,
} from '@shopify/react-native-skia';
import {useSharedValue, withTiming} from 'react-native-reanimated';

const DarkModeScreen = () => {
  const ref = useRef(null);
  const [theme, setTheme] = useState('dark');
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
  const mask = useSharedValue(0);
  const [active, setActive] = useState(false);

  const wait = async (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const handlePress = async () => {
    if (!active) {
      setActive(true);
      const snapshot1 = await makeImageFromView(ref);
      setOverlay(snapshot1);
      await wait(80);

      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }

      mask.value = withTiming(SCREEN_HEIGHT, {duration: 800});
      await wait(800);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };
  return (
    <SafeAreaProvider>
      <View
        ref={ref}
        style={theme === 'dark' ? darkStyles.container : styles.container}>
        <Header handlePress={handlePress} theme={theme} />
        <FlatList
          data={message}
          renderItem={({item, index}) => {
            return <Message item={item} key={index} theme={theme} />;
          }}
        />
      </View>
      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Rect
                  height={SCREEN_HEIGHT}
                  width={SCREEN_WIDTH}
                  color="white"
                />
                <Rect height={SCREEN_HEIGHT} width={mask} color="black" />
              </Group>
            }>
            <Image
              image={overlay}
              x={0}
              y={0}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
            />
          </Mask>
        </Canvas>
      )}
    </SafeAreaProvider>
  );
};

export default DarkModeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2733',
  },
});

import {Dimensions, FlatList, PixelRatio, StyleSheet, View} from 'react-native';
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
import {SystemBars} from 'react-native-bars';

const DarkModeScreen = () => {
  const pd = PixelRatio.get();
  const ref = useRef(null);
  const [theme, setTheme] = useState('dark');
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');
  const mask = useSharedValue(0);
  const [active, setActive] = useState(false);

  const wait = async (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const handlePress = async () => {
    if (!active) {
      setActive(true);
      const snapshot = await makeImageFromView(ref);
      setOverlay(snapshot);
      await wait(80);

      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }

      mask.value = withTiming(SCREEN_WIDTH, {duration: 800});
      await wait(800);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };
  return (
    <SafeAreaProvider>
      {/* If you're not using react-native-bars, you can remove the SystemBars */}
      <SystemBars
        animated={true}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <View
        ref={ref}
        collapsable={false}
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
        <Canvas style={StyleSheet.absoluteFillObject} pointerEvents={'none'}>
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
              width={overlay.width() / pd}
              height={overlay.height() / pd}
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

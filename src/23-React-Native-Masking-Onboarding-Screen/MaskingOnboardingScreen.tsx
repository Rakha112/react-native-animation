import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import data from './src/data/data';
import RenderItem from './src/components/RenderItem';
import CustomButton from './src/components/CustomButton';
import {
  Canvas,
  Circle,
  Group,
  Image,
  Mask,
  SkImage,
  makeImageFromView,
} from '@shopify/react-native-skia';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import Pagination from './src/components/Pagination';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootNavigator';

const OnboardingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const pd = PixelRatio.get();
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const mask = useSharedValue(0);
  const buttonVal = useSharedValue(0);

  const wait = async (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const handlePress = async () => {
    if (currentIndex === data.length - 1 && !active) {
      console.log('END');
      navigation.navigate('Home');
      return;
    }
    if (!active) {
      setActive(true);

      const snapshot1 = await makeImageFromView(ref);
      setOverlay(snapshot1);
      await wait(80);

      setCurrentIndex(prev => prev + 1);
      mask.value = withTiming(SCREEN_HEIGHT, {duration: 1000});
      buttonVal.value = withTiming(buttonVal.value + SCREEN_HEIGHT);
      await wait(1000);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };
  return (
    <View style={styles.container}>
      <View ref={ref} collapsable={false}>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={mask}
                  color="black"
                />
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
      <CustomButton handlePress={handlePress} buttonVal={buttonVal} />
      <Pagination data={data} buttonVal={buttonVal} />
      <Text style={styles.credit}>Illustration by OlFi from Ouch!</Text>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  credit: {
    position: 'absolute',
    bottom: 22,
    color: 'white',
  },
});

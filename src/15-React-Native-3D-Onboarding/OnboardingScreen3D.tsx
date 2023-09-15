import {StyleSheet, View, FlatList, ViewToken} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';
import data, {OnboardingData} from './src/data/data';
import {Canvas} from '@react-three/fiber/native';
import Abstract from './src/components/Abstract';
import useControls from 'r3f-native-orbitcontrols';
import {Float} from '@react-three/drei/native';
import Pagination from './src/components/Pagination';
import Button from './src/components/Button';
import RenderItem from './src/components/RenderItem';
import Backdrop from './src/components/Backdrop';

const OnboardingScreen = () => {
  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const [OrbitControls, events] = useControls();

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Backdrop x={x} />
      <View style={styles.abstractContainer} {...events}>
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[0, 1, 0]} args={['white', 2]} />
          <directionalLight position={[0, 0, 1]} args={['white', 2]} />
          <Float speed={8} floatIntensity={3}>
            <Abstract x={x} />
          </Float>
        </Canvas>
      </View>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item}) => {
          return <RenderItem item={item} />;
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <View style={styles.bottomContainer}>
        <Pagination data={data} x={x} />
        <Button
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
          x={x}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  abstractContainer: {
    flex: 1,
  },
  bottomContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});

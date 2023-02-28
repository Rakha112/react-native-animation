/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import data from './src/data/data';
import Pagination from './src/components/Pagination';
import CustomButton from './src/components/CustomButton';

const OnboardingScreen = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const flatListRef = useAnimatedRef(null);
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const onViewableItemsChanged = ({viewableItems}) => {
    flatListIndex.value = viewableItems[0].index;
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const RenderItem = ({item, index}) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.8,
        transform: [{translateY: translateYAnimation}],
      };
    });
    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolate.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolate.CLAMP,
      );

      return {
        opacity: opacityAnimation,
        transform: [{translateY: translateYAnimation}],
      };
    });
    return (
      <Animated.View
        style={[
          {
            flex: 1,
            width: SCREEN_WIDTH,
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#F8E9B0',
          },
        ]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={textAnimationStyle}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </Animated.View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />
        <CustomButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E9B0',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'black',
    lineHeight: 20,
  },
});

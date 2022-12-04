/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {MotiView, useAnimationState} from 'moti';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  runOnJS,
} from 'react-native-reanimated';
import Pagination from './src/components/Pagination';
import CustomButton from './src/components/CustomButton';
const data = [
  {
    id: 1,
    image: require('./src/assets/image1.png'),
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    image: require('./src/assets/image2.png'),
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: require('./src/assets/image3.png'),
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
const OnboardingScreen = () => {
  const {width} = useWindowDimensions();
  const flatlistRef = useAnimatedRef(null);
  const x = useSharedValue(0);
  const [flatListIndex, setFlatListIndex] = useState(0);

  const animationState0 = useAnimationState({
    from: {
      opacity: 0,
      translateY: 100,
    },
    to: {
      opacity: 1,
      translateY: 0,
      transition: {delay: 500},
    },
  });

  const animationState1 = useAnimationState({
    from: {
      opacity: 0,
      translateY: 100,
    },
    active: {
      opacity: 1,
      translateY: 0,
    },
  });

  const animationState2 = useAnimationState({
    from: {
      opacity: 0,
      translateY: 100,
    },
    active: {
      opacity: 1,
      translateY: 0,
    },
  });
  const animationStateArr = [animationState0, animationState1, animationState2];

  const changeAnimationState = event => {
    if (event.contentOffset.x / width >= 1.5) {
      animationState2.transitionTo('active');
    } else if (event.contentOffset.x / width >= 0.5) {
      animationState1.transitionTo('active');
    }
  };
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    setFlatListIndex(viewableItems[0].index);
  }).current;
  const onScroll = useAnimatedScrollHandler(e => {
    x.value = e.contentOffset.x;
    runOnJS(changeAnimationState)(e);
  });
  const renderItem = ({item, index}) => (
    <MotiView
      state={animationStateArr[index]}
      key={index}
      style={{
        flex: 1,
        width: width,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F8E9B0',
      }}>
      <Image
        source={item.image}
        style={{width: width * 0.8, height: width * 0.8}}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </MotiView>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatlistRef}
        onScroll={onScroll}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Pagination data={data} x={x} size={width} />
        <CustomButton
          flatlistRef={flatlistRef}
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

import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Item from './src/components/Item';
import {data} from './src/data/data';
import {SystemBars} from 'react-native-bars';
import Button from './src/components/Button';

const CarouselScreen = () => {
  const {width} = useWindowDimensions();
  const x = useSharedValue(0);
  const ITEM_WIDTH = 250;
  const ITEM_HEIGHT = 400;
  const MARGin_HORIZONTAL = 20;
  const ITEM_FULL_WIDTH = ITEM_WIDTH + MARGin_HORIZONTAL * 2;
  const SPACER = (width - ITEM_FULL_WIDTH) / 2;

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <SystemBars animated={true} barStyle={'light-content'} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Choose a style that perfectly</Text>
        <Text style={styles.text}>reflects your true self</Text>
      </View>
      <Animated.FlatList
        onScroll={onScroll}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{width: SPACER}}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{width: SPACER}}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id + item.name}
        renderItem={({item, index}) => {
          return (
            <Item
              item={item}
              index={index}
              x={x}
              width={ITEM_WIDTH}
              height={ITEM_HEIGHT}
              marginHorizontal={MARGin_HORIZONTAL}
              fullWidth={ITEM_FULL_WIDTH}
            />
          );
        }}
        horizontal
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={ITEM_FULL_WIDTH}
      />
      <Button />
    </SafeAreaView>
  );
};

export default CarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'center',
  },
});

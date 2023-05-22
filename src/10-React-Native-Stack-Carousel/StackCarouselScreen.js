/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CardContainer from './src/components/CardContainer';

const StackCarouselScreen = () => {
  const data = [
    {
      image: require('./src/assets/image-product-1.jpg'),
    },
    {
      image: require('./src/assets/image-product-2.jpg'),
    },
    {
      image: require('./src/assets/image-product-3.jpg'),
    },
    {
      image: require('./src/assets/image-product-4.jpg'),
    },
    {
      image: require('./src/assets/image-product-1.jpg'),
    },
    {
      image: require('./src/assets/image-product-2.jpg'),
    },
    {
      image: require('./src/assets/image-product-3.jpg'),
    },
    {
      image: require('./src/assets/image-product-4.jpg'),
    },
  ];

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <CardContainer data={data} maxVisibleItems={3} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default StackCarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

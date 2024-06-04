import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {OnboardingData} from '../data/data';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({item}: Props) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}>
      <Image source={item.image} />
      <Text style={[styles.itemText, {color: item.textColor}]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  itemText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

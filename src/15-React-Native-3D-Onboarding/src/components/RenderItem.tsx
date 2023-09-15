import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {OnboardingData} from '../data/data';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({item}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

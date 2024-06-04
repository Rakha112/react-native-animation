import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Data} from '../data/data';

type Props = {
  item: Data;
};

const RenderItem = ({item}: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.text}</Text>
      <Text style={styles.text}>{item.id}</Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  imageContainer: {
    backgroundColor: '#572ce8',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

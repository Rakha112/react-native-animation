import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import lorem from '../data/lorem';

const Lorem = () => {
  return (
    <View>
      <Text style={styles.text}>{lorem}</Text>
    </View>
  );
};

export default Lorem;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: 'black',
  },
});

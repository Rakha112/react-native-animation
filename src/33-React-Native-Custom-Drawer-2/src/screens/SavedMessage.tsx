import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SavedMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Message Screen</Text>
    </View>
  );
};

export default SavedMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d2733',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

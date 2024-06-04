import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacts Screen</Text>
    </View>
  );
};

export default Contacts;

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

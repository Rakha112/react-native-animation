/* eslint-disable react-native/no-inline-styles */
import {Button, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FirstType from './src/components/FirstType';
import SecondType from './src/components/SecondType';
import ThirdType from './src/components/ThirdType';
import FourthType from './src/components/FourthType';
import {SafeAreaView} from 'react-native-safe-area-context';
const FabScreen = () => {
  const [type, setType] = useState('first');
  return (
    //If you're not using react-native-bars, you can remove these edges
    // and import SafeAreaView from react-native.
    <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Button title="First Type" onPress={() => setType('first')} />
        <Button title="Second Type" onPress={() => setType('second')} />
        <Button title="Third Type" onPress={() => setType('third')} />
        <Button title="Fourth Type" onPress={() => setType('fourth')} />
      </ScrollView>
      {type === 'first' && <FirstType />}
      {type === 'second' && <SecondType />}
      {type === 'third' && <ThirdType />}
      {type === 'fourth' && <FourthType />}
    </SafeAreaView>
  );
};

export default FabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

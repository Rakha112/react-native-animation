/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RangeSlider from './src/RangeSlider';
const App = () => {
  const MIN_DEFAULT = 10;
  const MAX_DEFAULT = 500;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.text}>Price Slider</Text>
            <RangeSlider
              sliderWidth={300}
              min={MIN_DEFAULT}
              max={MAX_DEFAULT}
              step={10}
              onValueChange={range => {
                setMinValue(range.min);
                setMaxValue(range.max);
              }}
            />
            <View style={styles.tableContainer}>
              <View style={{marginBottom: 20}}>
                <Text style={styles.colorBlack}>Min Price</Text>
                <View style={styles.table}>
                  <Text style={styles.colorBlack}>${minValue}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.colorBlack}>Max Price</Text>
                <View style={styles.table}>
                  <Text style={styles.colorBlack}>${maxValue}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBECF2',
  },
  contentContainer: {
    width: '90%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  tableContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  table: {
    borderColor: '#EBECF2',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  colorBlack: {color: 'black'},
});

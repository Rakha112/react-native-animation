/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, Button, Dimensions} from 'react-native';
import React, {useRef, useCallback} from 'react';
import BottomSheet from './src/components/BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  const {height} = Dimensions.get('screen');
  const bottomSheetRef = useRef();
  const bottomSheetRef2 = useRef();
  const bottomSheetRef3 = useRef();
  const pressHandler = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);
  const pressHandler2 = useCallback(() => {
    bottomSheetRef2.current.expand();
  }, []);
  const pressHandler3 = useCallback(() => {
    bottomSheetRef3.current.expand();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Button title="Blank" onPress={() => pressHandler()} />
        <Button title="Example 1" onPress={() => pressHandler2()} />
        <Button title="Example 2" onPress={() => pressHandler3()} />
        <BottomSheet
          ref={bottomSheetRef}
          activeHeight={height * 0.5}
          backgroundColor={'white'}
          backDropColor={'black'}
        />
        <BottomSheet
          ref={bottomSheetRef2}
          activeHeight={height * 0.5}
          backgroundColor={'#DAD3C8'}
          backDropColor={'black'}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={styles.imageContaier}>
              <Image
                source={require('./src/assets/image.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Royal Palm Sofa</Text>
              <Text style={styles.text}>Vissle dark Blue/Kabusa dark Navy</Text>
              <Text style={styles.textPrice}>Price: $100</Text>
            </View>
            <View>
              <View>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>ADD TO CHART</Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
        <BottomSheet
          ref={bottomSheetRef3}
          activeHeight={height * 0.5}
          backgroundColor={'#FFFFFF'}
          backDropColor={'black'}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View style={styles.textContainer}>
              <Text style={styles.textExample2}>Good Evening</Text>
              <Text style={styles.textExample2}>Everyday is a good day</Text>
            </View>
            <View style={styles.imageContaierExample2}>
              <Text style={styles.textExample2}>Recommend</Text>
              <Image
                source={require('./src/assets/image2.png')}
                style={styles.imageExample2}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageContaier: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContaierExample2: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
  },
  imageExample2: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.65636588,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
  },
  buttonText: {
    color: '#DAD3C8',
  },
  textContainer: {
    marginHorizontal: 20,
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
  textExample2: {
    color: '#000000',
    fontSize: 26,
  },
  textPrice: {
    color: '#000000',
    marginVertical: 20,
    fontSize: 16,
  },
});

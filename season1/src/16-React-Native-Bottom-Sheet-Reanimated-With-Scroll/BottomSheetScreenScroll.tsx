/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetMethods} from './src/components/BottomSheet';
import Lorem from './src/components/Lorem';
import BottomSheetScrollView from './src/components/BottomSheetScrollView';
import BottomSheetFlatList from './src/components/BottomSheetFlatList';
import data from './src/data/data';
import RenderItem from './src/components/RenderItem';
import Example from './src/components/Example';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const BottomSheetScreenScroll = () => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetRef2 = useRef<BottomSheetMethods>(null);
  const bottomSheetRef3 = useRef<BottomSheetMethods>(null);
  const bottomSheetRef4 = useRef<BottomSheetMethods>(null);

  const pressHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const pressHandler2 = useCallback(() => {
    bottomSheetRef2.current?.expand();
  }, []);
  const pressHandler3 = useCallback(() => {
    bottomSheetRef3.current?.expand();
  }, []);
  const pressHandler4 = useCallback(() => {
    bottomSheetRef4.current?.expand();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Button title="Blank" onPress={() => pressHandler()} />
          <Button title="Example" onPress={() => pressHandler2()} />
          <Button title="ScrollView" onPress={() => pressHandler3()} />
          <Button title="Flatlist" onPress={() => pressHandler4()} />
          <BottomSheet
            ref={bottomSheetRef}
            snapTo={'50%'}
            backgroundColor={'white'}
            backDropColor={'black'}
          />
          <BottomSheet
            ref={bottomSheetRef2}
            snapTo={'60%'}
            backgroundColor={'#ffe7cf'}
            backDropColor={'black'}>
            <Example />
          </BottomSheet>
          <BottomSheetScrollView
            ref={bottomSheetRef3}
            snapTo={'50%'}
            backgroundColor={'white'}
            backDropColor={'black'}>
            <Lorem />
          </BottomSheetScrollView>
          <BottomSheetFlatList
            ref={bottomSheetRef4}
            data={data}
            renderItem={({item, index}) => {
              return <RenderItem item={item} key={index} />;
            }}
            snapTo={'50%'}
            backgroundColor={'white'}
            backDropColor={'black'}
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default BottomSheetScreenScroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

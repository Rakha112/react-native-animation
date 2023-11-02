import {FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import data from '../data/data';
import RenderItem from '../components/RenderItem';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Popular Destinations</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: '#323232',
    fontWeight: 'bold',
  },
});

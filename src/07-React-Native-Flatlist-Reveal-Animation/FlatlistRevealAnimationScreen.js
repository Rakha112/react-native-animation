import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import data from './src/data';
import {MotiView} from 'moti';
const FlatlistRevealAnimationScreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <MotiView
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('BUY NOW!', index);
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Buy Now!</Text>
          </View>
        </TouchableWithoutFeedback>
      </MotiView>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FlatlistRevealAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  listContainer: {
    flex: 1 / 2,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {width: '100%', height: undefined, aspectRatio: 1},
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#62513E',
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

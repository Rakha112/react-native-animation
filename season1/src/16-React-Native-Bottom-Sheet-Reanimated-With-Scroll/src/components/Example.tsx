import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const Example = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Shoe.jpg')}
          style={[styles.image, {width: width * 0.9}]}
        />
      </View>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
        massa vitae dui volutpat,
      </Text>
      <Pressable onPress={() => console.log('PRESS')}>
        <View style={[styles.button, {width: width * 0.9}]}>
          <Text style={styles.textButton}>Get Started</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffe7cf',
  },
  imageContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    height: undefined,
    aspectRatio: 16 / 9,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 16,
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#df7007',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 32,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityType} from '../data/data';

type Props = {
  item: ActivityType;
};

const Activity = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textDate}>{item.date}</Text>
      </View>
      <Text style={styles.textPrice}>{item.price}</Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 14,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    backgroundColor: '#222222',
    borderRadius: 18,
  },
  image: {
    width: 44,
    height: 44,
    margin: 14,
    resizeMode: 'contain',
  },
  textName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDate: {
    color: 'white',
    fontSize: 14,
  },
  nameContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  textPrice: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

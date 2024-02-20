import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityType, DataType} from '../data/data';

type Props = {
  item: ActivityType;
  data: DataType[];
  activityIndex: number;
};

const Activity = ({item, activityIndex, data}: Props) => {
  return (
    <>
      {data[activityIndex].cardId === item.cardId && (
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
      )}
    </>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  imageContainer: {
    backgroundColor: '#222222',
    borderRadius: 18,
  },
  image: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    margin: 14,
  },
  textName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  textDate: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 16,
  },
  nameContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  textPrice: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

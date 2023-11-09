import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MessageType} from '../data/data';

type Props = {
  item: MessageType;
};

const Message = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textMessage} numberOfLines={1} ellipsizeMode="tail">
          {item.message}
        </Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 20,
  },
  image: {
    width: 48,
    height: 48,
  },
  textContainer: {
    flex: 1,
    gap: 6,
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  textName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  textMessage: {
    color: 'white',
  },
});

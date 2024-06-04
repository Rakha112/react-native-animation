import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MessageType} from '../data/data';

type Props = {
  item: MessageType;
  theme: string;
};

const Message = ({item, theme}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View
        style={
          theme === 'dark' ? darkStyles.textContainer : styles.textContainer
        }>
        <Text style={theme === 'dark' ? darkStyles.textName : styles.textName}>
          {item.name}
        </Text>
        <Text
          style={theme === 'dark' ? darkStyles.textMessage : styles.textMessage}
          numberOfLines={1}
          ellipsizeMode="tail">
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
    borderBottomColor: '#E3E3E3',
  },
  textName: {
    fontWeight: 'bold',
    color: '#1d2733',
    fontSize: 22,
  },
  textMessage: {
    color: '#1d2733',
  },
});

const darkStyles = StyleSheet.create({
  textContainer: {
    flex: 1,
    gap: 6,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#252d3a',
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

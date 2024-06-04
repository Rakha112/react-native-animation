import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigator/RootNavigator';

const Button = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        console.log('Activate the card');
        navigation.goBack();
      }}>
      <Text style={styles.text}>Activate the card</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 18,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#111111',
  },
});

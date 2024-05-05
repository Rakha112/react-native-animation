import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {drawerList} from '../data/data';
import DrawerItem from './DrawerItem';
import {SharedValue} from 'react-native-reanimated';

type Props = {
  active: SharedValue<boolean>;
};

const Drawer = ({active}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.containerProfile}>
          <Image
            source={require('../assets/Profile1.png')}
            style={styles.imageProfile}
          />
          <Text style={styles.textName}>Rakha Wibowo</Text>
        </View>
        <View style={styles.containerItem}>
          {drawerList.map((item, index) => {
            return <DrawerItem item={item} key={index} active={active} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#353E54',
    zIndex: -9999,
  },
  contentContainer: {
    paddingTop: 120,
    marginHorizontal: 30,
    maxWidth: 180,
  },
  containerProfile: {
    gap: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  imageProfile: {
    width: 48,
    height: 48,
  },
  textName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  containerItem: {
    marginTop: 10,
  },
});

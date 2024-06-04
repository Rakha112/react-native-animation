import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {DrawerListType} from '../data/data';
import useTypeSafeNavigation from '../hooks/useTypeSafeNavigation';
import {SharedValue} from 'react-native-reanimated';
import {RootStackParamList} from '../navigators/CustomDrawerRootNavigator';

type Props = {
  item: DrawerListType;
  active: SharedValue<boolean>;
};

const DrawerItem = ({item, active}: Props) => {
  const navigation = useTypeSafeNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate(item.navigate as keyof RootStackParamList);
        active.value = false;
      }}>
      <Image source={item.icon} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 16,
    alignItems: 'center',
  },
  image: {
    width: 26,
    height: 26,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});

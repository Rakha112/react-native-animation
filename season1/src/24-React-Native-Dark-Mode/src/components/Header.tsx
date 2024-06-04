import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  handlePress: () => void;
  theme: string;
};

const Header = ({handlePress, theme}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        theme === 'dark' ? darkStyles.container : styles.container,
        //If you're not using react-native-bars, you can remove these edges
        {paddingTop: insets.top + 10},
        // {paddingTop: Platform.OS === 'ios' ? insets.top : 20},
      ]}>
      <Pressable style={styles.icon} onPress={handlePress}>
        <Image
          source={
            theme === 'dark'
              ? require('../assets/Sun.png')
              : require('../assets/Moon.png')
          }
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
  },
  icon: {
    width: 28,
    height: 28,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#252d3a',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1d2733',
  },
});

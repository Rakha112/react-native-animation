import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = () => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width: width, height: width}]}>
      <LinearGradient
        colors={['rgba(15,16,20,0)', 'rgba(15,16,20,1)']}
        style={styles.gradientBottom}
      />
      <LinearGradient
        colors={['rgba(15,16,20,1)', 'rgba(15,16,20,0)']}
        style={styles.gradientTop}
      />
    </View>
  );
};

export default Gradient;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 180,
  },
  gradientTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 180,
  },
});

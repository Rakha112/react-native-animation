import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {useLoader} from '../context/LoaderProvider';

const Loader = () => {
  const loader = useLoader();
  return (
    <>
      {loader && (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </>
  );
};

export default Loader;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

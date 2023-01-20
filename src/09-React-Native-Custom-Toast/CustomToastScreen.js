import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef} from 'react';
import ToastComponent from './src/components/ToastComponent';

const CustomToastScreen = () => {
  const toastRef = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <ToastComponent ref={toastRef} />
      <TouchableWithoutFeedback
        onPress={() => {
          toastRef.current.show({
            type: 'success',
            text: 'Success Toast',
            duration: 2000,
          });
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Success Toast</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          toastRef.current.show({
            type: 'error',
            text: 'Error Toast',
            duration: 2000,
          });
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Error Toast</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          toastRef.current.show({
            type: 'warning',
            text: 'Warning Toast',
            duration: 2000,
          });
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Warning Toast</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CustomToastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEC520',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {fontSize: 16, fontWeight: '600', color: 'black'},
});

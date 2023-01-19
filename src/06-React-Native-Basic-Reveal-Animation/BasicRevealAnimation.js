import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {MotiView, MotiImage} from 'moti';
import {useNavigation} from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <MotiImage
        source={require('./src/assets/image.png')}
        style={{width: width * 0.8, height: width * 0.8}}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 100}}
      />
      <MotiView
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 200}}>
        <Text style={styles.title}>Lorem Ipsum</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </MotiView>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <MotiView
          style={[styles.button, {width: width * 0.8}]}
          from={{opacity: 0, translateY: 50}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 300}}>
          <Text style={styles.textButton}>Get Started</Text>
        </MotiView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8E9B0',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'black',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#FEC520',
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {fontSize: 16, fontWeight: '600', color: 'black'},
});

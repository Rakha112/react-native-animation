import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber/native';
import Model from './src/components/Model';
import useControls from 'r3f-native-orbitcontrols';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootNavigator';
import Trigger from './src/components/Trigger';
import Loader from './src/components/Loader';
import {SafeAreaView} from 'react-native-safe-area-context';

const Model3DScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modelContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
          <directionalLight position={[0, 0, 1]} args={['white', 5]} />
          <directionalLight position={[0, 0, -1]} args={['white', 5]} />
          <directionalLight position={[0, 1, 0]} args={['white', 5]} />
          <directionalLight position={[0, -1, 0]} args={['white', 5]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Grey Chair</Text>
          <Text style={styles.textPrice}>$80.00</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mattis maximus eros, eu ullamcorper ante ullamcorper a. Phasellus
            turpis tellus, tempus at feugiat at, facilisis ac sem.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.textButton}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Model3DScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    fontSize: 28,
    color: '#051E47',
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 28,
    color: '#3F6900',
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3F6900',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

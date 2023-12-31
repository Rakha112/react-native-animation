import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigator/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import {SystemBars} from 'react-native-bars';

const App = () => {
  // ignore Warning build/three.js
  LogBox.ignoreLogs([
    'Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation',
  ]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SystemBars animated={true} barStyle={'dark-content'} />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

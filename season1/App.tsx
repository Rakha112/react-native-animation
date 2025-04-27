import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigator/RootNavigator';
import {SystemBars} from 'react-native-edge-to-edge';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SystemBars style="dark" />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import {Data} from '../data/data';

export type SharedElementStackParamList = {
  Home: undefined;
  Detail: {item: Data};
};

const SharedElementNavigator = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedElementNavigator;

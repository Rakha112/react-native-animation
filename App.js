import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import BasicRevealAnimation from './src/06-React-Native-Basic-Reveal-Animation/BasicRevealAnimation';
import CustomSwitchScreen from './src/01-React-Native-Custom-Switch/CustomSwitchScreen';
import CustomCheckboxScreen from './src/02-React-Native-Custom-Checkbox/CustomCheckboxScreen';
import BottomSheetScreen from './src/04-React-Native-Bottom-Sheet-Reanimated/BottomSheetScreen';
import ImageCarouselScreen from './src/03-React-Native-Custom-Image-Carousel/ImageCarouselScreen';
import RangeSliderScreen from './src/05-React-Native-Custom-Range-Slider/RangeSliderScreen';
import FlatlistRevealAnimationScreen from './src/07-React-Native-Flatlist-Reveal-Animation/FlatlistRevealAnimationScreen';
import OnboardingScreen from './src/08-React-Native-Onboarding-Screen/OnboardingScreen';
import CustomToastScreen from './src/09-React-Native-Custom-Toast/CustomToastScreen';
import StackCarouselScreen from './src/10-React-Native-Stack-Carousel/StackCarouselScreen';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomSwitch"
          component={CustomSwitchScreen}
          options={{
            title: 'Custom Switch',
          }}
        />
        <Stack.Screen
          name="CustomCheckbox"
          component={CustomCheckboxScreen}
          options={{
            title: 'Custom Checkbox',
          }}
        />
        <Stack.Screen
          name="ImageCarousel"
          component={ImageCarouselScreen}
          options={{
            title: 'Custom Image Carousel',
          }}
        />
        <Stack.Screen
          name="BottomSheet"
          component={BottomSheetScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RangeSlider"
          component={RangeSliderScreen}
          options={{
            title: 'Custom Range Slider',
          }}
        />
        <Stack.Screen
          name="BasicRevealAnimation"
          component={BasicRevealAnimation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FlatlistRevealAnimation"
          component={FlatlistRevealAnimationScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomToast"
          component={CustomToastScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StackCarousel"
          component={StackCarouselScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

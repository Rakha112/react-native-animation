import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../00-Home/Home';
import BasicRevealAnimation from '../06-React-Native-Basic-Reveal-Animation/BasicRevealAnimation';
import CustomSwitchScreen from '../01-React-Native-Custom-Switch/CustomSwitchScreen';
import CustomCheckboxScreen from '../02-React-Native-Custom-Checkbox/CustomCheckboxScreen';
import BottomSheetScreen from '../04-React-Native-Bottom-Sheet-Reanimated/BottomSheetScreen';
import ImageCarouselScreen from '../03-React-Native-Custom-Image-Carousel/ImageCarouselScreen';
import RangeSliderScreen from '../05-React-Native-Custom-Range-Slider/RangeSliderScreen';
import FlatlistRevealAnimationScreen from '../07-React-Native-Flatlist-Reveal-Animation/FlatlistRevealAnimationScreen';
import OnboardingScreen from '../08-React-Native-Onboarding-Screen/OnboardingScreen';
import CustomToastScreen from '../09-React-Native-Custom-Toast/CustomToastScreen';
import StackCarouselScreen from '../10-React-Native-Stack-Carousel/StackCarouselScreen';
import AccordionScreen from '../11-React-Native-Accordion/AccordionScreen';
import FabScreen from '../12-React-Native-Floating-Action-Button/FabScreen';

export type RootStackParamList = {
  Home: undefined;
  CustomSwitch: undefined;
  CustomCheckbox: undefined;
  ImageCarousel: undefined;
  BottomSheet: undefined;
  RangeSlider: undefined;
  BasicRevealAnimation: undefined;
  FlatlistRevealAnimation: undefined;
  OnboardingScreen: undefined;
  CustomToast: undefined;
  StackCarousel: undefined;
  Accordion: undefined;
  Fab: undefined;
};
const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
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
      <Stack.Screen
        name="Accordion"
        component={AccordionScreen}
        options={{
          title: 'Accordion',
        }}
      />
      <Stack.Screen
        name="Fab"
        component={FabScreen}
        options={{
          title: 'Floating Action Button',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

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
import OnboardingScreen2 from '../13-React-Native-Onboarding-Screen-2/OnboardingScreen';
import BottomTabNavigator from '../14-React-Native-Custom-Animated-Bottom-Tab/navigator/BottomTabNavigator';
import OnboardingScreen3D from '../15-React-Native-3D-Onboarding/OnboardingScreen3D';
import BottomSheetScreenScroll from '../16-React-Native-Bottom-Sheet-Reanimated-With-Scroll/BottomSheetScreenScroll';
import Model3DScreen from '../17-React-Native-3D-Loading-Model/Model3DScreen';
import Character3DScreen from '../18-React-Native-3D-Character-With-Animation/Character3DScreen';
import SharedElementNavigator from '../19-React-Native-Shared-Element/src/navigator/SharedElementNavigator';
import CustomDrawerScreen from '../20-React-Native-Custom-Drawer/CustomDrawerScreen';
import DonutChartScreen from '../21-React-Native-Donut-Chart/DonutChartScreen';
import CircularProgressBar from '../22-React-Native-Circular-Progress-Bar/CircularProgressBarScreen';
import MaskingOnboardingScreen from '../23-React-Native-Masking-Onboarding-Screen/MaskingOnboardingScreen';
import DarkModeScreen from '../24-React-Native-Dark-Mode/DarkModeScreen';
import ShopUI3DScreen from '../25-React-Native-3D-Shop/ShopUI3DScreen';
import CarouselDisneyScreen from '../26-React-Native-Carousel-Disney+/CarouselDisneyScreen';
import DarkModeSwitchScreen from '../27-React-Native-Dark-Mode-Switch/DarkModeSwitchScreen';
import OnboardingScreenCuberto from '../28-React-Native-Onboarding-Screen-Cuberto/OnboardingScreenCuberto';
import CradSwipeScreen from '../29-React-Native-Card-Swipe/CradSwipeScreen';
import BarChartScreen from '../30-React-Native-Bar-Chart/BarChartScreen';
import CarouselScreen from '../31-React-Native-Carousel/CarouselScreen';
import LineChartScreen from '../32-React-Native-Line-Chart/LineChartScreen';

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
  OnboardingScreen2: undefined;
  BottomTab: undefined;
  OnboardingScreen3D: undefined;
  BottomSheetScreenScroll: undefined;
  Model3D: undefined;
  Character3D: undefined;
  SharedElement: undefined;
  CustomDrawer: undefined;
  DonutChart: undefined;
  CircularProgressBar: undefined;
  MaskingOnboardingScreen: undefined;
  DarkMode: undefined;
  ShopUI3D: undefined;
  CarouselDisney: undefined;
  DarkModeSwitch: undefined;
  OnboardingScreenCuberto: undefined;
  CardSwipe: undefined;
  BarChart: undefined;
  Carousel: undefined;
  LineChart: undefined;
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
      <Stack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnboardingScreen3D"
        component={OnboardingScreen3D}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomSheetScreenScroll"
        component={BottomSheetScreenScroll}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Model3D"
        component={Model3DScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Character3D"
        component={Character3DScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="SharedElement"
        component={SharedElementNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CustomDrawer"
        component={CustomDrawerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DonutChart"
        component={DonutChartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CircularProgressBar"
        component={CircularProgressBar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MaskingOnboardingScreen"
        component={MaskingOnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DarkMode"
        component={DarkModeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShopUI3D"
        component={ShopUI3DScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CarouselDisney"
        component={CarouselDisneyScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DarkModeSwitch"
        component={DarkModeSwitchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnboardingScreenCuberto"
        component={OnboardingScreenCuberto}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CardSwipe"
        component={CradSwipeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BarChart"
        component={BarChartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Carousel"
        component={CarouselScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LineChart"
        component={LineChartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

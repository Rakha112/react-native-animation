/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  View,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from '../assets/icons/ArrowIcon.svg';
import YoutubeIcon from '../assets/icons/YoutubeIcon.svg';
import {MotiView} from 'moti';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootNavigator';

interface Data {
  navigate: keyof RootStackParamList;
  title: string;
}

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {width} = useWindowDimensions();
  const data: Data[] = [
    {navigate: 'CustomSwitch', title: '01. Custom Switch Using Reanimated 2'},
    {
      navigate: 'CustomCheckbox',
      title: '02. Custom Checkbox Using Reanimated 2',
    },
    {
      navigate: 'ImageCarousel',
      title: '03. Custom Image Carousel Using Reanimated 2 & ScrollView',
    },
    {
      navigate: 'BottomSheet',
      title: '04. Bottom Sheet Using Reanimated 2 & GestureHandler',
    },
    {
      navigate: 'RangeSlider',
      title: '05. Custom Range Slider Using Reanimated 2',
    },
    {
      navigate: 'BasicRevealAnimation',
      title: '06. Basic Reveal Animation Using Moti',
    },
    {
      navigate: 'FlatlistRevealAnimation',
      title: '07. Flatlist Grid Reveal Animation Using Moti',
    },
    {
      navigate: 'OnboardingScreen',
      title: '08. Onboarding Screen Using Reanimated 2',
    },
    {
      navigate: 'CustomToast',
      title: '09. Custom Toast Using Reanimeted 2 and Gesture Handler',
    },
    {
      navigate: 'StackCarousel',
      title: '10. Stack Carousel',
    },
    {
      navigate: 'Accordion',
      title: '11. Accordion Using Reanimated',
    },
    {
      navigate: 'Fab',
      title: '12. Floating Action Button (FAB)',
    },
    {
      navigate: 'OnboardingScreen2',
      title: '13. Onboarding Screen Using Reanimated',
    },
    {
      navigate: 'BottomTab',
      title: '14. Custom Animated Bottom Tab',
    },
    {
      navigate: 'OnboardingScreen3D',
      title: '15. 3D Onboarding Screen',
    },
    {
      navigate: 'BottomSheetScreenScroll',
      title: '16. Bottom Sheet Scroll',
    },
    {
      navigate: 'Model3D',
      title: '17. Loading 3D Model',
    },
    {
      navigate: 'Character3D',
      title: '18. 3D Character With Animation',
    },
    {
      navigate: 'SharedElement',
      title: '19. Shared Element Using Reanimated 3',
    },
    {
      navigate: 'CustomDrawer',
      title: '20. Custom Drawer Using Reanimated and Gesturehandler',
    },
    {
      navigate: 'DonutChart',
      title: '21. Animated Donut Chart Using Reanimated 3 and Skia',
    },
    {
      navigate: 'CircularProgressBar',
      title: '22. Animated Circular Progress Bar Using Reanimated 3 and Skia',
    },
    {
      navigate: 'MaskingOnboardingScreen',
      title:
        '23. Animated Masking Onboarding Screen With Reanimated 3 and Skia',
    },
    {
      navigate: 'DarkMode',
      title: '24. Dark Mode With Reanimated 3 and Skia',
    },
    {
      navigate: 'ShopUI3D',
      title: '25. 3D Shop UI With React Three FIber',
    },
    {
      navigate: 'CarouselDisney',
      title: '26. Carausel Disney+ With Reanimated',
    },
    {
      navigate: 'DarkModeSwitch',
      title: '27. Dark Mode Switch',
    },
    {
      navigate: 'OnboardingScreenCuberto',
      title: '28. Animated Onboarding Screen (Inspired By Cuberto)',
    },
    {
      navigate: 'CardSwipe',
      title: '29. Card Swipe',
    },
    {
      navigate: 'BarChart',
      title: '30. Bar Chart With Skia, Reanimated and D3',
    },
    {
      navigate: 'Carousel',
      title: '31. Custom Carousel with Reanimated',
    },
    {
      navigate: 'LineChart',
      title: '32. Line Chart With Skia, Reanimated and D3',
    },
  ];
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MotiView
            from={{opacity: 0, translateY: 50}}
            animate={{opacity: 1, translateY: 0}}
            style={[styles.cardContainer, {width: width * 0.95}]}>
            <View>
              <Text style={styles.cardText}>React Native</Text>
              <Text style={styles.cardText}>Animation Tutorial</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                Linking.openURL(
                  'https://www.youtube.com/channel/UCUb0G_PXtgWV_TmuJXLFxRw',
                );
              }}>
              <MotiView style={[styles.cardButton, {width: width * 0.8}]}>
                <YoutubeIcon width={50} height={50} />
                <Text style={styles.cardButtonText}>Watch on Youtube</Text>
              </MotiView>
            </TouchableWithoutFeedback>
          </MotiView>
          {data.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (
                    (v.navigate === 'OnboardingScreen3D' ||
                      v.navigate === 'Model3D' ||
                      v.navigate === 'Character3D' ||
                      v.navigate === 'ShopUI3D') &&
                    Platform.OS === 'ios'
                  ) {
                    console.log(v.navigate);
                    Alert.alert(
                      '3D',
                      'if you are using iOS simulator, then the 3D Model will not load, use iOS physical device or use Android Emulator instead',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {
                          text: 'OK',
                          onPress: () => navigation.navigate(v.navigate as any),
                        },
                      ],
                    );
                  } else {
                    navigation.navigate(v.navigate as any);
                  }
                }}
                key={i}>
                <MotiView
                  style={styles.listContainer}
                  from={{opacity: 0, translateY: 50, scale: 0.5}}
                  animate={{opacity: 1, translateY: 0, scale: 1}}
                  transition={{delay: 100 + i * 100}}>
                  <Text style={styles.listText}>{v.title}</Text>
                  <ArrowIcon width={14} height={14} />
                </MotiView>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F6F6F6'},
  cardContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1C6BC8',
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 25,
  },
  cardText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardButton: {
    backgroundColor: 'white',
    height: 46,
    borderRadius: 12.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {color: 'black', fontSize: 16, marginLeft: 10},
  listContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listText: {color: 'black'},
});

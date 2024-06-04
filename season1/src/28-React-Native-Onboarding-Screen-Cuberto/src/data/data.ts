import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
  animationBg: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Animation1.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#ffffff',
    backgroundColor: '#fcb7d7',
    animationBg: '#ffffff',
  },
  {
    id: 2,
    animation: require('../assets//animations/Animation2.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    animationBg: '#003cc9',
  },
  {
    id: 3,
    animation: require('../assets//animations/Animation3.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#ffffff',
    backgroundColor: '#003cc9',
    animationBg: '#fcb7d7',
  },
];

export default data;

import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie1.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;

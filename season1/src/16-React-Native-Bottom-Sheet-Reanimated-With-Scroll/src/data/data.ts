import {ImageProps} from 'react-native';

export interface Data {
  id: number;
  image: ImageProps;
  text: string;
}

const data: Data[] = Array.from({length: 50}, (_, index) => ({
  id: index,
  image: require('../assets/Star.png'),
  text: 'Bookmark',
}));

export default data;

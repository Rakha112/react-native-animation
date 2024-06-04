import {ImageSourcePropType} from 'react-native';

export interface Data {
  id: number;
  image: ImageSourcePropType;
  name: string;
  exp: string;
  visa: ImageSourcePropType;
}

const data: Data[] = [
  {
    id: 1,
    image: require('../assets/gradient1.png'),
    name: 'Rakha Wibowo',
    exp: '1/29',
    visa: require('../assets/visa.png'),
  },
  {
    id: 2,
    image: require('../assets/gradient2.png'),
    name: 'Rakha Wibowo',
    exp: '1/29',
    visa: require('../assets/visa.png'),
  },
  {
    id: 3,
    image: require('../assets/gradient3.png'),
    name: 'Rakha Wibowo',
    exp: '1/29',
    visa: require('../assets/visa.png'),
  },
  {
    id: 4,
    image: require('../assets/gradient4.png'),
    name: 'Rakha Wibowo',
    exp: '1/29',
    visa: require('../assets/visa.png'),
  },
  {
    id: 5,
    image: require('../assets/gradient5.png'),
    name: 'Rakha Wibowo',
    exp: '1/29',
    visa: require('../assets/visa.png'),
  },

  {
    id: 6,
    image: require('../assets/gradient6.png'),
    name: 'Rakha Wibowo',
    exp: '1/29',
    visa: require('../assets/visa.png'),
  },
];

export {data};

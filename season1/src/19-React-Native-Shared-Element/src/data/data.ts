import {ImageSourcePropType} from 'react-native';

export type Data = {
  name: string;
  location: string;
  image: ImageSourcePropType;
  about: string;
};

const data: Data[] = [
  {
    name: 'Kelingking Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/KelingkingBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Diamond Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/DiamondBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Canggu Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/CangguBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    name: 'Broken Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/BrokenBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
];

export default data;

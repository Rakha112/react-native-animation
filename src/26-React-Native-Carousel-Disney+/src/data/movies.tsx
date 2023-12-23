import {ImageSourcePropType} from 'react-native';

export interface MovieType {
  name: string;
  image: ImageSourcePropType;
  titleImage: ImageSourcePropType;
  release: string;
  languages: string;
  genre: string;
}

export const movies: MovieType[] = [
  {
    name: 'Loki',
    image: require('../assets/Loki.png'),
    titleImage: require('../assets/LokiTitle.png'),
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    name: 'Luca',
    image: require('../assets/Luca.png'),
    titleImage: require('../assets/LucaTitle.png'),
    release: '2021',
    languages: '6 Languages',
    genre: 'Family - Comedy',
  },
  {
    name: 'Guardian Of Galaxy Vol.3',
    image: require('../assets/Guardian.png'),
    titleImage: require('../assets/GuardianTitle.png'),
    release: '2023',
    languages: 'English',
    genre: 'Action - Superhero',
  },
  {
    name: 'Elemental',
    image: require('../assets/Elemental.png'),
    titleImage: require('../assets/ElementalTitle.png'),
    release: '2023',
    languages: '2 Languages',
    genre: 'Comedy - Kids',
  },
  {
    name: 'The Little Mermaid',
    image: require('../assets/Mermaid.png'),
    titleImage: require('../assets/MermaidTitle.png'),
    release: '2023',
    languages: 'English',
    genre: 'Family - Musical',
  },
];

export interface OnboardingData {
  id: number;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#109a78',
    backgroundColor: '#cde6d5',
  },
  {
    id: 2,
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#1e2169',
    backgroundColor: '#cfe4e4',
  },
  {
    id: 3,
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;

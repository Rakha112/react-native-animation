export type Category = {
  title: string;
  content: string[];
};

export type Data = Category[];

const data: Data = [
  {
    title: 'Category 1',
    content: ['Content Category 1'],
  },
  {
    title: 'Category 2',
    content: ['Content Category 1', 'Content Category 2'],
  },
  {
    title: 'Category 3',
    content: ['Content Category 1', 'Content Category 2', 'Content Category 3'],
  },
  {
    title: 'Paragraph',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
];

export default data;

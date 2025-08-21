type ToolsProps = {
  id: number;
  label: string;
  src: string;
  score: number;
};

export const Tools: ToolsProps[] = [
  {
    id: 1,
    label: 'HTML',
    src: '/icons/icon-html.svg',
    score: 100,
  },
  {
    id: 2,
    label: 'CSS',
    src: '/icons/icon-css.svg',
    score: 90,
  },
  {
    id: 3,
    label: 'JavaScript',
    src: '/icons/icon-js.svg',
    score: 90,
  },
  {
    id: 4,
    label: 'Typescript',
    src: '/icons/icon-typescript.svg',
    score: 80,
  },
  {
    id: 5,
    label: 'Sequalize',
    src: '/icons/icon-sequalize.svg',
    score: 80,
  },
  {
    id: 6,
    label: 'Mongo DB',
    src: '/icons/icon-mongodb.svg',
    score: 75,
  },
];

export type ToolsProps = {
  id: number;
  label: string;
  icon: string;
  score: number;
};

export const ToolsData: ToolsProps[] = [
  {
    id: 1,
    label: 'HTML',
    icon: '/icons/icon-html5.svg',
    score: 100,
  },
  {
    id: 2,
    label: 'CSS',
    icon: '/icons/icon-css3.svg',
    score: 90,
  },
  {
    id: 3,
    label: 'JavaScript',
    icon: '/icons/icon-js.svg',
    score: 90,
  },
  {
    id: 4,
    label: 'Typescript',
    icon: '/icons/icon-ts.svg',
    score: 80,
  },
  {
    id: 5,
    label: 'Sequalize',
    icon: '/icons/icon-sequalize.svg',
    score: 80,
  },
  {
    id: 6,
    label: 'Mongo DB',
    icon: '/icons/icon-mongodb.svg',
    score: 75,
  },
];

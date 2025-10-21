import {
  Telescope,
  Repeat2,
  SquareChartGantt,
  CodeXml,
  Component,
  MonitorSmartphone,
} from 'lucide-react';

export type HighlightsProps = {
  id: number;
  icon: any;
  title: string;
  desc: string;
};

export const LeaderHighlightsData: HighlightsProps[] = [
  {
    id: 1,
    icon: Telescope,
    title: 'Cross-functional Leadership',
    desc: 'Foster collaboration across business, design, and engineering teams to align goals, remove blockers, and deliver impactful results.',
  },
  {
    id: 2,
    icon: Repeat2,
    title: 'Agile Way of Working',
    desc: 'Enable teams to embrace Agile principles, fostering transparency, adaptability, and continuous improvement in delivery.',
  },
  {
    id: 3,
    icon: SquareChartGantt,
    title: 'Risk & Change Management',
    desc: 'Anticipate and mitigate risks while guiding teams and stakeholders through change with clarity and confidence.',
  },
  // {
  //   id: 4,
  //   icon: '/icons/icon-phone.svg',
  //   title: 'Delivery',
  //   desc: 'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
  // },
];

export const BuilderHighlightsData: HighlightsProps[] = [
  {
    id: 1,
    icon: CodeXml,
    title: 'Frontend Development',
    desc: 'Build performant, accessible, and scalable web applications using modern frameworks and clean code principles.',
  },
  // {
  //   id: 2,
  //   icon: '/icons/icon-globe.svg',
  //   title: 'Web Performance',
  //   desc: 'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
  // },
  {
    id: 3,
    icon: Component,
    title: 'Component Based UI',
    desc: 'Craft reusable, maintainable UI components that scale consistently with evolving design systems.',
  },
  {
    id: 4,
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    desc: 'Build fluid and adaptive layouts that maintain clarity, visual balance, and usability across all screen sizes.',
  },
];

type HighlightsProps = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};

export const HighlightsData: HighlightsProps[] = [
  {
    id: 1,
    icon: '/icons/icon-tags.svg',
    title: 'Frontend Development',
    desc: 'I build responsive, accessible, and scalable websites using modern frontend tools and best practices.',
  },
  {
    id: 2,
    icon: '/icons/icon-globe.svg',
    title: 'Web Performance',
    desc: 'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
  },
  {
    id: 3,
    icon: '/icons/icon-diamond.svg',
    title: 'Component Based UI',
    desc: 'I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.',
  },
  {
    id: 4,
    icon: '/icons/icon-phone.svg',
    title: 'Responsive Design',
    desc: 'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
  },
];

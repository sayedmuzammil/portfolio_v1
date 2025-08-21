type journeyProps = {
  id: number;
  role: string;
  durationStart: string;
  durationEnd: string;
  desc: string;
  icon: string;
};

export const journeyData: journeyProps[] = [
  {
    id: 1,
    role: 'Frontend Developer',
    durationStart: '2025',
    durationEnd: 'Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    icon: '/icons/icon-airbnd.svg',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    durationStart: '2024',
    durationEnd: '2025',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    icon: '/icons/icon-dribble.svg',
  },
  {
    id: 3,
    role: 'Frontend Developer',
    durationStart: '2023',
    durationEnd: '2024',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    icon: '/icons/icon-zoom.svg',
  },
];

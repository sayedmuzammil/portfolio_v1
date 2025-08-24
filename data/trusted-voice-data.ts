type TrustedVoiceProps = {
  id: number;
  highlight?: string;
  title?: string;
  desc: string;
  rating: number;
  icon: string;
  name: string;
  role: string;
};

export const TrustedVoices: TrustedVoiceProps[] = [
  {
    id: 1,
    highlight: '8X',
    title: 'More users converted after redesign',
    desc: 'Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.',
    rating: 5,
    icon: '/icons/icon-avatar1.svg',
    name: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
  },
  {
    id: 2,
    highlight: '3X',
    title: 'Improved user engagement and sign-ups',
    desc: "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing",
    rating: 5,
    icon: '/icons/icon-avatar2.svg',
    name: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
  },
  {
    id: 3,

    desc: "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    rating: 5,
    icon: '/icons/icon-avatar3.svg',
    name: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
  },
  {
    id: 4,

    desc: 'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
    rating: 5,
    icon: '/icons/icon-avatar4.svg',
    name: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
  },
];

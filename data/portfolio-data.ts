export type PortfolioProps = {
  id: number;
  image: string;
  title: string;
  year: string;
};

export const PortfoliosData: PortfolioProps[] = [
  {
    id: 1,
    image: '/images/portofolio1.png',
    title: 'Portfolio 1',
    year: '2025',
  },
  {
    id: 2,
    image: '/images/portofolio2.png',
    title: 'Portfolio 2',
    year: '2025',
  },
  {
    id: 3,
    image: '/images/portofolio3.png',
    title: 'Portfolio 3',
    year: '2025',
  },
];

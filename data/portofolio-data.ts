export type PortofolioProps = {
  id: number;
  image: string;
  title: string;
  year: string;
};

export const PortofoliosData: PortofolioProps[] = [
  {
    id: 1,
    image: '/images/portofolio1.png',
    title: 'Portofolio 1',
    year: '2025',
  },
  {
    id: 2,
    image: '/images/portofolio2.png',
    title: 'Portofolio 2',
    year: '2025',
  },
  {
    id: 3,
    image: '/images/portofolio3.png',
    title: 'Portofolio 3',
    year: '2025',
  },
];

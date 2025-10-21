import { BuilderDataProps } from './builder-data';

export interface LeaderDataProps {
  id: number;
  data: string;
}

export const LeaderData: LeaderDataProps[] = [
  {
    id: 1,
    data: 'Certified',
  },
  {
    id: 2,
    data: 'Impactful',
  },
  {
    id: 3,
    data: 'Data driven',
  },
];

export const LeaderSkills: LeaderDataProps[] = [
  {
    id: 1,
    data: 'Coached multi-squad teams',
  },
  {
    id: 2,
    data: 'Improved Agile maturity across tribes',
  },
  {
    id: 3,
    data: 'Managed enterprise integrations for government clients',
  },
];

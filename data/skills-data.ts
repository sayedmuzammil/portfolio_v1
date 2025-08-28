import React from 'react';

export type SkillsProps = {
  id: number;
  skill: string;
  withMe: boolean;
  others: boolean;
};

export const SkillsData: SkillsProps[] = [
  {
    id: 1,
    skill: 'React Expert',
    withMe: true,
    others: false,
  },
  {
    id: 2,
    skill: 'Pixel Perfect',
    withMe: true,
    others: false,
  },
  {
    id: 3,
    skill: 'TypeScript Proficiency',
    withMe: true,
    others: false,
  },
  {
    id: 4,
    skill: 'Clean, Maintainable Code',
    withMe: true,
    others: false,
  },
  {
    id: 5,
    skill: 'Performance Optimization',
    withMe: true,
    others: false,
  },
  {
    id: 6,
    skill: 'Responsive Website',
    withMe: true,
    others: false,
  },
  {
    id: 7,
    skill: 'Ul Design Proficiency (Figma)',
    withMe: true,
    others: false,
  },
];

// // export type PortfolioProps = {
// //   id: number;
// //   image: string;
// //   title: string;
// //   year: string;
// // };

export type PortfolioProps = {
  id: number;
  title: string;
  role?: string;
  period?: string;
  desc: string;
  impact: string[];
  tags: string[];
};

export const LeaderPortfoliosData: PortfolioProps[] = [
  {
    id: 1,
    title: 'Executive Analytics Dashboard',
    role: 'Scrum Master',
    period: 'July 2025 – October 2025',
    desc: 'Coordinated cross-unit teams to build an executive dashboard integrating business and operational data, empowering leadership with real-time insights',
    impact: [
      'Reduced reporting cycles from 6 months → 7 days through automation',
      'Improved decision-making speed and KPI visibility across business units',
      'Strengthened collaboration between technical, data, and executive teams',
    ],
    tags: [
      'Agile Delivery',
      'Data Dashboard',
      'Stakeholder Alignment',
      'Team Collaboration',
    ],
  },
  {
    id: 2,
    title: 'Public Service Integration Platform',
    role: 'Scrum Master',
    period: 'June 2024 – October 2024',
    desc: 'Led Agile delivery of a national G2C service platform integrating multiple ministries into one citizen-access system with standardized analytics tracking',
    impact: [
      'Delivered cross-ministry integration within 3 months, ahead of schedule',
      'Coordinated 20+ developers and analysts across agencies',
      'Achieved 100% analytics accuracy with standardized tracking (Firebase, Google Analytics)',
    ],
    tags: [
      'Government Tech',
      'Agile Coaching',
      'Delivery Excellence',
      'Data Analytics',
    ],
  },
  {
    id: 3,
    title: 'Chapter Management',
    role: 'Program Manager',
    period: 'July 2025 – October 2025',
    desc: 'Designed and implemented a mentoring and governance framework to scale Agile maturity across Telkom’s Tribes and Chapters',
    impact: [
      'Increased Scrum Master competency by 75%',
      'Established formal Agile governance across multiple Tribes',
      'Strengthened leadership pipeline and Agile culture organization-wide',
    ],
    tags: [
      'Agile Coaching',
      'Leadership Growth',
      'Mentorship',
      'Continuous Improvement',
    ],
  },
  {
    id: 4,
    title: 'Government Digital Transformation',
    role: 'Project Manager',
    period: 'October 2021 – June 2025',
    desc: 'Spearheaded digital transformation projects for seven ministries, driving interoperability and readiness for Indonesia’s e-government initiatives',
    impact: [
      'Delivered actionable SPBE insights to 7 ministries',
      'Improved BinaUMK user experience via BSN–OSS integration',
      'Fostered collaboration and communication between government and Telkom teams',
    ],
    tags: [
      'Digital Transformation',
      'Agile Delivery',
      'Change Management',
      'Public Sector',
    ],
  },
];

export const BuilderPortfoliosData: PortfolioProps[] = [
  {
    id: 1,
    title: 'Social Media App (Instagram Clone)',
    desc: 'A full-featured social media platform inspired by Instagram, allowing users to post photos, like, comment, and bookmark content with real-time updates.',
    impact: [
      'Built complete CRUD functionality using Firebase (posts, comments, likes, bookmarks).',
      'Designed modular UI components using shadcn/ui for scalable development',
      'Achieved 90+ Lighthouse score through responsive and optimized code',
    ],
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'shadcn/ui',
      'Tanstack Query',
    ],
  },
  {
    id: 2,
    title: 'Project 2',
    desc: 'A responsive web app that fetches movie data from an external API with search, filtering, and pagination features.',
    impact: [
      'Implemented API integration and pagination with clean state management',
      'Designed responsive grid UI for better UX on all devices',
      'Improved app performance with debounced search queries and lightweight components',
    ],
    tags: ['React', 'TypeScript', 'Axios', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Library App',
    desc: 'A digital library web app to browse, add, and manage books, with category-based filtering and user authentication.',
    impact: [
      'Implemented Firebase Auth for secure user management',
      'Created reusable components for book cards and detail modals',
      'Designed intuitive navigation for easy content discovery',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
  },
  {
    id: 4,
    title: 'Restaurant Website',
    desc: 'A modern restaurant landing page showcasing menus, chef profiles, and reservation sections with subtle motion design and visual hierarchy.',
    impact: [
      'Designed responsive and visually rich layout with Framer Motion animations',
      'Optimized for fast load and accessibility using semantic HTML and lazy loading',
      'Highlighted your understanding of branding and storytelling through UI',
    ],
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
];

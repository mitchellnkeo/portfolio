import type { WorkExperience, Education } from '../types';

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Software Engineer',
    startDate: '2022-01',
    current: true,
    location: 'San Francisco, CA',
    responsibilities: [
      'Lead development of microservices architecture serving 1M+ users',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with cross-functional teams on product roadmap',
      'Optimize application performance and scalability',
    ],
    achievements: [
      'Reduced API response time by 40% through caching strategies',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Led migration to TypeScript improving code quality and maintainability',
    ],
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Full-Stack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    current: false,
    location: 'Remote',
    responsibilities: [
      'Developed and maintained React-based web applications',
      'Built RESTful APIs using Node.js and Express',
      'Managed PostgreSQL database and implemented data migrations',
      'Worked closely with designers to implement responsive UI/UX',
    ],
    achievements: [
      'Shipped 5 major features in first 6 months',
      'Improved test coverage from 30% to 85%',
      'Reduced page load time by 50% through optimization',
    ],
  },
  {
    id: '3',
    company: 'Digital Solutions',
    position: 'Software Engineering Intern',
    startDate: '2019-06',
    endDate: '2019-08',
    current: false,
    location: 'New York, NY',
    responsibilities: [
      'Assisted in development of customer-facing web applications',
      'Fixed bugs and implemented minor features',
      'Participated in daily standups and sprint planning',
      'Learned best practices for code versioning and collaboration',
    ],
    achievements: [
      'Completed 3 successful feature implementations',
      'Received recognition for quick learning and contribution',
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2016-09',
    endDate: '2020-05',
    current: false,
    location: 'Berkeley, CA',
  },
  {
    id: '2',
    institution: 'FreeCodeCamp',
    degree: 'Certification',
    field: 'Full Stack Web Development',
    startDate: '2019-01',
    endDate: '2019-06',
    current: false,
    location: 'Online',
  },
];


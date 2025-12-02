import type { WorkExperience, Education } from '../types';

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    company: 'Golden Tech',
    position: 'Software Engineer',
    startDate: '2024-03',
    current: true,
    location: 'Tacoma, WA',
    responsibilities: [
      'Develop and maintain responsive web applications using TypeScript, React, and Tailwind CSS, ensuring clean, scalable, and maintainable front-end architecture',
      'Collaborate cross-functionally with UI/UX designers and QA engineers to translate design specifications into high-quality, user-friendly interfaces that meet accessibility and performance standards',
      'Analyze application analytics and performance metrics to identify areas for improvement, optimize user experience, and support data-driven feature development',
    ],
  },
  {
    id: '2',
    company: 'U.S. Army, 1st Special Forces Group',
    position: 'Communications Manager',
    startDate: '2020-12',
    endDate: '2024-01',
    current: false,
    location: 'JBLM, WA',
    responsibilities: [
      'Developed communication plans using satellite telecommunications, radio equipment, and nonstandard communication applications for 3 special operations deployments',
      'Instructed 6 Special Forces teams on communications equipment with product demonstrations and implementations, enhancing overall proficiency with technical assets and improving communication quality across all teams',
      'Provide mission critical 24/7 technical support for special operation centers while on deployment',
    ],
    achievements: [
      'Army Achievement Medal - Awarded for developing a dynamic warfare map using Android Team Awareness Kit (ATAK) optimizing team maneuvering. Enhanced Special Forces team proficiency through equipment instruction, product demos, and implementation. Devised comprehensive communication plans for forward-deployed teams. Instructed multiple Special Forces teams on communications equipment with product demonstration and implementation',
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


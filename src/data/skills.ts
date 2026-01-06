import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages & Libraries
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'HTML', category: 'languages' },
  { name: 'CSS', category: 'languages' },
  { name: 'Node.js', category: 'languages' },
  { name: 'Express.js', category: 'languages' },
  { name: 'React.js', category: 'languages' },
  { name: 'React Native', category: 'languages' },
  { name: 'Tailwind', category: 'languages' },
  { name: 'Python', category: 'languages' },
  
  // Cloud & Deployment
  { name: 'GitHub Actions', category: 'cloud' },
  { name: 'Git', category: 'cloud' },
  { name: 'Github', category: 'cloud' },
  { name: 'Render', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
  
  // Database
  { name: 'Data Structures', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'SQL', category: 'database' },
  { name: 'Algorithms', category: 'database' },
  { name: 'Relational Databases', category: 'database' },
  { name: 'ERD', category: 'database' },
  
  // Server-Side
  { name: 'Test Driven Development (TDD)', category: 'server' },
  { name: 'JSON', category: 'server' },
  { name: 'Docker', category: 'server' },
  { name: 'REST API', category: 'server' },
  { name: 'Vite', category: 'server' },
  
  // Client-Side
  { name: 'DOM API', category: 'client' },
  { name: 'Responsive Design', category: 'client' },
  { name: 'UI & UX Design', category: 'client' },
  { name: 'Microservices', category: 'client' },
  
  // Fundamentals of Computer Science
  { name: 'Object-oriented programming (OOP)', category: 'fundamentals' },
  { name: 'Agile Methodology', category: 'fundamentals' },
  { name: 'SDLC', category: 'fundamentals' },
  { name: 'Command Line', category: 'fundamentals' },
  { name: 'Linux', category: 'fundamentals' },
  { name: 'Full Stack Engineering', category: 'fundamentals' },
  { name: 'Web Development', category: 'fundamentals' },
  { name: 'App Development', category: 'fundamentals' },
];

export const categoryLabels: Record<Skill['category'], string> = {
  languages: 'Languages & Libraries',
  cloud: 'Cloud & Deployment',
  database: 'Database',
  server: 'Server-Side',
  client: 'Client-Side',
  fundamentals: 'Fundamentals of Computer Science',
};


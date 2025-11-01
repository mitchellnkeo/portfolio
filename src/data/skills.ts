import type { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'language', proficiency: 'expert' },
  { name: 'TypeScript', category: 'language', proficiency: 'expert' },
  { name: 'Python', category: 'language', proficiency: 'advanced' },
  { name: 'Java', category: 'language', proficiency: 'advanced' },
  { name: 'C++', category: 'language', proficiency: 'intermediate' },
  { name: 'Go', category: 'language', proficiency: 'intermediate' },
  { name: 'Rust', category: 'language', proficiency: 'intermediate' },
  
  // Frameworks and Libraries
  { name: 'React', category: 'framework', proficiency: 'expert' },
  { name: 'Next.js', category: 'framework', proficiency: 'advanced' },
  { name: 'Vue.js', category: 'framework', proficiency: 'advanced' },
  { name: 'Node.js', category: 'framework', proficiency: 'expert' },
  { name: 'Express', category: 'framework', proficiency: 'advanced' },
  { name: 'FastAPI', category: 'framework', proficiency: 'advanced' },
  { name: 'Django', category: 'framework', proficiency: 'intermediate' },
  { name: 'Spring Boot', category: 'framework', proficiency: 'advanced' },
  { name: 'Tailwind CSS', category: 'framework', proficiency: 'expert' },
  
  // Tools and Platforms
  { name: 'Git', category: 'tool', proficiency: 'expert' },
  { name: 'Docker', category: 'tool', proficiency: 'advanced' },
  { name: 'Kubernetes', category: 'tool', proficiency: 'intermediate' },
  { name: 'CI/CD', category: 'tool', proficiency: 'advanced' },
  { name: 'Linux', category: 'tool', proficiency: 'advanced' },
  { name: 'AWS', category: 'tool', proficiency: 'advanced' },
  { name: 'Vercel', category: 'tool', proficiency: 'expert' },
  { name: 'Netlify', category: 'tool', proficiency: 'advanced' },
  
  // Database Technologies
  { name: 'PostgreSQL', category: 'database', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'database', proficiency: 'advanced' },
  { name: 'MySQL', category: 'database', proficiency: 'advanced' },
  { name: 'Redis', category: 'database', proficiency: 'intermediate' },
  { name: 'Firebase', category: 'database', proficiency: 'advanced' },
  
  // Cloud Services
  { name: 'AWS', category: 'cloud', proficiency: 'advanced' },
  { name: 'Azure', category: 'cloud', proficiency: 'intermediate' },
  { name: 'Google Cloud', category: 'cloud', proficiency: 'intermediate' },
  { name: 'Vercel', category: 'cloud', proficiency: 'expert' },
];

export const categoryLabels: Record<Skill['category'], string> = {
  language: 'Programming Languages',
  framework: 'Frameworks & Libraries',
  tool: 'Tools & Platforms',
  database: 'Database Technologies',
  cloud: 'Cloud Services',
};

export const proficiencyColors: Record<NonNullable<Skill['proficiency']>, string> = {
  beginner: 'bg-neutral-300',
  intermediate: 'bg-primary-300',
  advanced: 'bg-primary-500',
  expert: 'bg-primary-700',
};


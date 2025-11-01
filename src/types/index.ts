// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  features: string[];
}

// Skill types
export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'cloud';
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Experience types
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
}

// Contact types
export interface ContactLink {
  name: string;
  url: string;
  icon?: string;
}


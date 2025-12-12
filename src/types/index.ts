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
  gallery?: string[];
}

// Skill types
export interface Skill {
  name: string;
  category: 'languages' | 'cloud' | 'database' | 'server' | 'client' | 'fundamentals';
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
  activities?: string;
}

export interface VolunteeringExperience {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  responsibilities: string[];
}

// Contact types
export interface ContactLink {
  name: string;
  url: string;
  icon?: string;
}


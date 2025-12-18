import { Code, Database, Cloud, Server, Monitor, BookOpen } from 'lucide-react';
import { skills, categoryLabels } from '../../data/skills';
import type { Skill } from '../../types';

const categoryIcons = {
  languages: Code,
  cloud: Cloud,
  database: Database,
  server: Server,
  client: Monitor,
  fundamentals: BookOpen,
};

export default function Skills() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  const categories: Skill['category'][] = ['languages', 'cloud', 'database', 'server', 'client', 'fundamentals'];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with!
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skillsByCategory[category];
            if (!categorySkills || categorySkills.length === 0) return null;

            const IconComponent = categoryIcons[category];

            return (
              <div key={category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                    <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {categoryLabels[category]}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-4 bg-white dark:bg-neutral-800 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-200 hover:shadow-lg flex items-center justify-center min-h-[80px]"
                    >
                      {/* Skill Name */}
                      <p className="font-semibold text-neutral-900 dark:text-white text-center">{skill.name}</p>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


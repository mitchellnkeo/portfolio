import { Code, Database, Cloud, Settings } from 'lucide-react';
import { skills, categoryLabels, proficiencyColors } from '../../data/skills';
import type { Skill } from '../../types';

const categoryIcons = {
  language: Code,
  framework: Code,
  tool: Settings,
  database: Database,
  cloud: Cloud,
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

  const categories: Skill['category'][] = ['language', 'framework', 'tool', 'database', 'cloud'];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
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
                  <div className="p-2 bg-primary-900/30 rounded-lg border border-primary-800">
                    <IconComponent className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {categoryLabels[category]}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-4 bg-neutral-800 rounded-lg border-2 border-neutral-700 hover:border-primary-500 transition-all duration-200 hover:shadow-lg"
                    >
                      {/* Skill Name */}
                      <div className="text-center">
                        <p className="font-semibold text-white mb-2">{skill.name}</p>
                        
                        {/* Proficiency Indicator */}
                        {skill.proficiency && (
                          <div className="flex items-center justify-center gap-2">
                            <div className="flex gap-1">
                              {['beginner', 'intermediate', 'advanced', 'expert'].map((level, index) => {
                                const currentLevelIndex = ['beginner', 'intermediate', 'advanced', 'expert'].indexOf(skill.proficiency || 'beginner');
                                const isActive = index <= currentLevelIndex;
                                return (
                                  <div
                                    key={level}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                      isActive
                                        ? proficiencyColors[skill.proficiency as NonNullable<Skill['proficiency']>]
                                        : 'bg-neutral-200'
                                    }`}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-primary-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-16 pt-8 border-t border-neutral-700">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="font-semibold text-neutral-300">Proficiency:</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
              </div>
              <span className="text-neutral-300">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary-300"></div>
                <div className="w-2 h-2 rounded-full bg-primary-300"></div>
                <div className="w-2 h-2 rounded-full bg-primary-300"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
              </div>
              <span className="text-neutral-300">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              </div>
              <span className="text-neutral-300">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
              </div>
              <span className="text-neutral-300">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


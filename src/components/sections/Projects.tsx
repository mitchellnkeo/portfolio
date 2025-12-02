import { useState, memo } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../common/ProjectCard';
import ProjectModal from '../common/ProjectModal';
import type { Project } from '../../types';

type FilterType = 'all' | 'fullstack' | 'frontend' | 'backend';

function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Categorize projects (simple heuristic based on technologies)
  const categorizeProject = (project: Project): FilterType => {
    const techs = project.technologies.join(' ').toLowerCase();
    const hasFrontend = techs.includes('react') || techs.includes('vue') || techs.includes('angular');
    const hasBackend = techs.includes('node') || techs.includes('express') || techs.includes('python') || techs.includes('fastapi');
    
    if (hasFrontend && hasBackend) return 'fullstack';
    if (hasFrontend) return 'frontend';
    if (hasBackend) return 'backend';
    return 'fullstack'; // default
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(proj => categorizeProject(proj) === filter);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-neutral-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience in software development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === filterOption.value
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 border-2 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onImageClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />

        {/* View More (Optional) */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Want to see more? Check out my{' '}
            <a
              href="https://github.com/mitchellkeo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold underline"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);


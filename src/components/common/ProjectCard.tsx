import { memo } from 'react';
import { ExternalLink, Github, ArrowRight, Maximize2 } from 'lucide-react';
import type { Project } from '../../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  onImageClick?: () => void;
}

function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl border-2 border-neutral-200 overflow-hidden hover:border-primary-500 transition-all duration-300 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-500 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white opacity-30">
            {project.title.charAt(0)}
          </div>
        </div>
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onImageClick?.();
            }}
            className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
            aria-label={`View ${project.title} details`}
          >
            <Maximize2 className="w-6 h-6 text-primary-600" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-6 h-6 text-primary-600" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-6 h-6 text-primary-600" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="pt-2">
          <p className="text-sm font-semibold text-neutral-700 mb-2">Key Features:</p>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-neutral-600 flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.liveUrl}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              className="flex-1"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);


import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';
import Button from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-neutral-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 dark:border-neutral-700 transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
        </button>

        {/* Project Image */}
        <div className="relative w-full bg-gradient-to-br from-primary-400 to-secondary-500">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-contain max-h-[60vh]"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center">
              <div className="text-8xl font-bold text-white opacity-30">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</h2>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">{project.description}</p>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Problem</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">{project.problem}</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Solution</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">{project.solution}</p>
            </div>
          </div>

          {/* Photo Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Photo Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((imageUrl, index) => (
                  <div
                    key={index}
                    onClick={() => setExpandedImage(imageUrl)}
                    className="group relative overflow-hidden rounded-lg border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={imageUrl}
                      alt={`${project.title} - Gallery image ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-neutral-600 dark:text-neutral-300 flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            {project.liveUrl && (
              <Button variant="primary" href={project.liveUrl} className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" href={project.githubUrl} className="flex-1">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Image Viewer */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={expandedImage}
              alt={`${project.title} - Expanded view`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={() => setExpandedImage(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}


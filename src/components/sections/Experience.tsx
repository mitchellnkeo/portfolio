import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { workExperience, education } from '../../data/experience';
import type { WorkExperience, Education } from '../../types';

function formatDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

function ExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
      <div className="relative pl-8 pb-8 border-l-2 border-neutral-700 last:border-l-0 last:pb-0 group">
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-neutral-900 group-hover:scale-125 transition-transform shadow-lg"></div>
      
      {/* Card Content */}
      <div className="bg-neutral-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-700">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{experience.position}</h3>
            <p className="text-lg font-semibold text-primary-400">{experience.company}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Calendar className="w-4 h-4" />
            <span>
              {formatDate(experience.startDate)} - {experience.current ? 'Present' : formatDate(experience.endDate || '')}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-neutral-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{experience.location}</span>
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-neutral-300 text-sm flex items-start gap-2">
                <span className="text-primary-400 mt-1.5">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="pt-4 border-t border-neutral-700">
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary-400" />
              Notable Achievements:
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-neutral-300 text-sm flex items-start gap-2">
                  <span className="text-secondary-400 mt-1.5">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="bg-neutral-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-700">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary-900/30 rounded-lg border border-primary-800">
          <GraduationCap className="w-6 h-6 text-primary-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
          <p className="text-lg font-semibold text-primary-400 mb-2">{edu.field}</p>
          <p className="text-base text-neutral-300 mb-3">{edu.institution}</p>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate || '')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{edu.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-900/30 rounded-lg border border-primary-800">
                <Briefcase className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative">
              {workExperience.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-secondary-900/30 rounded-lg border border-secondary-800">
                <GraduationCap className="w-6 h-6 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


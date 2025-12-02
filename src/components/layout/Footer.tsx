import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 py-8 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon ? iconMap[link.icon as keyof typeof iconMap] : null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {IconComponent ? (
                    <IconComponent size={20} />
                  ) : (
                    <span>{link.name}</span>
                  )}
                </a>
              );
            })}
          </div>
          {/* Copyright */}
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            © {currentYear} Mitchell Keo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


import { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail, Menu, X } from 'lucide-react';
import { navSections } from '../../utils/constants';
import DarkModeToggle from '../common/DarkModeToggle';

const iconMap: Record<string, typeof Home> = {
  hero: Home,
  about: User,
  skills: Code,
  projects: Briefcase,
  experience: GraduationCap,
  contact: Mail,
};

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(navSections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (sectionTop <= scrollPosition && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navSections[i].id);
            break;
          }
        }
      }
    };

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-3 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-20 md:w-24 lg:w-28
          bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md
          border-r border-neutral-200 dark:border-neutral-800
          z-40 transition-all duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col items-center py-8 gap-6
          shadow-xl
        `}
      >
        {/* Logo/Name - Vertical */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">MK</span>
          </div>
          <div className="hidden lg:block">
            <div className="text-xs font-bold text-neutral-900 dark:text-white text-center leading-tight">
              <div>MITCHELL</div>
              <div>KEO</div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 flex-1 w-full px-2">
          {navSections.map((section) => {
            const Icon = iconMap[section.id] || Home;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className={`
                  group relative flex flex-col items-center gap-2 p-3 rounded-xl
                  transition-all duration-200
                  ${isActive
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shadow-md'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
                title={section.label}
              >
                <Icon 
                  size={24} 
                  className={`
                    transition-transform duration-200
                    ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                  `}
                />
                <span className="text-xs font-medium hidden lg:block text-center">
                  {section.label}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-600 dark:bg-primary-400 rounded-r-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="mt-auto">
          <DarkModeToggle />
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}


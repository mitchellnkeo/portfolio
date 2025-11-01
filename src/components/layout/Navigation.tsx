import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navSections } from '../../utils/constants';

export default function Navigation() {
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
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = navSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(navSections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navSections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={`transition-colors duration-200 font-medium ${
              activeSection === section.id
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-neutral-600 hover:text-primary-600'
            }`}
            aria-current={activeSection === section.id ? 'page' : undefined}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg md:hidden">
          <div className="flex flex-col">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className={`px-4 py-3 text-left transition-colors duration-200 font-medium ${
                  activeSection === section.id
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}


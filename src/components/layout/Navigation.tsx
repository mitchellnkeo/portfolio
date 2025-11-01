import { navSections } from '../../utils/constants';

export default function Navigation() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navSections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleScroll(section.id)}
          className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium"
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}


import Navigation from './Navigation';
import DarkModeToggle from '../common/DarkModeToggle';

export default function Header() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={handleLogoClick}
              className="text-xl font-bold text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Mitchell Keo
            </a>
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <Navigation />
            <div className="relative z-20">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function Header() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 md:left-24 lg:left-28 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-30 border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <a
            href="#hero"
            onClick={handleLogoClick}
            className="text-lg font-bold text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Mitchell Keo
          </a>
        </div>
      </div>
    </header>
  );
}


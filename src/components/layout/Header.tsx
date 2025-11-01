import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-neutral-900 hover:text-primary-600 transition-colors">
              Mitchell Keo
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}


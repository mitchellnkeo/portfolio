import { lazy, Suspense } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load sections for code splitting
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-200">
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Sidebar />
        <Header />
        <main id="main-content" className="ml-0 md:ml-24 lg:ml-28 transition-all duration-300">
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <Hero />
            <About />
            <Testimonials />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;

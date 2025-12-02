import { lazy, Suspense } from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load sections for code splitting
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-200">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <Hero />
            <About />
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

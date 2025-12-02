import { ArrowDown, Download, Mail } from 'lucide-react';
import Button from '../common/Button';
import runningImage from '../../assets/images/Running.JPG';

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden transition-colors duration-200">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary-200 dark:bg-primary-800/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-primary-600 dark:text-primary-400 whitespace-nowrap">Mitchell&nbsp;Keo</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
                Software Engineer
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Creating and building with a passion for technology and community.
            </p>
          </div>

          {/* Right Column - Avatar/Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Professional headshot */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-neutral-800">
                  <img 
                    src={runningImage} 
                    alt="Mitchell Keo - Software Engineer" 
                    className="w-full h-full object-cover scale-125"
                  />
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-800 animate-ping opacity-20"></div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in animation-delay-600">
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleScroll('contact')}
            className="group"
          >
            <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            href="/resume.pdf"
            className="group"
            onClick={(e) => {
              // In a real app, this would download the resume
              if (e) {
                e.preventDefault();
              }
              console.log('Resume download - implement later');
            }}
          >
            <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => handleScroll('projects')}
            className="group"
          >
            View Projects
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <button
            onClick={() => handleScroll('about')}
            className="text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}


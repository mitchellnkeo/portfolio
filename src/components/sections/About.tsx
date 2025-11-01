import { Code, Coffee, Gamepad2, Music } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Professional Photo Placeholder */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-neutral-200 flex items-center justify-center overflow-hidden">
                    <div className="text-8xl font-bold text-primary-600">
                      MK
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full opacity-50 blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-100 rounded-full opacity-50 blur-2xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Professional Background */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Professional Journey</h3>
              <div className="space-y-3 text-neutral-600 leading-relaxed">
                <p>
                  I'm a passionate software engineer dedicated to building innovative solutions 
                  that make a real impact. With a strong foundation in modern web technologies, 
                  I specialize in creating scalable, user-centric applications.
                </p>
                <p>
                  My journey in software development has been driven by curiosity and a desire to 
                  solve complex problems. I thrive in collaborative environments where I can 
                  contribute to meaningful projects and continuously learn from talented teams.
                </p>
              </div>
            </div>

            {/* Current Role & Focus Areas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Current Focus</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Full-Stack Development</p>
                    <p className="text-neutral-600">
                      Building end-to-end solutions with modern frameworks and best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">User Experience</p>
                    <p className="text-neutral-600">
                      Creating intuitive, accessible interfaces that users love
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Performance Optimization</p>
                    <p className="text-neutral-600">
                      Ensuring fast, efficient applications that scale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Beyond Code</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group">
                  <Coffee className="w-8 h-8 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700">Coffee</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group">
                  <Music className="w-8 h-8 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700">Music</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group">
                  <Gamepad2 className="w-8 h-8 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700">Gaming</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 hover:bg-primary-50 transition-colors group">
                  <Code className="w-8 h-8 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700">Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


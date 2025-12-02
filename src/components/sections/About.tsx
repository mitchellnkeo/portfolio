import { Code, Coffee, Gamepad2, Music } from 'lucide-react';
import ScrollFadeIn from '../common/ScrollFadeIn';
import servicePicture from '../../assets/images/Service_Picture.jpg';
import mentoringImage from '../../assets/images/Mentoring.JPG';
import bookClubImage from '../../assets/images/BookClubMeeting.jpeg';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-neutral-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <ScrollFadeIn delay={100}>
            <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Professional Photo Placeholder */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
                    <div className="text-8xl font-bold text-primary-600 dark:text-primary-400">
                      MK
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full opacity-50 blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-100 dark:bg-secondary-900/30 rounded-full opacity-50 blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
          </ScrollFadeIn>

          {/* Right Column - Content */}
          <ScrollFadeIn delay={200}>
            <div className="order-1 lg:order-2 space-y-8">
            {/* Professional Background */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Professional Journey</h3>
              <div className="space-y-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p>
                  I'm a Software Engineer based in Seattle with a background in full-stack web development, AI/ML applications, and community leadership. I specialize in building scalable, user-centered applications using TypeScript, React, Tailwind, and Node.js, and I have hands-on experience with REST APIs, PostgreSQL, and cloud deployment pipelines through platforms like Vercel and Render.
                </p>
                <p>
                  Before transitioning into tech, I served as a Communications Manager in the U.S. Army's 1st Special Forces Group, where I led and trained teams in high-pressure environments and earned an Active TS/SCI clearance. That experience sharpened my skills in problem-solving, systems thinking, and collaboration — qualities I now bring to every engineering project.
                </p>
                <p>
                  I'm passionate about using technology to improve accessibility, community engagement, and data-driven decision-making. As the Founder of the Seattle Chinatown Book Club, I lead an 8-person team to organize monthly events that bring together over 80 attendees and partner with local organizations to support cultural and community initiatives.
                </p>
                <p>
                  I thrive at the intersection of technology, leadership, and social impact, and I'm always eager to collaborate on projects that make a measurable difference.
                </p>
              </div>
              
              {/* Image Gallery - Staggered Layout */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ScrollFadeIn delay={300}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={servicePicture} 
                        alt="Service and community engagement" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium">Service & Community</p>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                
                <ScrollFadeIn delay={400}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 md:mt-8">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={mentoringImage} 
                        alt="Mentoring and leadership" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium">Mentoring & Leadership</p>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
                
                <ScrollFadeIn delay={500}>
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-2">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={bookClubImage} 
                        alt="Seattle Chinatown Book Club meeting" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium">Seattle Chinatown Book Club</p>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            {/* Current Role & Focus Areas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Current Focus</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Full-Stack Development</p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Building end-to-end solutions with modern frameworks and best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">User Experience</p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Creating intuitive, accessible interfaces that users love
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Performance Optimization</p>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Ensuring fast, efficient applications that scale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Beyond Code</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group border border-neutral-200 dark:border-neutral-700">
                  <Coffee className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Coffee</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group border border-neutral-200 dark:border-neutral-700">
                  <Music className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Music</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group border border-neutral-200 dark:border-neutral-700">
                  <Gamepad2 className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Gaming</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group border border-neutral-200 dark:border-neutral-700">
                  <Code className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Open Source</span>
                </div>
              </div>
            </div>
          </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}


import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export default function Contact() {
  const emailLink = socialLinks.find(link => link.icon === 'mail');
  const githubLink = socialLinks.find(link => link.icon === 'github');
  const linkedinLink = socialLinks.find(link => link.icon === 'linkedin');

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or anything else!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            {emailLink && (
              <a
                href={emailLink.url}
                className="group bg-white dark:bg-neutral-800 rounded-xl p-6 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 transition-colors border border-primary-200 dark:border-primary-800">
                  <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Email</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm break-all">
                  {emailLink.url.replace('mailto:', '')}
                </p>
              </a>
            )}

            {/* LinkedIn */}
            {linkedinLink && (
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-neutral-800 rounded-xl p-6 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 transition-colors border border-primary-200 dark:border-primary-800">
                  <Linkedin className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">Connect with me</p>
              </a>
            )}

            {/* GitHub */}
            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-neutral-800 rounded-xl p-6 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-600 dark:group-hover:bg-primary-500 transition-colors border border-primary-200 dark:border-primary-800">
                  <Github className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">View my code</p>
              </a>
            )}
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 border-2 border-neutral-200 dark:border-neutral-700 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-800">
                <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Location</h3>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              San Francisco, CA
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              Open to remote opportunities worldwide
            </p>
          </div>

          {/* CTA Message */}
          <div className="mt-12 text-center">
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Feel free to reach out if you'd like to collaborate, discuss opportunities, or just say hello!
            </p>
            {emailLink && (
              <a
                href={emailLink.url}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send me an email
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


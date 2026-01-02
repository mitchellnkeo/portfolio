import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ScrollFadeIn from '../common/ScrollFadeIn';
import ethanReview from '../../assets/images/Reviews/EthanReview.png';
import scottReview from '../../assets/images/Reviews/ScottReview.png';
import timReview from '../../assets/images/Reviews/TimReview.png';
import chrisReview from '../../assets/images/Reviews/ChrisReview.png';
import hermReview from '../../assets/images/Reviews/HermReview.png';

const reviews = [
  { image: hermReview, name: 'Herm' },
  { image: chrisReview, name: 'Chris' },
  { image: timReview, name: 'Tim' },
  { image: ethanReview, name: 'Ethan' },
  { image: scottReview, name: 'Scott' },
];

export default function Testimonials() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImage) {
        setExpandedImage(null);
      }
    };

    if (expandedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  const handleImageClick = (image: string) => {
    setExpandedImage(image);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop or the close button
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('[data-close-button]')) {
      setExpandedImage(null);
    }
  };

  return (
    <>
      <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              What People Say About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
          </div>

          {/* Reviews Gallery - 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <ScrollFadeIn key={review.name} delay={index * 100}>
                <div 
                  className="group relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-neutral-900 overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(review.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleImageClick(review.image);
                    }
                  }}
                  aria-label={`View ${review.name}'s recommendation`}
                >
                  <img
                    src={review.image}
                    alt={`LinkedIn recommendation from ${review.name}`}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded recommendation view"
        >
          {/* Close Button */}
          <button
            data-close-button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close expanded view"
          >
            <X size={24} />
          </button>

          {/* Expanded Image */}
          <div className="relative max-w-full max-h-full">
            <img
              src={expandedImage}
              alt="Expanded LinkedIn recommendation"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </>
  );
}


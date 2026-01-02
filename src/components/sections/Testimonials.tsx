import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ethanReview from '../../assets/images/Reviews/EthanReview.png';
import scottReview from '../../assets/images/Reviews/ScottReview.png';
import timReview from '../../assets/images/Reviews/TimReview.png';
import chrisReview from '../../assets/images/Reviews/ChrisReview.png';
import hermReview from '../../assets/images/Reviews/HermReview.png';

interface Testimonial {
  image: string;
  name: string;
  title?: string;
  relationship?: string;
  text?: string;
}

const reviews: Testimonial[] = [
  { image: hermReview, name: 'Herm' },
  { image: chrisReview, name: 'Chris' },
  { image: timReview, name: 'Tim' },
  { image: ethanReview, name: 'Ethan' },
  { image: scottReview, name: 'Scott' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Auto-advance carousel (optional - can be removed if not desired)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedImage) return; // Don't handle carousel navigation when modal is open
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedImage]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImage) {
        setExpandedImage(null);
      }
    };

    if (expandedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (image: string) => {
    setExpandedImage(image);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
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

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center p-4 md:p-6"
                    style={{ minWidth: '100%', maxWidth: '100%' }}
                  >
                    <div
                      className="group relative w-full h-[70vh] max-h-[600px] flex items-center justify-center bg-white dark:bg-neutral-900 rounded-lg overflow-hidden cursor-pointer"
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
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600 dark:bg-primary-400'
                      : 'w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
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
          style={{
            animation: 'fadeIn 0.3s ease-out forwards'
          }}
        >
          {/* Close Button */}
          <button
            data-close-button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close expanded view"
            style={{
              animation: 'fadeIn 0.3s ease-out 0.15s forwards',
              opacity: 0
            }}
          >
            <X size={24} />
          </button>

          {/* Expanded Image */}
          <div 
            className="relative max-w-full max-h-full"
            style={{
              animation: 'fadeInScale 0.3s ease-out 0.1s forwards',
              opacity: 0
            }}
          >
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


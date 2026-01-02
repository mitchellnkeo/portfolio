import ScrollFadeIn from '../common/ScrollFadeIn';
import ethanReview from '../../assets/images/Reviews/EthanReview.png';
import scottReview from '../../assets/images/Reviews/ScottReview.png';
import timReview from '../../assets/images/Reviews/TimReview.png';
import chrisReview from '../../assets/images/Reviews/ChrisReview.png';
import hermReview from '../../assets/images/Reviews/HermReview.png';

const reviews = [
  { image: ethanReview, name: 'Ethan' },
  { image: scottReview, name: 'Scott' },
  { image: timReview, name: 'Tim' },
  { image: chrisReview, name: 'Chris' },
  { image: hermReview, name: 'Herm' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            What People Say About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </div>

        {/* Reviews Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <ScrollFadeIn key={review.name} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-neutral-900">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={review.image}
                    alt={`LinkedIn recommendation from ${review.name}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { testimonialsContent } = useContentData();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (!testimonialsContent) {
    return (
      <section className="py-20 bg-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 animate-pulse max-w-3xl mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 animate-pulse">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            {testimonialsContent.sectionTitle}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            {testimonialsContent.sectionDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    {testimonial.session}
                  </p>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                <p className="text-gray-600 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-primary-600 text-white rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Dołączcie do grona zadowolonych klientów
            </h3>
            <p className="text-primary-100 mb-6 leading-relaxed">
              Każda sesja to nowa historia i nowe wyzwanie. Sprawmy, aby Wasza była wyjątkowa.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Umów swoją sesję
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
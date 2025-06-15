import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Camera, Star } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { aboutContent } = useContentData();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!aboutContent) {
    return (
      <section id="about" className="py-20 bg-warm-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-2xl h-96 animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-48 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src={aboutContent.image}
                alt={aboutContent.title}
                className="rounded-2xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-2xl shadow-lg">
                <Camera className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              {aboutContent.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {aboutContent.paragraph1}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutContent.paragraph2}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Z pasją</h3>
                <p className="text-sm text-gray-600">Każda sesja to dla mnie wyjątkowe przeżycie</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Profesjonalnie</h3>
                <p className="text-sm text-gray-600">Najwyższej jakości sprzęt i doświadczenie</p>
              </div>
              
              <div className="text-center">
                <div className="bg-warm-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-warm-700" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Z sercem</h3>
                <p className="text-sm text-gray-600">Indywidualne podejście do każdej rodziny</p>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {aboutContent.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
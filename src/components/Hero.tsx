import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const Hero = () => {
  const { heroContent } = useContentData();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!heroContent) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-200 animate-pulse">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="h-16 bg-gray-300 rounded mb-6"></div>
          <div className="h-8 bg-gray-300 rounded mb-8"></div>
          <div className="flex gap-4 justify-center">
            <div className="h-12 w-32 bg-gray-300 rounded-full"></div>
            <div className="h-12 w-32 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${heroContent.backgroundImage}")`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
          {heroContent.title.split(' ').slice(0, -3).join(' ')}
          <span className="block text-primary-300">{heroContent.title.split(' ').slice(-3).join(' ')}</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 animate-slide-up max-w-2xl mx-auto leading-relaxed">
          {heroContent.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button 
            onClick={scrollToContact}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {heroContent.primaryButtonText}
          </button>
          <button 
            onClick={scrollToAbout}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            {heroContent.secondaryButtonText}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="text-white animate-bounce-gentle"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
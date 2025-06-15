import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Baby, Heart, Clock, Shield, Calendar } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { servicesContent } = useContentData();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'family':
        return Users;
      case 'newborn':
        return Baby;
      case 'maternity':
        return Heart;
      default:
        return Users;
    }
  };

  const getColorClasses = (type: string) => {
    switch (type) {
      case 'family':
        return {
          bg: 'bg-primary-50',
          icon: 'bg-primary-100 text-primary-600',
          button: 'bg-primary-600 hover:bg-primary-700'
        };
      case 'newborn':
        return {
          bg: 'bg-accent-50',
          icon: 'bg-accent-100 text-accent-600',
          button: 'bg-accent-600 hover:bg-accent-700'
        };
      case 'maternity':
        return {
          bg: 'bg-warm-100',
          icon: 'bg-warm-200 text-warm-700',
          button: 'bg-warm-600 hover:bg-warm-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'bg-gray-100 text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  if (!servicesContent) {
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 animate-pulse max-w-3xl mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-3xl p-8 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-6"></div>
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded mb-6"></div>
                <div className="h-12 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            {servicesContent.sectionTitle}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            {servicesContent.sectionDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {servicesContent.services.map((service, index) => {
            const colors = getColorClasses(service.type);
            const Icon = getServiceIcon(service.type);
            
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  inView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${colors.icon} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-semibold text-lg text-gray-800">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full ${colors.button} text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-lg`}
                >
                  Zapytaj o sesję
                </button>
              </div>
            );
          })}
        </div>

        <div className={`text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-600 mb-6">
            Masz pytania lub potrzebujesz indywidualnej wyceny?
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Skontaktuj się ze mną
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
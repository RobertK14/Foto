import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Calendar, Camera, Download } from 'lucide-react';

const Process = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: MessageCircle,
      title: 'Konsultacja',
      description: 'Rozmawiamy o Waszych oczekiwaniach, preferencjach i wizji sesji. Odpowiadam na wszystkie pytania.',
      color: 'primary'
    },
    {
      icon: Calendar,
      title: 'Planowanie',
      description: 'Ustalamy termin, lokalizację i wszystkie szczegóły. Przygotowuję plan sesji dopasowany do Was.',
      color: 'accent'
    },
    {
      icon: Camera,
      title: 'Sesja',
      description: 'Relaksująca i przyjemna sesja w wybranej lokalizacji. Naturalnie kieruję Was podczas zdjęć.',
      color: 'warm'
    },
    {
      icon: Download,
      title: 'Odbiór zdjęć',
      description: 'W ciągu 2-3 tygodni otrzymujecie galerię z obrobionymi zdjęciami w wysokiej rozdzielczości.',
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-100 text-primary-600';
      case 'accent':
        return 'bg-accent-100 text-accent-600';
      case 'warm':
        return 'bg-warm-200 text-warm-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Jak wygląda współpraca?
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Proces jest prosty i przyjemny. Zadbam o wszystkie szczegóły, abyście mogli w pełni cieszyć się sesją.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`text-center group ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className={`${getColorClasses(step.color)} p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-warm-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              Gotowi na niezapomnianą sesję?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Skontaktujcie się ze mną już dziś, aby omówić szczegóły Waszej wymarzonej sesji fotograficznej.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Napisz do mnie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { faqContent } = useContentData();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  if (!faqContent) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            {faqContent.sectionTitle}
          </h2>
          <p className={`text-xl text-gray-600 leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            {faqContent.sectionDescription}
          </p>
        </div>

        <div className="space-y-4">
          {faqContent.faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-warm-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-warm-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-600 mb-6">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Zadaj pytanie
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
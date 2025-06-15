import React, { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { siteInfo } = useContentData();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: Phone,
      label: 'Zadzwoń',
      action: `tel:${siteInfo?.phone || '+48123456789'}`,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: `https://wa.me/${siteInfo?.whatsapp || '48123456789'}`,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-slide-up">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.action}
                target={option.action.startsWith('http') ? '_blank' : undefined}
                rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${option.color} text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 min-w-max`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{option.label}</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isExpanded ? 'rotate-45' : ''
        }`}
        aria-label="Opcje kontaktu"
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingContact;
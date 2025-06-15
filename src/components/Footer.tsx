import React from 'react';
import { Camera, Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { siteInfo } = useContentData();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-serif font-bold">
                {siteInfo?.photographerName || 'Anna Kowalska'}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Specjalizuję się w sesjach rodzinnych, noworodkowych i ciążowych. 
              Każde zdjęcie to wyjątkowa historia pełna miłości i emocji.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  O mnie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Usługi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Usługi</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Sesje rodzinne</li>
              <li className="text-gray-300">Sesje noworodkowe</li>
              <li className="text-gray-300">Sesje ciążowe</li>
              <li className="text-gray-300">Sesje plenerowe</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${siteInfo?.phone || '+48123456789'}`}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-3" />
                {siteInfo?.phone || '+48 123 456 789'}
              </a>
              <a 
                href={`mailto:${siteInfo?.email || 'anna@fotografka.pl'}`}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-3" />
                {siteInfo?.email || 'anna@fotografka.pl'}
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                {siteInfo?.address || 'Warszawa i okolice'}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {siteInfo?.photographerName || 'Anna Kowalska'} Photography. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Stworzone z</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>dla rodzin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
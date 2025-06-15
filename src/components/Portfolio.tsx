import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filters = [
    { id: 'all', label: 'Wszystkie' },
    { id: 'family', label: 'Rodzinne' },
    { id: 'newborn', label: 'Noworodkowe' },
    { id: 'maternity', label: 'Ciążowe' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1497394/pexels-photo-1497394.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      category: 'family',
      alt: 'Szczęśliwa rodzina w parku'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'newborn',
      alt: 'Śpiące noworodek'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1556710/pexels-photo-1556710.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      category: 'maternity',
      alt: 'Kobieta w ciąży'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'family',
      alt: 'Rodzice z dzieckiem'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      category: 'newborn',
      alt: 'Noworodek w koszyczku'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1537292/pexels-photo-1537292.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'maternity',
      alt: 'Para oczekująca dziecka'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      category: 'family',
      alt: 'Dziadkowie z wnukami'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'newborn',
      alt: 'Ręce rodziców z dzieckiem'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
      category: 'maternity',
      alt: 'Brzuszek ciążowy'
    }
  ];

  const filteredImages = images.filter(image => 
    activeFilter === 'all' || image.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Portfolio
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Każde zdjęcie opowiada historię. Oto wybrane momenty, które miałam przyjemność uwiecznić.
          </p>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">Zobacz powiększenie</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={filteredImages[currentImage]?.src}
                alt={filteredImages[currentImage]?.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
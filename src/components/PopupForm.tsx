import React, { useState, useEffect } from 'react';
import { X, Send, Camera } from 'lucide-react';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    sessionType: '',
    consent: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 30000); // Show after 30 seconds

    const handleBeforeUnload = () => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenPopup', 'true');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    localStorage.setItem('hasSeenPopup', 'true');
    
    // Auto close after success
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <Camera className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              Dziękuję!
            </h3>
            <p className="text-gray-600">
              Skontaktuję się z Tobą w ciągu 24 godzin z szczegółami oferty.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <Camera className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                Nie przegap okazji!
              </h3>
              <p className="text-gray-600">
                Otrzymaj <span className="font-semibold text-primary-600">10% zniżki</span> na pierwszą sesję.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Twój adres email"
                />
              </div>

              <div>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">Jaka sesja Cię interesuje?</option>
                  <option value="family">Sesja rodzinna</option>
                  <option value="newborn">Sesja noworodkowa</option>
                  <option value="maternity">Sesja ciążowa</option>
                </select>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 mr-3 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label className="text-sm text-gray-600">
                  Wyrażam zgodę na przetwarzanie danych osobowych w celu przesłania oferty
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Wysyłam...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Otrzymaj zniżkę 10%
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
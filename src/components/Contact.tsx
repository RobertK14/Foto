import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        sessionType: '',
        preferredDate: '',
        message: '',
        consent: false
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+48 123 456 789',
      action: 'tel:+48123456789'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'anna@fotografka.pl',
      action: 'mailto:anna@fotografka.pl'
    },
    {
      icon: MapPin,
      title: 'Lokalizacja',
      value: 'Warszawa i okolice',
      action: null
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      value: 'Pon-Sob 9:00-18:00',
      action: null
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                Dziękuję za wiadomość!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Twoje zapytanie zostało wysłane. Odpowiem w ciągu 24 godzin.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Skontaktuj się ze mną
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Gotowa na niezapomnianą sesję? Napisz do mnie lub zadzwoń. Razem zaplanujemy Waszą wymarzonych sesję.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className={`${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8">
                Informacje kontaktowe
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center p-4 bg-warm-50 rounded-2xl hover:bg-warm-100 transition-colors duration-200">
                      <div className="bg-primary-100 p-3 rounded-full mr-4">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.action ? (
                    <a key={index} href={info.action} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-3xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Mapa lokalizacji</p>
                <p className="text-sm">Warszawa i okolice</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8">
                Napisz do mnie
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Jak się do Ciebie zwracać?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="twoj@email.pl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sessionType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Rodzaj sesji *
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Wybierz rodzaj sesji</option>
                      <option value="family">Sesja rodzinna</option>
                      <option value="newborn">Sesja noworodkowa</option>
                      <option value="maternity">Sesja ciążowa</option>
                      <option value="other">Inne</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferowany termin
                  </label>
                  <input
                    type="text"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="np. weekend w lutym, weekday po 15:00"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Opowiedz mi o swojej wizji sesji..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 mr-3 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie zgodnie z RODO *
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
                      Wyślij zapytanie
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
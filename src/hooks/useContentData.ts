import { useState, useEffect } from 'react';

interface SiteInfo {
  photographerName: string;
  siteTitle: string;
  siteDescription: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface AboutContent {
  title: string;
  paragraph1: string;
  paragraph2: string;
  image: string;
  buttonText: string;
}

interface Service {
  title: string;
  description: string;
  duration: string;
  price: string;
  type: string;
  features: string[];
}

interface ServicesContent {
  sectionTitle: string;
  sectionDescription: string;
  services: Service[];
}

interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
  session: string;
}

interface TestimonialsContent {
  sectionTitle: string;
  sectionDescription: string;
  testimonials: Testimonial[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQContent {
  sectionTitle: string;
  sectionDescription: string;
  faqs: FAQ[];
}

export const useContentData = () => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
  const [servicesContent, setServicesContent] = useState<ServicesContent | null>(null);
  const [testimonialsContent, setTestimonialsContent] = useState<TestimonialsContent | null>(null);
  const [faqContent, setFAQContent] = useState<FAQContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load all content files
        const [
          siteInfoResponse,
          heroResponse,
          aboutResponse,
          servicesResponse,
          testimonialsResponse,
          faqResponse
        ] = await Promise.all([
          import('../data/site-info.json'),
          import('../data/hero.json'),
          import('../data/about.json'),
          import('../data/services.json'),
          import('../data/testimonials.json'),
          import('../data/faq.json')
        ]);

        setSiteInfo(siteInfoResponse.default);
        setHeroContent(heroResponse.default);
        setAboutContent(aboutResponse.default);
        setServicesContent(servicesResponse.default);
        setTestimonialsContent(testimonialsResponse.default);
        setFAQContent(faqResponse.default);
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return {
    siteInfo,
    heroContent,
    aboutContent,
    servicesContent,
    testimonialsContent,
    faqContent,
    loading
  };
};
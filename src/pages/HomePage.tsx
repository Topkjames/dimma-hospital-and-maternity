import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { MaternityHighlight } from '../components/home/MaternityHighlight';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { AboutPreview } from '../components/home/AboutPreview';
import { HealthArticlesPreview } from '../components/home/HealthArticlesPreview';
import { EmergencyBanner } from '../components/home/EmergencyBanner';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main id="main-content" className="flex-grow">
      {/* 1. Hero Section */}
      <Hero
        onBookAppointment={() => onNavigate('appointment')}
        onExploreServices={() => onNavigate('services')}
        onExploreMaternity={() => onNavigate('maternity')}
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Maternity Spotlight Section */}
      <MaternityHighlight
        onExploreMaternity={() => onNavigate('maternity')}
        onBookMaternity={() => onNavigate('appointment', { service: 'Maternity Services' })}
      />

      {/* 4. Core Services Grid with Detail Modals */}
      <ServicesPreview
        onViewAllServices={() => onNavigate('services')}
        onBookAppointment={(serviceTitle) => onNavigate('appointment', { service: serviceTitle })}
      />

      {/* 5. About & Philosophy Overview */}
      <AboutPreview
        onLearnMore={() => onNavigate('about')}
      />

      {/* 6. Health & Maternity Articles Preview */}
      <HealthArticlesPreview
        onViewArticle={(slug) => onNavigate('blog', { slug })}
        onViewAllArticles={() => onNavigate('blog')}
      />

      {/* 7. Emergency & Contact Banner */}
      <EmergencyBanner
        onBookAppointment={() => onNavigate('appointment')}
        onContactClick={() => onNavigate('contact')}
      />
    </main>
  );
};


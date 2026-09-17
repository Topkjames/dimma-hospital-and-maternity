import React, { useMemo, useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { EmergencyFloatingBar } from './components/layout/EmergencyFloatingBar';
import { AiHealthChat } from './components/common/AiHealthChat';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MaternityPage } from './pages/MaternityPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';

export const App: React.FC = () => {
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    return hash || 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialRoute);
  const [routeParams, setRouteParams] = useState<any>({});

  const shellTheme = useMemo(() => {
    try {
      return localStorage.getItem('dimma-ui-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const route = getInitialRoute();
      setCurrentPage(route);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string, params?: any) => {
    setCurrentPage(page);
    setRouteParams(params || {});
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'services':
        return <ServicesPage onNavigate={navigate} />;
      case 'maternity':
        return <MaternityPage onNavigate={navigate} />;
      case 'doctors':
        return <DoctorsPage onNavigate={navigate} />;
      case 'patient-info':
        return <PatientInfoPage onNavigate={navigate} />;
      case 'appointment':
        return (
          <AppointmentPage
            initialService={routeParams?.service}
            initialDepartment={routeParams?.department}
            onNavigate={navigate}
          />
        );
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'faq':
        return <FaqPage onNavigate={navigate} />;
      case 'blog':
        return (
          <BlogPage
            initialSlug={routeParams?.slug}
            onNavigate={navigate}
          />
        );
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className={`flex flex-col min-h-screen min-h-[100dvh] bg-slate-50 font-sans text-slate-800 antialiased pb-20 md:pb-0 overflow-x-hidden ${shellTheme === 'dark' ? 'theme-dark-shell' : 'theme-light-shell'}`}>
        <Header currentPage={currentPage} onNavigate={navigate} />

        <div className="flex-grow w-full max-w-full">
          {renderCurrentPage()}
        </div>

        <Footer onNavigate={navigate} />

        <EmergencyFloatingBar
          onBookClick={() => navigate('appointment')}
          onDirectionsClick={() => navigate('contact')}
        />

        <AiHealthChat />
      </div>
    </ThemeProvider>
  );
};

export default App;


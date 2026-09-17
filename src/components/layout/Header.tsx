import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Menu, X, Shield, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ThemeToggle } from '../common/ThemeToggle';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'maternity', label: 'Maternity' },
    { id: 'doctors', label: 'Medical Team' },
    { id: 'patient-info', label: 'Patient Info' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Health Articles' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top emergency & information bar */}
      <div className="bg-brand-900 text-white text-[11px] sm:text-xs border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3">
          <div className="flex items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-1 text-slate-200">
            <span className="inline-flex items-center gap-1 font-medium text-brand-200">
              <Shield className="w-3 h-3 text-brand-300 shrink-0" />
              <span>{siteConfig.cac}</span>
            </span>
            <span className="hidden sm:inline-block text-brand-400">|</span>
            <span className="italic font-medium text-amber-200 hidden md:inline-block">
              "{siteConfig.tagline}"
            </span>
            <span className="hidden lg:inline-block text-brand-400">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-brand-300 shrink-0" />
              <span>{siteConfig.address.estate}, Enugu</span>
            </span>
          </div>

          <div className="flex items-center gap-x-3 ml-auto text-slate-200">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-amber-200 transition-colors bg-emergency-600 hover:bg-emergency-700 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs shadow-sm"
              aria-label={`Call emergency line: ${siteConfig.phone}`}
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
              <span>Emergency: {siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.emailMailto}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-brand-200 transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-300 shrink-0" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={`transition-all duration-300 ${
          isScrolled ? 'py-2 sm:py-2.5 shadow-md bg-white/98 backdrop-blur-md' : 'py-2.5 sm:py-3.5 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Hospital Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-0.5 sm:p-1 group transition-transform active:scale-[0.99] min-w-0"
            aria-label="DIMMA Hospital and Maternity - Home"
          >
            <img
              src="/assets/dimma-logo.jpg"
              alt="DIMMA Hospital & Maternity"
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base lg:text-lg font-extrabold text-brand-900 tracking-tight leading-none uppercase truncate group-hover:text-brand-700 transition-colors">
                DIMMA HOSPITAL
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-emergency-600 tracking-wider uppercase leading-tight">
                &amp; MATERNITY
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium hidden sm:block leading-none">
                Trans-Ekulu, Enugu
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Large Screens) */}
          <div className="hidden xl:flex items-center space-x-1 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all text-xs lg:text-sm font-semibold ${
                    isActive
                      ? 'bg-brand-50 text-brand-800 font-bold border-b-2 border-brand-700'
                      : 'text-slate-700 hover:text-brand-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('appointment')}
              className="hidden xs:inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-100 shrink-0" />
              <span className="whitespace-nowrap">Book Appointment</span>
            </button>

            {/* Theme Toggle */}
            <div className="hidden sm:flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="xl:hidden p-2 sm:p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-brand-600 min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            <div className="hidden h-6 sm:hidden" aria-hidden="true" />
          </div>
        </div>

        {/* Mobile Full-Screen/Dropdown Menu Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[auto] z-50 bg-white border-t border-slate-200 shadow-2xl px-4 pt-3 pb-8 max-h-[calc(100dvh-80px)] overflow-y-auto animate-fade-in">
            <div className="grid grid-cols-1 gap-1 pb-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-50 text-brand-800 font-bold border-l-4 border-brand-700'
                        : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-brand-700' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <div className="flex sm:hidden items-center justify-between">
                <ThemeToggle />
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{siteConfig.openingHours.emergency}</span>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('appointment')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-700 text-white font-bold text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={siteConfig.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emergency-600 text-white font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};


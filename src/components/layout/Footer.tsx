import React from 'react';
import { Phone, Mail, MapPin, Shield, Heart, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 sm:pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Column 1: Hospital Branding & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 w-fit max-w-full">
              <img
                src="/assets/dimma-logo.jpg"
                alt="DIMMA Hospital & Maternity"
                className="h-10 sm:h-12 w-auto object-contain rounded-lg bg-white p-1 shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-white font-extrabold text-sm sm:text-base tracking-tight leading-tight uppercase truncate">
                  DIMMA HOSPITAL
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-emergency-500 uppercase tracking-wider">
                  &amp; MATERNITY
                </p>
              </div>
            </div>

            <p className="text-amber-300/95 font-medium italic text-xs sm:text-sm">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              A private healthcare institution in Trans-Ekulu, Enugu, dedicated to providing compassionate clinical care, safe antenatal and delivery pathways, newborn wellness, and family healthcare services.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[11px] sm:text-xs">
                <Shield className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>CAC: {siteConfig.cac}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[11px] sm:text-xs">
                <Heart className="w-3.5 h-3.5 text-emergency-400 shrink-0" />
                <span>Private Healthcare Provider</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Hospital Services' },
                { id: 'maternity', label: 'Maternity Wing' },
                { id: 'doctors', label: 'Medical Team' },
                { id: 'patient-info', label: 'Patient Information' },
                { id: 'faq', label: 'Frequently Asked Questions' },
                { id: 'blog', label: 'Health Articles' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-150 py-1 min-h-[30px]"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Maternity & Key Clinical Care */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Maternity &amp; Clinical
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('maternity')} className="hover:text-white transition-colors py-1">
                  Antenatal Care (ANC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('maternity')} className="hover:text-white transition-colors py-1">
                  Labor &amp; Safe Delivery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('maternity')} className="hover:text-white transition-colors py-1">
                  Postnatal Monitoring
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors py-1">
                  Child &amp; Family Healthcare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors py-1">
                  Diagnostic Laboratory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors py-1">
                  Pharmacy Dispensary
                </button>
              </li>
              <li className="pt-1">
                <button onClick={() => handleNav('appointment')} className="hover:text-amber-300 text-brand-300 font-semibold transition-colors flex items-center gap-1 py-1">
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility Info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Hospital Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                {siteConfig.address.street},<br />
                {siteConfig.address.estate},<br />
                {siteConfig.address.city}, {siteConfig.address.state}
              </address>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-emergency-500 shrink-0" />
              <a
                href={siteConfig.phoneTel}
                className="text-white font-bold hover:text-emergency-400 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-brand-400 shrink-0" />
              <a
                href={siteConfig.emailMailto}
                className="text-slate-300 hover:text-white transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs space-y-1 mt-2">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{siteConfig.openingHours.emergency}</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                {siteConfig.openingHours.general}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Notices */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center md:text-left">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button onClick={() => handleNav('patient-info')} className="hover:text-slate-300 py-1">
              Patient Guidelines
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button onClick={() => handleNav('faq')} className="hover:text-slate-300 py-1">
              FAQ
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 py-1">
              Emergency Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


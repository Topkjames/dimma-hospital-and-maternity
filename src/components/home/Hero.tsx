import React from 'react';
import { Calendar, Stethoscope, Phone, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeroProps {
  onBookAppointment: () => void;
  onExploreServices: () => void;
  onExploreMaternity: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointment,
  onExploreServices,
  onExploreMaternity,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Decorative subtle medical background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-72 sm:w-96 h-72 sm:h-96 bg-brand-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 sm:w-80 h-64 sm:h-80 bg-teal-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Tagline & Location Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-brand-200 shadow-sm text-[11px] sm:text-xs font-semibold text-brand-900 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emergency-600 animate-ping shrink-0" />
              <span className="text-emergency-600 uppercase tracking-wide truncate">Maternity &amp; General Hospital</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 truncate">Enugu</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
              Compassionate Care.{' '}
              <span className="text-brand-700 block sm:inline">Trusted Healthcare.</span>{' '}
              <span className="text-slate-800">Healthier Families.</span>
            </h1>

            {/* Tagline Highlight */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-600/90">
              "{siteConfig.tagline}"
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.name} is a dedicated healthcare facility in Trans-Ekulu, Enugu. We provide compassionate medical care, safe antenatal and delivery services, newborn wellness, and responsive family healthcare with clinical excellence.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={onBookAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <Calendar className="w-4 h-4 text-brand-200 shrink-0" />
                <span>Book an Appointment</span>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <Stethoscope className="w-4 h-4 text-brand-700 shrink-0" />
                <span>Explore Services</span>
              </button>

              <button
                type="button"
                onClick={onExploreMaternity}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold text-xs sm:text-sm border border-teal-200 transition-all"
              >
                <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Maternity Wing</span>
              </button>
            </div>

            {/* Quick Emergency Telephone & Direct Access */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-600">
              <span className="font-semibold text-slate-700">Need urgent clinical assistance?</span>
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emergency-50 border border-emergency-200 text-emergency-700 font-bold hover:bg-emergency-100 transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-emergency-600 shrink-0" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Brand Card with Official DM Logo & Healthcare Presentation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-card border border-slate-100 relative z-10 space-y-4 sm:space-y-6">
                
                {/* Official Logo Display Container */}
                <div className="bg-gradient-to-br from-slate-50 via-brand-50/40 to-slate-50 rounded-2xl p-5 sm:p-6 border border-brand-100/80 flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-3 sm:mb-4 max-w-full">
                    <img
                      src="/assets/dimma-logo.jpg"
                      alt="DIMMA Hospital & Maternity Official Monogram"
                      className="w-40 sm:w-52 md:w-56 h-auto object-contain max-w-full"
                    />
                  </div>
                  
                  <span className="text-[11px] sm:text-xs font-bold text-brand-700 uppercase tracking-wider">
                    Official Hospital Portal
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    11 Wokemba Street, Federal Housing, Trans-Ekulu, Enugu
                  </p>
                </div>

                {/* Key Hospital Highlights */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-left">
                  <div className="p-3 rounded-xl bg-brand-50/50 border border-brand-100">
                    <div className="flex items-center gap-1.5 text-brand-700 font-bold text-xs uppercase mb-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>Registered</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">{siteConfig.cac}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                    <div className="flex items-center gap-1.5 text-emergency-700 font-bold text-xs uppercase mb-0.5">
                      <Heart className="w-3.5 h-3.5 text-emergency-600 shrink-0" />
                      <span>Maternity</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">Antenatal &amp; Delivery</p>
                  </div>
                </div>

                {/* Reassuring note */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-700 truncate">Dedicated Care Team</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px] sm:text-[11px] shrink-0">
                    24/7 Available
                  </span>
                </div>
              </div>

              {/* Decorative behind glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600 to-teal-400 rounded-3xl opacity-10 blur-xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


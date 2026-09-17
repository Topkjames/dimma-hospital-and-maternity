import React from 'react';
import { Phone, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface EmergencyBannerProps {
  onBookAppointment: () => void;
  onContactClick: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  onBookAppointment,
  onContactClick,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emergency-600/30 text-emergency-300 border border-emergency-500/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider max-w-full truncate">
              <span className="w-2 h-2 rounded-full bg-emergency-500 animate-pulse shrink-0" />
              <span className="truncate">Emergency &amp; Maternal Admissions Desk</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Need Prompt Medical Care or Have an Inquiry?
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Our clinical staff and maternity desk are ready to assist you. Call our dedicated phone line or book your clinical consultation online.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-300 shrink-0" />
                <span>11 Wokemba Street, Trans-Ekulu, Enugu</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-300 shrink-0" />
                <span>Emergency: 24/7 Available</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={siteConfig.phoneTel}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emergency-600 hover:bg-emergency-500 active:bg-emergency-700 text-white font-extrabold text-xs sm:text-sm shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Direct Call: {siteConfig.phone}</span>
            </a>

            <button
              type="button"
              onClick={onBookAppointment}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 active:bg-slate-200 text-brand-900 font-bold text-xs sm:text-sm shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-brand-700 shrink-0" />
              <span>Schedule Appointment</span>
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/10 active:bg-white/15 text-slate-300 hover:text-white font-medium text-xs transition-all"
            >
              <span>Get Directions &amp; Contact Info</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};


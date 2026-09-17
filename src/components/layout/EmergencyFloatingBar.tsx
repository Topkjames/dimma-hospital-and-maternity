import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface EmergencyFloatingBarProps {
  onBookClick: () => void;
  onDirectionsClick: () => void;
}

export const EmergencyFloatingBar: React.FC<EmergencyFloatingBarProps> = ({
  onBookClick,
  onDirectionsClick,
}) => {
  return (
    <aside
      aria-label="Quick Hospital Access"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-float"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={siteConfig.phoneTel}
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emergency-600 active:bg-emergency-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emergency-500"
          aria-label={`Call emergency line ${siteConfig.phone}`}
        >
          <Phone className="w-4 h-4 shrink-0 animate-pulse" />
          <span className="truncate">Call: {siteConfig.phone}</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brand-700 active:bg-brand-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-brand-600"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Visit</span>
        </button>

        <button
          onClick={onDirectionsClick}
          aria-label="Hospital Address & Directions"
          className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl border border-slate-300 text-slate-700 active:bg-slate-100 transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-brand-600"
        >
          <MapPin className="w-4 h-4 text-brand-700 shrink-0" />
        </button>
      </div>
    </aside>
  );
};


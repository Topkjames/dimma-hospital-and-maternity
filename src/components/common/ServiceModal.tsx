import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import { siteConfig } from '../../config/siteConfig';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookAppointment: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close dialog background"
      />

      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[88dvh] overflow-y-auto border border-slate-100 z-10 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-4 sm:p-6 border-b border-slate-100 bg-gradient-to-r from-brand-50 via-white to-slate-50">
          <div className="pr-4 min-w-0">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-brand-100 text-brand-800 mb-1.5">
              {service.category.toUpperCase()}
            </span>
            <h3 id="service-modal-title" className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close service details"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors border border-transparent hover:border-slate-200 shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Clinical Overview
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Features &amp; Clinical Protocols
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 sm:gap-2.5">
              {service.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs sm:text-sm">
            <div>
              <span className="font-semibold text-slate-900 block">Direct Clinical Help</span>
              <span className="text-slate-600">Have questions regarding this service?</span>
            </div>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-1.5 font-bold text-brand-700 hover:text-brand-800"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 p-4 sm:p-5 border-t border-slate-100 bg-slate-50 rounded-b-2xl sm:rounded-b-3xl flex flex-col sm:flex-row items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-white active:bg-slate-100 transition-colors text-xs sm:text-sm order-2 sm:order-1"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookAppointment(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold transition-all shadow-md text-xs sm:text-sm order-1 sm:order-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};


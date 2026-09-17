import React, { useState } from 'react';
import {
  Baby,
  HeartPulse,
  Sparkles,
  Stethoscope,
  ShieldPlus,
  Ambulance,
  FlaskConical,
  Pill,
  Activity,
  HeartHandshake,
  Syringe,
  ClipboardCheck,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { hospitalServices } from '../../config/siteConfig';
import { ServiceItem } from '../../types';
import { ServiceModal } from '../common/ServiceModal';

interface ServicesPreviewProps {
  onViewAllServices: () => void;
  onBookAppointment: (serviceTitle?: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Baby,
  HeartPulse,
  Sparkles,
  Stethoscope,
  ShieldPlus,
  Ambulance,
  FlaskConical,
  Pill,
  Activity,
  HeartHandshake,
  Syringe,
  ClipboardCheck,
};

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onViewAllServices,
  onBookAppointment,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'maternity' | 'general' | 'diagnostics'>('all');

  const filteredServices = activeTab === 'all'
    ? hospitalServices.slice(0, 6)
    : hospitalServices.filter(s => s.category === activeTab || (activeTab === 'general' && s.category === 'emergency')).slice(0, 6);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Clinical & Specialized Care"
          title="Comprehensive Medical Services"
          subtitle="Explore our hospital departments and specialized clinical services tailored for individual wellness, maternal health, and family medical care."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 mb-8 sm:mb-10">
          {[
            { id: 'all', label: 'All Core Services' },
            { id: 'maternity', label: 'Maternity & Antenatal' },
            { id: 'general', label: 'General & Family Care' },
            { id: 'diagnostics', label: 'Diagnostics & Pharmacy' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[38px] ${
                activeTab === tab.id
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;
            const isMaternity = service.category === 'maternity';

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 ${
                        isMaternity
                          ? 'bg-teal-50 text-teal-700 border border-teal-200'
                          : 'bg-brand-50 text-brand-700 border border-brand-200'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isMaternity
                          ? 'bg-teal-50 text-teal-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-5 sm:mb-6">
                    {service.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors inline-flex items-center gap-1 min-h-[36px]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookAppointment(service.title)}
                    className="text-xs font-semibold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-800 text-slate-700 transition-colors min-h-[36px]"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Footer CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={onViewAllServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <span>View All Hospital Services (12 Departments)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookAppointment={(title) => onBookAppointment(title)}
      />
    </section>
  );
};


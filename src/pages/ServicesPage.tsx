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
  Search,
  ArrowRight,
  CheckCircle2,
  Calendar,
  LucideIcon
} from 'lucide-react';
import { hospitalServices } from '../config/siteConfig';
import { ServiceItem } from '../types';
import { ServiceModal } from '../components/common/ServiceModal';
import { EditableNotice } from '../components/common/EditableNotice';

interface ServicesPageProps {
  onNavigate: (page: string, data?: any) => void;
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

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = hospitalServices.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      service.category === selectedCategory ||
      (selectedCategory === 'clinical' && (service.category === 'general' || service.category === 'emergency'));

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content" className="flex-grow py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Clinical Catalog
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Hospital Departments &amp; Medical Services
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Delivering quality primary healthcare, specialized maternity care, diagnostic testing, and emergency stabilization in Trans-Ekulu, Enugu.
          </p>
        </div>

        {/* Search and Category Filter Toolbar */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-full md:max-w-md">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g., Antenatal, Pharmacy, Lab, Emergency)..."
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { id: 'all', label: 'All Services (12)' },
                { id: 'maternity', label: 'Maternity Wing' },
                { id: 'clinical', label: 'General & Emergency' },
                { id: 'diagnostics', label: 'Diagnostics & Pharmacy' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all min-h-[36px] ${
                    selectedCategory === tab.id
                      ? 'bg-brand-700 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 border-t border-slate-200/60">
            <span>Showing {filteredServices.length} medical service(s)</span>
            <EditableNotice
              label="Service Scope"
              field="Service offerings can be adapted based on hospital management updates"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;
            const isMaternity = service.category === 'maternity';
            const isEmergency = service.category === 'emergency';

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
                          : isEmergency
                          ? 'bg-emergency-50 text-emergency-600 border border-emergency-200'
                          : 'bg-brand-50 text-brand-700 border border-brand-200'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isMaternity
                          ? 'bg-teal-50 text-teal-800 border border-teal-200'
                          : isEmergency
                          ? 'bg-emergency-50 text-emergency-700 border border-emergency-200'
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

                  <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors inline-flex items-center gap-1 min-h-[36px]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('appointment', { service: service.title })}
                    className="text-xs font-semibold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-brand-50 text-brand-800 hover:bg-brand-700 hover:text-white active:bg-brand-800 transition-all flex items-center gap-1 min-h-[36px]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="p-8 sm:p-12 text-center bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <p className="text-sm sm:text-base font-bold text-slate-700">No medical services matched your search "{searchQuery}".</p>
            <p className="text-xs text-slate-500">Try searching for terms like "Maternity", "Doctor", "Antenatal", or "Laboratory".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-brand-700 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookAppointment={(title) => onNavigate('appointment', { service: title })}
      />
    </main>
  );
};

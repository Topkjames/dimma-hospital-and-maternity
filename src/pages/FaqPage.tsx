import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { faqList, siteConfig } from '../config/siteConfig';

interface FaqPageProps {
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main id="main-content" className="flex-grow py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Patient Questions &amp; Clarifications
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions regarding visits, appointments, maternity care, and hospital operations at DIMMA Hospital &amp; Maternity.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-4">
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600 text-slate-800"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General & Facility' },
              { id: 'maternity', label: 'Maternity & Antenatal' },
              { id: 'appointments', label: 'Appointments' },
              { id: 'emergency', label: 'Emergency & Access' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all min-h-[34px] ${
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

        {/* Accordion FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-4 sm:p-6 text-left flex items-start justify-between gap-3 sm:gap-4 hover:bg-slate-50/70 active:bg-slate-100 transition-colors min-h-[52px]"
                >
                  <span className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed border-t border-slate-100 animate-fade-in">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 sm:p-10 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">No questions matched your search "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-brand-700 text-white text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Still have questions block */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Still have questions not covered here?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Our medical front desk in Trans-Ekulu, Enugu is always glad to assist you with inquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2">
            <a
              href={siteConfig.phoneTel}
              className="px-6 py-3 rounded-xl bg-emergency-600 hover:bg-emergency-700 active:bg-emergency-800 text-white font-bold text-xs sm:text-sm shadow text-center min-h-[42px] flex items-center justify-center"
            >
              Call: {siteConfig.phone}
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold text-xs sm:text-sm shadow text-center min-h-[42px]"
            >
              Contact Hospital Desk
            </button>
            <button
              onClick={() => onNavigate('appointment')}
              className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm shadow-sm text-center min-h-[42px]"
            >
              Book an Appointment
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

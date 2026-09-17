import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { siteConfig } from '../../config/siteConfig';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="About DIMMA Hospital &amp; Maternity"
              title="Dedicated to Clinical Excellence &amp; Compassionate Care"
              subtitle="Providing dependable, dignified, and patient-centered healthcare for the residents of Trans-Ekulu, Enugu, and neighbouring communities."
              align="left"
            />

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-1">
                Our Foundational Tagline
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900 italic">
                "{siteConfig.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                This guiding conviction inspires our medical officers, midwives, and healthcare personnel to approach every patient with humility, vigilance, and compassion.
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              At DIMMA Hospital &amp; Maternity, we combine clinical diligence with a welcoming, family-oriented atmosphere. Whether arriving for routine antenatal guidance, child healthcare, or general physician consultation, patients are received with warmth and clinical attentiveness.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Read More About Our Hospital</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Patient Dignity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Respecting every individual's privacy, comfort, and personal preferences throughout their care journey.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Safe Maternity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Adhering to hygienic, evidenced-based maternal protocols for both mother and newborn wellness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Family-Centered</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engaging families with clear communication, transparent treatment options, and holistic support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Enugu Community</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Conveniently situated in Trans-Ekulu, Enugu, providing accessible healthcare close to your neighborhood.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


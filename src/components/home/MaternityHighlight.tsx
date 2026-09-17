import React from 'react';
import { Baby, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface MaternityHighlightProps {
  onExploreMaternity: () => void;
  onBookMaternity: () => void;
}

export const MaternityHighlight: React.FC<MaternityHighlightProps> = ({
  onExploreMaternity,
  onBookMaternity,
}) => {
  const maternityPillars = [
    {
      title: "Comprehensive Antenatal Care",
      desc: "Routine prenatal checks, foetal heartbeat tracking, ultrasound referrals, and nutritional guidance."
    },
    {
      title: "Safe Labor & Delivery Care",
      desc: "Attentive midwives and medical officers dedicated to safe, calm, and hygienic delivery environments."
    },
    {
      title: "Postnatal & Newborn Support",
      desc: "Infant growth tracking, early immunization counseling, lactation support, and maternal recovery monitoring."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-teal-50/30 to-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Presentation & Mother/Baby Symbolism */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-7 shadow-card border border-teal-100 relative space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Maternity &amp; Newborn Wing
                    </h3>
                    <p className="text-xs text-teal-700 font-semibold">
                      Dedicated Maternal Care Pathways
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-1 rounded-full font-bold">
                  Enugu
                </span>
              </div>

              {/* Maternity Checklist Cues */}
              <div className="space-y-3">
                {[
                  "Early Pregnancy Registration & Blood Profiling",
                  "Foetal Wellbeing & Growth Monitoring",
                  "Safe Birthing Environment & Skilled Nursing",
                  "24/7 Emergency Obstetric Response",
                  "Newborn Care & Exclusive Breastfeeding Guidance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Reassuring Box */}
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 leading-relaxed">
                <p className="font-semibold mb-1 flex items-center gap-1.5 text-teal-950">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Reassuring, Dignified Maternal Care
                </p>
                Every pregnancy is unique. We partner with expectant mothers and families with warmth, respect, and clinical vigilance throughout every stage.
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeading
              badge="DIMMA Maternity Wing"
              badgeColor="teal"
              title="A Safe, Compassionate Haven for Mothers & Babies"
              subtitle="At DIMMA Hospital & Maternity, maternal and child healthcare is at the very heart of our identity. We provide attentive antenatal care, safe delivery support, and nurturing postnatal guidance."
              align="left"
            />

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {maternityPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h4 className="font-bold text-sm text-slate-900 mb-1.5 text-brand-900">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                type="button"
                onClick={onBookMaternity}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <Heart className="w-4 h-4" />
                <span>Book a Maternity Consultation</span>
              </button>

              <button
                type="button"
                onClick={onExploreMaternity}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-300 shadow-sm transition-all"
              >
                <span>View Full Maternity Services</span>
                <ArrowRight className="w-4 h-4 text-teal-700" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


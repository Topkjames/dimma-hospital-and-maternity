import React from 'react';
import { ShieldCheck, Heart, Users, Sparkles, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EditableNotice } from '../components/common/EditableNotice';
import { siteConfig } from '../config/siteConfig';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main id="main-content" className="flex-grow py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            About Our Institution
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            About DIMMA Hospital &amp; Maternity
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Delivering dignified, family-centered healthcare and dedicated maternal services in Enugu.
          </p>
          <div className="pt-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-brand-900 text-xs sm:text-sm font-bold italic border border-slate-200">
              "{siteConfig.tagline}"
            </span>
          </div>
        </div>

        {/* Core Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50/70 p-8 sm:p-12 rounded-3xl border border-slate-200/80">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Our Guiding Philosophy"
              title="Compassion, Dignity &amp; Clinical Attentiveness"
              align="left"
            />
            <p className="text-slate-700 leading-relaxed text-base">
              At <strong>DIMMA Hospital &amp; Maternity</strong>, healthcare is more than clinical interventions; it is a sacred trust. Our motto, <em>"{siteConfig.tagline},"</em> guides our interactions with every patient, mother, newborn, and family entering our facility.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We focus on cultivating an environment where patients feel heard, respected, and thoroughly cared for. From prenatal consultations and childbirth to primary adult wellness, our healthcare team maintains rigorous clinical standards alongside deep human empathy.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                "Safe, hygienic clinical environment",
                "Patient privacy & emotional comfort",
                "Attentive maternal & child monitoring",
                "Clear doctor-patient communication"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-700" />
                <span>Facility Registration Details</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <p><strong>Institution Name:</strong> {siteConfig.name}</p>
                <p><strong>Corporate Affairs Commission:</strong> {siteConfig.cac}</p>
                <p><strong>Facility Location:</strong> {siteConfig.address.full}</p>
                <p><strong>Emergency Line:</strong> {siteConfig.phone}</p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <EditableNotice
                  label="Official Governance"
                  field="Hospital Administration & Board Approved Policy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section with verified customizable placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Hospital Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To provide accessible, high-quality, and compassionate healthcare to individuals, expectant mothers, and families in Enugu, upholding the highest standards of medical ethics, maternal safety, and clinical excellence.
            </p>
            <div className="pt-2">
              <EditableNotice
                label="Management Notice"
                field="[Hospital Mission statement can be updated with hospital management's custom text]"
              />
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Hospital Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be a premier private healthcare and maternity destination in Enugu State recognized for reliable clinical outcomes, warm patient experiences, and comprehensive maternal and child wellness programs.
            </p>
            <div className="pt-2">
              <EditableNotice
                label="Management Notice"
                field="[Hospital Vision statement can be updated with hospital management's custom text]"
              />
            </div>
          </div>
        </div>

        {/* Foundational Pillars of Care */}
        <div className="space-y-8">
          <SectionHeading
            badge="Pillars of Care"
            title="What Sets DIMMA Hospital &amp; Maternity Apart"
            subtitle="Our clinical operations are structured around six foundational commitments."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                color: 'text-emergency-600 bg-emergency-50',
                title: "Compassionate Healthcare",
                desc: "We prioritize empathy, treating every patient like family with warmth, kindness, and attentive listening."
              },
              {
                icon: ShieldCheck,
                color: 'text-brand-700 bg-brand-50',
                title: "Patient Dignity & Privacy",
                desc: "Every consultation, clinical examination, and inpatient stay respects patient confidentiality and physical dignity."
              },
              {
                icon: Users,
                color: 'text-teal-700 bg-teal-50',
                title: "Family-Centered Care",
                desc: "We actively communicate with family members and partners, ensuring transparent care planning and reassuring support."
              },
              {
                icon: Sparkles,
                color: 'text-brand-700 bg-brand-50',
                title: "Safe Maternity Protocols",
                desc: "Dedicated attention to pregnancy health, sterile birthing conditions, and prompt neonatal assessments."
              },
              {
                icon: MapPin,
                color: 'text-amber-700 bg-amber-50',
                title: "Trans-Ekulu Community Presence",
                desc: "Conveniently located in Federal Housing, Trans-Ekulu, providing quick access for emergencies and routine care."
              },
              {
                icon: Building2,
                color: 'text-purple-700 bg-purple-50',
                title: "Continuous Clinical Diligence",
                desc: "Disciplined clinical governance, hygienic wards, genuine dispensary sourcing, and dependable laboratory testing."
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History & Establishment Placeholder Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Hospital Background &amp; Founding Statement</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Information reserved for verified hospital historical records.
              </p>
            </div>
            <EditableNotice
              label="Content Placeholder"
              field="Replace with verified hospital history statement"
            />
          </div>
          <div className="p-4 rounded-xl bg-white border border-dashed border-slate-300 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <p>
              <em>"DIMMA Hospital &amp; Maternity was established in Trans-Ekulu, Enugu, to address the community's need for high-quality, compassionate maternal and primary medical services. [Management is invited to insert official founding story, leadership remarks, and development timeline here]."</em>
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-3xl bg-brand-900 text-white text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Experience Compassionate Healthcare</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our medical officers and maternity team are here for you and your family. Reach out today or visit our Trans-Ekulu clinic.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('appointment')}
              className="px-6 py-3 rounded-xl bg-white text-brand-900 font-bold text-sm shadow hover:bg-slate-100 transition-colors"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-brand-800 text-white border border-brand-700 font-semibold text-sm hover:bg-brand-700 transition-colors"
            >
              Contact Hospital Desk
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};


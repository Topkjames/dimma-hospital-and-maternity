import React, { useState } from 'react';
import {
  FileText,
  CreditCard,
  Clock,
  CheckCircle2,
  AlertCircle,
  Heart,
  Baby
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EditableNotice } from '../components/common/EditableNotice';
import { siteConfig } from '../config/siteConfig';

interface PatientInfoPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'what-to-bring' | 'registration' | 'visiting' | 'payments'>('what-to-bring');

  return (
    <main id="main-content" className="flex-grow py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
            Patient Guidelines &amp; Hospital Care
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Information &amp; Visit Guide
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential information to help you prepare for your consultation, maternity admission, or routine clinic visit at DIMMA Hospital &amp; Maternity.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
          {[
            { id: 'what-to-bring', label: 'What to Bring', icon: FileText },
            { id: 'registration', label: 'Patient Registration', icon: CheckCircle2 },
            { id: 'visiting', label: 'Visiting Hours & Guidelines', icon: Clock },
            { id: 'payments', label: 'Billing & Payment Methods', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: What to Bring */}
        {activeTab === 'what-to-bring' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* General Consultation */}
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">General Outpatient Visit</h3>
                <p className="text-xs text-slate-500">For physician consultations, wellness reviews, and routine tests.</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Valid identification or hospital card (if registered)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>List of all current medications, dosages, and supplements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Previous laboratory reports or scan results (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Note of personal symptoms or questions for your doctor</span>
                  </li>
                </ul>
              </div>

              {/* Antenatal Care */}
              <div className="p-7 rounded-2xl bg-teal-50/40 border border-teal-200/80 shadow-soft space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Baby className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Antenatal &amp; Maternity Visit</h3>
                <p className="text-xs text-teal-800 font-medium">For routine prenatal checks and ultrasound appointments.</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-teal-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>DIMMA Maternity Record Card (issued at booking)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Ultrasound scan films and baseline blood test records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Comfortable clothing for routine abdominal exams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Partner or family birth companion is welcome</span>
                  </li>
                </ul>
              </div>

              {/* Inpatient / Delivery Admission */}
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-emergency-600 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Inpatient &amp; Delivery Admission</h3>
                <p className="text-xs text-slate-500">For planned or emergency hospital admissions.</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emergency-600 shrink-0 mt-0.5" />
                    <span>Personal hygiene essentials and comfortable sleepwear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emergency-600 shrink-0 mt-0.5" />
                    <span>Maternity pads, baby clothing, and newborn swaddles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emergency-600 shrink-0 mt-0.5" />
                    <span>Contact details for primary emergency family contacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emergency-600 shrink-0 mt-0.5" />
                    <span>Any chronic daily medications currently being taken</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Registration */}
        {activeTab === 'registration' && (
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6 animate-fade-in">
            <SectionHeading
              badge="First-Time Patients"
              title="How Patient Registration Works"
              subtitle="Setting up your patient profile at DIMMA Hospital is smooth and secure."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-bold text-slate-900 text-base">Arrival &amp; Reception</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Upon arrival at our reception desk at 11 Wokemba Street, our front desk officer will provide you with a brief registration form to capture your demographics and contact information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-bold text-slate-900 text-base">Triage &amp; Vitals</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A registered nurse checks and records your vital signs (blood pressure, temperature, pulse rate, weight, and blood glucose when indicated) before you meet the physician.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-brand-700 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-bold text-slate-900 text-base">Consultation &amp; Care Plan</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You meet with your doctor for a detailed clinical discussion, physical examination, investigation requests, or treatment prescription in complete privacy.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-600">Want to schedule your visit in advance?</span>
              <button
                onClick={() => onNavigate('appointment')}
                className="px-4 py-2 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs"
              >
                Book Appointment Online
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Visiting Hours */}
        {activeTab === 'visiting' && (
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block mb-2">
                  Ward Guidelines
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Visiting Hours &amp; Inpatient Etiquette</h3>
              </div>
              <EditableNotice
                label="Ward Hours"
                field="Visiting schedule to be officially confirmed by hospital administration"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-700" />
                  <span>Standard Visiting Windows</span>
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p><strong>Morning Session:</strong> [To be confirmed by hospital management]</p>
                  <p><strong>Evening Session:</strong> [To be confirmed by hospital management]</p>
                  <p><strong>Maternity Labor Companion:</strong> One designated birth partner permitted during delivery and immediate recovery.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-emergency-600" />
                  <span>Ward Conduct &amp; Safety</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>• Please maintain a calm, quiet atmosphere to promote healing.</li>
                  <li>• Sanitize hands upon entering and leaving patient care rooms.</li>
                  <li>• Kindly avoid visiting if you are experiencing active respiratory or contagious illness.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Payments & Billing */}
        {activeTab === 'payments' && (
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block mb-2">
                  Billing &amp; Settlement
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Accepted Payment Channels &amp; Insurance</h3>
              </div>
              <EditableNotice
                label="HMO Partnerships"
                field="HMO provider list awaiting hospital management confirmation"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Point of Sale (POS)</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Debit cards (MasterCard, Visa, Verve) are accepted at the front billing cashier for immediate transaction processing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Direct Bank Transfer</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Official corporate bank account details are provided at the billing cashier for electronic fund transfers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">HMO / Corporate Care</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For HMO retainerships and corporate health plans, please confirm authorization with our accounts desk before consultation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reassurance Banner */}
        <div className="p-8 rounded-3xl bg-brand-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Have Questions Before Your Visit?</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our front desk personnel is happy to guide you on clinic schedules and requirements.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteConfig.phoneTel}
              className="px-5 py-2.5 rounded-xl bg-emergency-600 hover:bg-emergency-700 text-white font-bold text-xs sm:text-sm shadow"
            >
              Call: {siteConfig.phone}
            </a>
            <button
              onClick={() => onNavigate('faq')}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20"
            >
              View FAQ
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};


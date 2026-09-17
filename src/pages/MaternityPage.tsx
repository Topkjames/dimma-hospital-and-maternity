import React from 'react';
import {
  Baby,
  Heart,
  ShieldCheck,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  HeartPulse,
  Award,
  Users
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteConfig } from '../config/siteConfig';

interface MaternityPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export const MaternityPage: React.FC<MaternityPageProps> = ({ onNavigate }) => {
  const maternityServices = [
    {
      icon: HeartPulse,
      title: 'Comprehensive Antenatal Care (ANC)',
      desc: "Structured routine clinical check-ups, blood pressure monitoring, foetal heart sound checks, and maternal blood group/genotype evaluations to ensure a healthy pregnancy from early weeks.",
      features: [
        'First-trimester early booking and baseline health profiling',
        'Routine vitals, urine screening, and PCV monitoring',
        'Tetanus toxoid vaccination and malaria prophylaxis',
        'Dietary and maternal nutritional guidance',
      ],
    },
    {
      icon: Baby,
      title: 'Pregnancy & Foetal Monitoring',
      desc: 'Careful surveillance of foetal growth milestones, maternal weight progression, and early identification of gestational factors requiring specialized attention.',
      features: [
        'Foetal heartbeat auscultation & fundal height tracking',
        'Referral scan coordination and report review',
        'Gestational blood sugar and protein surveillance',
        'Early recognition of complications and prompt interventions',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Safe Labor & Delivery Care',
      desc: 'A calm, hygienic, and supportive birthing environment staffed by skilled midwives and attending medical officers prepared for both spontaneous vaginal deliveries and obstetric care.',
      features: [
        '24/7 dedicated labour and delivery ward readiness',
        'Continuous intrapartum foetal and maternal monitoring',
        "Respectful maternity care honoring mother's comfort",
        'Emergency clinical stabilization protocols',
      ],
    },
    {
      icon: Sparkles,
      title: 'Postnatal Support & Recovery (PNC)',
      desc: "Postpartum care dedicated to mother's physical healing, uterine involution, perineal and wound healing, lactation support, and emotional wellness.",
      features: [
        'Immediate postpartum observation and vital checks',
        'Support with initial latching and exclusive breastfeeding',
        'Six-week comprehensive maternal recovery checkup',
        'Counseling on post-delivery family planning',
      ],
    },
    {
      icon: Award,
      title: 'Newborn Care & Neonatal Attention',
      desc: 'Gentle immediate care for your newborn baby, including airway clearance, warmth maintenance, APGAR scoring, umbilical cord hygiene, and early immunization guidance.',
      features: [
        'Immediate skin-to-skin contact facilitation',
        'Newborn physical examination and weight baseline',
        'Sterile umbilical cord stump care counseling',
        'Routine immunization schedule orientation',
      ],
    },
    {
      icon: Users,
      title: 'Mother & Baby Wellness & Family Support',
      desc: 'Engaging fathers, partners, and extended families with practical guidance, addressing postpartum questions, and fostering a loving, stress-free home environment.',
      features: [
        'Partner inclusion in birth preparedness planning',
        'Guidance on identifying maternal postpartum blues or exhaustion',
        'Practical newborn bath and soothing techniques',
        'Direct access to our maternity nurse support line',
      ],
    },
  ];

  const trimesterPathways = [
    {
      trimester: 'First Trimester (Weeks 1 – 12)',
      focus: 'Foundation & Early Screening',
      details: 'Initial booking, baseline blood panel (PCV, genotype, blood group), folic acid supplementation, managing early nausea, and setting up your personalized pregnancy roadmap.',
    },
    {
      trimester: 'Second Trimester (Weeks 13 – 27)',
      focus: 'Growth & Wellbeing',
      details: 'Regular foetal heartbeat checks, maternal weight and blood pressure tracking, anomaly ultrasound review, tetanus immunization, and nutritional counseling.',
    },
    {
      trimester: 'Third Trimester (Weeks 28 – 40+)',
      focus: 'Birth Preparedness & Labor Readiness',
      details: 'Frequent clinical reviews, foetal lie and presentation assessment, labor signs orientation, delivery bag preparation, and 24/7 hospital admission readiness.',
    },
  ];

  return (
    <main id="main-content" className="flex-grow py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* Page Hero Section */}
        <div className="bg-gradient-to-br from-teal-50 via-white to-brand-50 rounded-3xl p-6 sm:p-10 lg:p-14 border border-teal-100 shadow-soft relative overflow-hidden">
          <div className="max-w-3xl space-y-4 sm:space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Baby className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
              <span>Flagship Maternal Care Unit</span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Maternity &amp; Newborn Care at <span className="text-teal-700">DIMMA</span>
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed">
              Every birth is a miracle. At DIMMA Hospital &amp; Maternity, we are honored to walk alongside you from the first moments of pregnancy to the joyful birth of your child, providing compassionate, safe, and dignified medical attention.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('appointment', { service: 'Maternity Services' })}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Heart className="w-4 h-4 shrink-0" />
                <span>Book a Maternity Consultation</span>
              </button>

              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emergency-600 shrink-0" />
                <span>Maternity Desk: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-12 -bottom-12 w-80 lg:w-96 h-80 lg:h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* 6 Key Maternity Care Offerings */}
        <div className="space-y-6 sm:space-y-8">
          <SectionHeading
            badge="Dedicated Maternity Pathways"
            badgeColor="teal"
            title="Complete Care for Mother &amp; Baby"
            subtitle="From preconception planning to postpartum healing, our dedicated maternity wing provides supportive, vigilant care."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {maternityServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-2xl bg-white border border-teal-100/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 sm:pt-6">
                    <button
                      type="button"
                      onClick={() => onNavigate('appointment', { service: item.title })}
                      className="w-full py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 active:bg-teal-200 text-teal-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[38px]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book for {item.title.split(' ')[0]}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trimester-by-Trimester Journey */}
        <div className="bg-slate-50 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/80 space-y-6 sm:space-y-8">
          <SectionHeading
            badge="Your Antenatal Journey"
            title="What to Expect Throughout Your Pregnancy"
            subtitle="A structured overview of regular clinical touchpoints designed for mother's safety and baby's healthy development."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {trimesterPathways.map((tri, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2.5 sm:space-y-3">
                <span className="text-[11px] sm:text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 inline-block">
                  Step {idx + 1}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                  {tri.trimester}
                </h3>
                <p className="text-xs font-semibold text-brand-700">
                  {tri.focus}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tri.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hospital Bag / Preparation Checklist Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-soft">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-bold text-emergency-600 uppercase tracking-wider bg-emergency-50 px-3 py-1 rounded-full border border-emergency-200 inline-block">
              Maternity Checklist
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Packing Your Maternity Bag for Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We encourage expectant mothers to prepare their hospital bag around week 34 to 36 of pregnancy. Our nursing staff is available to provide any specific recommendations.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Antenatal card / hospital identification folder</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Comfortable clothing, nursing bras, and sanitary maternity pads</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Newborn baby clothing, warm wraps, caps, and socks</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Baby wipes, diapers, and mild baby toiletries</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-teal-50/70 p-5 sm:p-8 rounded-2xl border border-teal-200/80 space-y-3 sm:space-y-4">
            <h4 className="font-bold text-teal-950 text-sm sm:text-base flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700 shrink-0" />
              <span>24/7 Maternity Emergency Admission</span>
            </h4>
            <p className="text-xs sm:text-sm text-teal-900 leading-relaxed">
              Labor can begin unexpectedly. If you experience regular contractions, vaginal fluid leakage, bleeding, or reduced foetal movements, proceed directly to DIMMA Hospital &amp; Maternity or call our direct emergency line.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emergency-600 hover:bg-emergency-700 text-white font-bold text-xs sm:text-sm shadow"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Emergency Maternity: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-teal-900 text-white text-center space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-3xl font-bold">Start Your Antenatal Care with Confidence</h3>
          <p className="text-teal-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Schedule an introductory maternity consultation with our experienced clinical team in Trans-Ekulu, Enugu.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('appointment', { service: 'Maternity Services' })}
              className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl bg-white text-teal-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-teal-50 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Book Antenatal Appointment</span>
              <ArrowRight className="w-4 h-4 text-teal-700 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

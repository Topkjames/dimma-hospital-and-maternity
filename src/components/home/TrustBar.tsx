import React from 'react';
import { Heart, UserCheck, ShieldCheck, Baby } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Dedicated to clinical attentiveness, empathy, patient comfort, and respect for personal dignity."
    },
    {
      icon: UserCheck,
      title: "Experienced Medical Team",
      description: "Attentive medical officers, midwives, nursing personnel, and consulting physicians."
    },
    {
      icon: ShieldCheck,
      title: "Modern Healthcare Environment",
      description: "Hygienic wards, diagnostic laboratory facilities, and well-stocked pharmacy dispensary."
    },
    {
      icon: Baby,
      title: "Mother & Child Care",
      description: "Structured antenatal clinics, safe labor & delivery support, and pediatric wellness care."
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-brand-700 mb-4 group-hover:scale-105 group-hover:bg-brand-50 group-hover:border-brand-200 transition-all">
                  <Icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


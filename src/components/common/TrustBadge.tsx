import React from 'react';
import { ShieldCheck, Heart, UserCheck, Stethoscope, Clock, Baby } from 'lucide-react';

interface TrustBadgeProps {
  icon: 'shield' | 'heart' | 'doctor' | 'stethoscope' | 'clock' | 'baby';
  title: string;
  description: string;
  variant?: 'light' | 'white' | 'blue';
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  icon,
  title,
  description,
  variant = 'white',
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-brand-700" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-emergency-600" />;
      case 'doctor':
        return <UserCheck className="w-6 h-6 text-brand-700" />;
      case 'stethoscope':
        return <Stethoscope className="w-6 h-6 text-brand-700" />;
      case 'clock':
        return <Clock className="w-6 h-6 text-brand-700" />;
      case 'baby':
        return <Baby className="w-6 h-6 text-teal-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-700" />;
    }
  };

  const bgStyles = {
    white: 'bg-white border border-slate-200/80 shadow-soft hover:shadow-card',
    light: 'bg-brand-50/60 border border-brand-100 hover:bg-brand-50',
    blue: 'bg-brand-800 text-white border border-brand-700 hover:bg-brand-900',
  };

  return (
    <div
      className={`p-6 rounded-2xl transition-all duration-300 flex flex-col items-start ${bgStyles[variant]}`}
    >
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 inline-flex items-center justify-center">
        {getIcon()}
      </div>
      <h3 className={`text-lg font-bold mb-1.5 ${variant === 'blue' ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${variant === 'blue' ? 'text-brand-100' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>
  );
};


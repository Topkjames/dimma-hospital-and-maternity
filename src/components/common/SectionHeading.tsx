import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  badgeColor?: 'blue' | 'red' | 'teal';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  badgeColor = 'blue',
  className = '',
}) => {
  const badgeClasses = {
    blue: 'bg-brand-50 text-brand-700 border-brand-200',
    red: 'bg-emergency-50 text-emergency-700 border-emergency-100',
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
  };

  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border mb-3 ${badgeClasses[badgeColor]}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};


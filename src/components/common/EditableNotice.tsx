import React from 'react';
import { Info } from 'lucide-react';

interface EditableNoticeProps {
  label: string;
  field: string;
  className?: string;
}

export const EditableNotice: React.FC<EditableNoticeProps> = ({
  label,
  field,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs font-medium ${className}`}
    >
      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
      <span>
        <strong>{label}:</strong> {field}
      </span>
    </div>
  );
};


import React from 'react';
import { AlignLeft, List, BookOpen } from 'lucide-react';
import { SummaryFormat } from '../types/summary';

interface FormatSelectorProps {
  format: SummaryFormat;
  onChange: (format: SummaryFormat) => void;
}

export function FormatSelector({ format, onChange }: FormatSelectorProps) {
  const formats: { value: SummaryFormat; label: string; icon: React.ReactNode }[] = [
    { value: 'paragraph', label: 'Paragraph', icon: <AlignLeft className="h-4 w-4" /> },
    { value: 'bullets', label: 'Bullet Points', icon: <List className="h-4 w-4" /> },
    { value: 'article', label: 'Article', icon: <BookOpen className="h-4 w-4" /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {formats.map(({ value, label, icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
            format === value
              ? 'border-purple-500 bg-purple-50 text-purple-700'
              : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50/50'
          }`}
        >
          {icon}
          <span className="mt-2 text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}
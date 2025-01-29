import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string | string[];
}

export function FormatCard({ icon, title, description, example }: FormatCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100">
      <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Example:</h4>
        <div className="text-sm text-gray-600">
          {Array.isArray(example) ? (
            <ul className="space-y-1">
              {example.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            example.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-2 last:mb-0">
                {paragraph}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
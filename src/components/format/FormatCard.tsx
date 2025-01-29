import React from 'react';
import { FormatIcon } from './FormatIcon';
import { FormatExample } from './FormatExample';

interface FormatCardProps {
  type: 'paragraph' | 'bullets' | 'article';
  title: string;
  description: string;
  example: string | string[];
}

export function FormatCard({ type, title, description, example }: FormatCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100 overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-indigo-50/0 group-hover:from-purple-50 group-hover:to-indigo-50 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <FormatIcon type={type} />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <FormatExample content={example} />
      </div>
    </div>
  );
}
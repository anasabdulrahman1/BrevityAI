import React, { useState } from 'react';
import { Copy, Check, Quote } from 'lucide-react';
import { SummaryFormat } from '../types/summary';

interface SummaryResultProps {
  summary: string[] | null;
  format: SummaryFormat;
  error: string | null;
}

export function SummaryResult({ summary, format, error }: SummaryResultProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (summary) {
      await navigator.clipboard.writeText(summary.join('\n\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-red-50 rounded-xl border border-red-200 shadow-sm">
        <p className="text-red-600 flex items-center space-x-2">
          <span className="block w-1 h-1 rounded-full bg-red-600" />
          <span>{error}</span>
        </p>
      </div>
    );
  }

  if (!summary) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Quote className="h-5 w-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
          </div>
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
          >
            {copied ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="prose prose-purple max-w-none">
          {format === 'bullets' ? (
            <ul className="space-y-2 list-disc list-inside">
              {summary.map((point, index) => (
                <li key={index} className="text-gray-600">{point}</li>
              ))}
            </ul>
          ) : (
            summary.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { SummaryForm } from '../SummaryForm';
import { SummaryResult } from '../SummaryResult';
import { SummaryFormat, SummaryLength } from '../../types/summary';

interface SummaryProps {
  onSubmit: (url: string, length: SummaryLength, format: SummaryFormat) => Promise<void>;
  isLoading: boolean;
  summary: string[] | null;
  format: SummaryFormat;
  error: string | null;
}

export function Summary({ onSubmit, isLoading, summary, format, error }: SummaryProps) {
  return (
    <section id="summary-section" className="py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
            Generate Your Summary
          </h2>
          <SummaryForm onSubmit={onSubmit} isLoading={isLoading} />
          <SummaryResult summary={summary} format={format} error={error} />
        </div>
      </div>
    </section>
  );
}
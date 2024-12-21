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
    <section id="summary-section" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Generate Your Summary
          </h2>
          <SummaryForm onSubmit={onSubmit} isLoading={isLoading} />
          <SummaryResult summary={summary} format={format} error={error} />
        </div>
      </div>
    </section>
  );
}
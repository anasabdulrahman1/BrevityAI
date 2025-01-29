import React from 'react';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Summary } from './components/sections/Summary';
import { SummaryFormats } from './components/sections/SummaryFormats';
import { Benefits } from './components/sections/Benefits';
import { UsersSection } from './components/sections/UsersSection';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/Footer';
import { summarizeArticle } from './api/summarize';
import { formatSummary } from './utils/formatSummary';
import { SummaryFormat, SummaryLength } from './types/summary';
import './styles/animations.css';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const [summary, setSummary] = React.useState<string[] | null>(null);
  const [format, setFormat] = React.useState<SummaryFormat>('paragraph');
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (url: string, length: SummaryLength, format: SummaryFormat) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await summarizeArticle({ url, length });
      const formattedSummary = formatSummary(result, format);
      setSummary(formattedSummary);
      setFormat(format);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate summary');
      setSummary(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Analytics />
      <Hero />
      <Features />
      <Summary
        onSubmit={handleSubmit}
        isLoading={isLoading}
        summary={summary}
        format={format}
        error={error}
      />
      <SummaryFormats />
      <Benefits />
      <UsersSection />
      <FAQ />
      <Footer />
    </div>
  );
}
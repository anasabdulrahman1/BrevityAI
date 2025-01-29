export type SummaryLength = 'brief' | 'medium' | 'detailed';
export type SummaryFormat = 'paragraph' | 'bullets' | 'article';

export interface SummaryOptions {
  url: string;
  length: SummaryLength;
  format: SummaryFormat;
}

export interface FormattedSummary {
  content: string[];
  format: SummaryFormat;
}
export interface SummaryOptions {
  url: string;
  length: 'brief' | 'medium' | 'detailed';
}

export interface APIResponse {
  summary: string;
  error?: string;
}
import { API_CONFIG } from './config';
import { SummaryOptions, APIResponse } from './types';
import { APIError } from './errors';

export async function summarizeArticle({ url, length }: SummaryOptions): Promise<string> {
  const lengthMap = {
    brief: '2',
    medium: '4',
    detailed: '8'
  };

  try {
    const params = new URLSearchParams({
      url,
      length: lengthMap[length]
    });

    const response = await fetch(
      `${API_CONFIG.baseUrl}/summarize?${params}`,
      { headers: API_CONFIG.headers }
    );

    if (!response.ok) {
      throw new APIError(
        'Failed to summarize article',
        response.status
      );
    }

    const data = await response.json() as APIResponse;
    
    if (data.error) {
      throw new APIError(data.error);
    }

    return data.summary;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      error instanceof Error ? error.message : 'An unexpected error occurred'
    );
  }
}
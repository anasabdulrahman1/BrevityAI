import { SummaryFormat } from '../types/summary';

export function formatSummary(text: string, format: SummaryFormat): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/);

  switch (format) {
    case 'bullets':
      return sentences.map(sentence => sentence.trim());
    case 'article':
      // Group sentences into paragraphs (3 sentences per paragraph)
      return sentences.reduce((paragraphs: string[], sentence, index) => {
        const paragraphIndex = Math.floor(index / 3);
        if (!paragraphs[paragraphIndex]) {
          paragraphs[paragraphIndex] = sentence;
        } else {
          paragraphs[paragraphIndex] += ' ' + sentence;
        }
        return paragraphs;
      }, []);
    default:
      return [text];
  }
}
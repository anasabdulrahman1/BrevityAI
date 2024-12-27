import React from 'react';
import { FormatCard } from '../format/FormatCard';

const formats = [
  {
    type: 'paragraph' as const,
    title: 'Paragraph View',
    description: 'Get a concise, flowing paragraph that captures the main points of the article in a readable format.',
    example: 'The study found that regular exercise significantly improves cognitive function. Participants who exercised showed better memory retention and problem-solving abilities. These findings suggest a strong link between physical activity and brain health.'
  },
  {
    type: 'bullets' as const,
    title: 'Bullet Points',
    description: 'Break down the content into easy-to-scan bullet points for quick reference and better retention.',
    example: [
      'Regular exercise improves cognitive function',
      'Participants showed better memory retention',
      'Physical activity linked to brain health'
    ]
  },
  {
    type: 'article' as const,
    title: 'Article Format',
    description: 'Transform the content into a well-structured article with proper paragraphs and flow.',
    example: 'Recent research has revealed fascinating insights into the connection between exercise and brain function.\n\nThe study demonstrated that regular physical activity leads to measurable improvements in cognitive abilities, particularly in areas of memory and problem-solving.\n\nThese findings provide compelling evidence for the importance of maintaining an active lifestyle for overall brain health.'
  }
];

export function SummaryFormats() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Summarize Your Way
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect format that suits your needs. Whether you prefer concise paragraphs,
            scannable bullet points, or structured articles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {formats.map((format) => (
            <FormatCard key={format.type} {...format} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { AlignLeft, List, BookOpen } from 'lucide-react';
import { FormatCard } from '../FormatCard';

const formats = [
  {
    icon: <AlignLeft className="h-6 w-6" />,
    title: 'Paragraph View',
    description: 'Get a concise, flowing paragraph that captures the main points of the article in a readable format.',
    example: 'The study found that regular exercise significantly improves cognitive function. Participants who exercised showed better memory retention and problem-solving abilities. These findings suggest a strong link between physical activity and brain health.'
  },
  {
    icon: <List className="h-6 w-6" />,
    title: 'Bullet Points',
    description: 'Break down the content into easy-to-scan bullet points for quick reference and better retention.',
    example: [
      '• Regular exercise improves cognitive function',
      '• Participants showed better memory retention',
      '• Physical activity linked to brain health'
    ]
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Article Format',
    description: 'Transform the content into a well-structured article with proper paragraphs and flow.',
    example: 'Recent research has revealed fascinating insights into the connection between exercise and brain function.\n\nThe study demonstrated that regular physical activity leads to measurable improvements in cognitive abilities, particularly in areas of memory and problem-solving.\n\nThese findings provide compelling evidence for the importance of maintaining an active lifestyle for overall brain health.'
  }
];

export function SummaryFormats() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Summarize Your Content in Different Ways
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect format that suits your needs. Whether you prefer concise paragraphs,
            scannable bullet points, or structured articles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formats.map((format, index) => (
            <FormatCard key={index} {...format} />
          ))}
        </div>
      </div>
    </section>
  );
}
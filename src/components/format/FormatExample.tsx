import React from 'react';

interface FormatExampleProps {
  content: string | string[];
}

export function FormatExample({ content }: FormatExampleProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <h4 className="text-sm font-medium text-gray-500 mb-2">Example:</h4>
      <div className="text-sm text-gray-600">
        {Array.isArray(content) ? (
          <ul className="space-y-1">
            {content.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                {point}
              </li>
            ))}
          </ul>
        ) : (
          content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-2 last:mb-0">
              {paragraph}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQIcon } from './FAQIcon';

interface FAQItemProps {
  question: string;
  answer: string;
  iconType: 'accuracy' | 'content' | 'time' | 'customize' | 'limit';
}

export function FAQItem({ question, answer, iconType }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start text-left group bg-white rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-200"
      >
        <div className={`w-10 h-10 rounded-lg ${
          isOpen ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'
        } flex items-center justify-center flex-shrink-0 transition-colors duration-200 mr-4 group-hover:bg-purple-100 group-hover:text-purple-600`}>
          <FAQIcon type={iconType} />
        </div>
        
        <div className="flex-1 pr-8">
          <h3 className={`text-lg font-medium ${
            isOpen ? 'text-purple-600' : 'text-gray-900'
          } group-hover:text-purple-600 transition-colors duration-200`}>
            {question}
          </h3>
        </div>
        
        <div className={`flex-shrink-0 ${
          isOpen ? 'text-purple-600' : 'text-gray-400'
        }`}>
          {isOpen ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 bg-white rounded-xl mt-2 shadow-sm">
          <p className="text-gray-600 leading-relaxed pl-14">{answer}</p>
        </div>
      </div>
    </div>
  );
}
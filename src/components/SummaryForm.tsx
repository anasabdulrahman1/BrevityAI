// import React, { useState } from 'react';
// import { Loader2, Link2, AlignLeft } from 'lucide-react';
// import { FormatSelector } from './FormatSelector';
// import { SummaryLength, SummaryFormat } from '../types/summary';
// import { Plus } from 'lucide-react';


// interface SummaryFormProps {
//   onSubmit: (url: string, length: SummaryLength, format: SummaryFormat) => Promise<void>;
//   isLoading: boolean;
// }

// export function SummaryForm({ onSubmit, isLoading }: SummaryFormProps) {
//   const [url, setUrl] = useState('');
//   const [length, setLength] = useState<SummaryLength>('medium');
//   const [format, setFormat] = useState<SummaryFormat>('paragraph');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(url, length, format);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-8 backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-lg border border-white/20">
//       <div className="space-y-2">
//         <label htmlFor="url" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
//           <Link2 className="h-4 w-4" />
//           <span>Article URL</span>
//         </label>
//         <input
//           type="url"
//           id="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="https://example.com/article"
//           className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-purple-500 transition-colors"
//           required
//         />
//       </div>

//       <div className="space-y-4">
//         <label className="block text-sm font-medium text-gray-700">Summary Format</label>
//         <FormatSelector format={format} onChange={setFormat} />
//       </div>

//       <div className="space-y-2">
//         <label htmlFor="length" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
//           <AlignLeft className="h-4 w-4" />
//           <span>Summary Length</span>
//         </label>
//         <select
//           id="length"
//           value={length}
//           onChange={(e) => setLength(e.target.value as SummaryLength)}
//           className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-purple-500 transition-colors"
//         >
//           <option value="brief">Brief (2-3 sentences)</option>
//           <option value="medium">Medium (4-5 sentences)</option>
//           <option value="detailed">Detailed (7-8 sentences)</option>
//         </select>
        
//       </div>

//       <button
//         type="submit"
//         disabled={isLoading}
//         className="w-full flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
//       >
//         {isLoading ? (
//           <>
//             <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
//             Processing...
//           </>
//         ) : (
//           'Summarize Article'
//         )}
//       </button>
//     </form>
//   );
// }

import React, { useState } from 'react';
import { Loader2, Link2, AlignLeft, Plus, Minus } from 'lucide-react';
import { FormatSelector } from './FormatSelector';
import { SummaryLength, SummaryFormat } from '../types/summary';

interface SummaryFormProps {
  onSubmit: (url: string, length: SummaryLength, format: SummaryFormat) => Promise<void>;
  isLoading: boolean;
}

export function SummaryForm({ onSubmit, isLoading }: SummaryFormProps) {
  const [url, setUrl] = useState('');
  const [length, setLength] = useState<SummaryLength>('medium');
  const [format, setFormat] = useState<SummaryFormat>('paragraph');
  const [isLengthOpen, setIsLengthOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url, length, format);
  };

  const lengthOptions: { value: SummaryLength; label: string }[] = [
    { value: 'brief', label: 'Brief (2-3 sentences)' },
    { value: 'medium', label: 'Medium (4-5 sentences)' },
    { value: 'detailed', label: 'Detailed (7-8 sentences)' },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-8 backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-lg border border-white/20">
      <div className="space-y-2">
        <label htmlFor="url" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <Link2 className="h-4 w-4" />
          <span>Article URL</span>
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/article"
          className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-purple-500 transition-colors"
          required
        />
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Summary Format</label>
        <FormatSelector format={format} onChange={setFormat} />
      </div>

      <div className="space-y-2">
        <label htmlFor="length" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <AlignLeft className="h-4 w-4" />
          <span>Summary Length</span>
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsLengthOpen(!isLengthOpen)}
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-purple-500 transition-colors text-left flex items-center justify-between"
          >
            <span>{lengthOptions.find(option => option.value === length)?.label}</span>
            {isLengthOpen ? (
              <Minus className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </button>
          {isLengthOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-purple-100 rounded-xl shadow-lg">
              {lengthOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setLength(option.value);
                    setIsLengthOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-purple-50 transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
            Processing...
          </>
        ) : (
          'Summarize Article'
        )}
      </button>
    </form>
  );
}


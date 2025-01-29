import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-white/20 blur"></div>
            <div className="relative flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full shadow-xl">
              <Zap className="h-10 w-10 text-white" strokeWidth={2.5} />
              <Sparkles className="h-6 w-6 text-white absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-tight">
            Brevity<span className="text-pink-300">AI</span>
          </h1>
          <p className="text-lg text-white/90 text-center max-w-2xl">
            Transform lengthy articles into crystal-clear summaries with the power of AI
          </p>
        </div>
      </div>
    </header>
  );
}
import React from 'react';
import { Sparkles, Zap, ArrowDown } from 'lucide-react';
import { UserMenu } from '../UserMenu';
import { LogoWithText } from '../logo/LogoWithText';
import { HeroParticles } from '../hero/HeroParticles';

export function Hero() {
  const scrollToSummary = () => {
    document.getElementById('summary-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <HeroParticles />
      
      <div className="absolute top-4 right-4 z-20">
        <UserMenu />
      </div>
      
      <div className="absolute top-4 left-4 z-20">
        <LogoWithText variant="small" />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 rounded-full bg-white/20 blur"></div>
              <div className="relative flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full shadow-xl">
                <Zap className="h-10 w-10 text-white" strokeWidth={2.5} />
                <Sparkles className="h-6 w-6 text-white absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Brevity<span className="text-pink-400">AI</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform complex content into clear, actionable insights in seconds. Our AI-powered 
              summarizer helps you digest research papers, articles, and documents efficiently, 
              letting you focus on what matters most.
            </p>
            <button
              onClick={scrollToSummary}
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Try it now
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
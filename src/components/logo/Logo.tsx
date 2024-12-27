import React from 'react';
import { Zap, Sparkles } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'small';
}

export function Logo({ variant = 'default' }: LogoProps) {
  const sizes = {
    default: {
      container: 'p-4',
      primary: 'h-10 w-10',
      sparkle: 'h-6 w-6'
    },
    small: {
      container: 'p-3',
      primary: 'h-6 w-6',
      sparkle: 'h-4 w-4'
    }
  };

  const size = sizes[variant];

  return (
    <div className="relative inline-block">
      <div className="absolute -inset-1 rounded-full bg-white/20 blur"></div>
      <div className={`relative flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 ${size.container} rounded-full shadow-xl`}>
        <Zap className={`${size.primary} text-white`} strokeWidth={2.5} />
        <Sparkles className={`${size.sparkle} text-white absolute -top-1 -right-1 animate-pulse`} />
      </div>
    </div>
  );
}
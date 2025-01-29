import React from 'react';
import { Logo } from './Logo';

interface LogoWithTextProps {
  variant?: 'default' | 'small';
}

export function LogoWithText({ variant = 'default' }: LogoWithTextProps) {
  const textSizes = {
    default: 'text-4xl md:text-5xl',
    small: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-4">
      <Logo variant={variant} />
      <h1 className={`${textSizes[variant]} font-bold text-white tracking-tight`}>
        Brevity<span className="text-pink-400">AI</span>
      </h1>
    </div>
  );
}
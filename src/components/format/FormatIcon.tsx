import React from 'react';
import { AlignLeft, List, BookOpen } from 'lucide-react';

type IconType = 'paragraph' | 'bullets' | 'article';

interface FormatIconProps {
  type: IconType;
  className?: string;
}

export function FormatIcon({ type, className = "h-6 w-6" }: FormatIconProps) {
  const icons = {
    paragraph: AlignLeft,
    bullets: List,
    article: BookOpen
  };

  const Icon = icons[type];
  return <Icon className={className} />;
}
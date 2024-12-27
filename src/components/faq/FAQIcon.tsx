import React from 'react';
import { 
  Clock, 
  FileText, 
  Zap, 
  Sliders, 
  Infinity 
} from 'lucide-react';

type IconType = 'accuracy' | 'content' | 'time' | 'customize' | 'limit';

interface FAQIconProps {
  type: IconType;
  className?: string;
}

export function FAQIcon({ type, className = "h-5 w-5" }: FAQIconProps) {
  const icons = {
    accuracy: Zap,
    content: FileText,
    time: Clock,
    customize: Sliders,
    limit: Infinity
  };

  const Icon = icons[type];
  return <Icon className={className} />;
}
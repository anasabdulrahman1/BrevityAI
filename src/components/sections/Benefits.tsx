import React from 'react';
import { Clock, Brain, Sparkles, Users } from 'lucide-react';
import { BenefitCard } from '../benefits/BenefitCard';

const benefits = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Save Time',
    description: 'Grasp key points in seconds, allowing you to process more content efficiently.'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Work Smarter',
    description: 'Focus on what truly matters by getting straight to the core concepts.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Boost Comprehension',
    description: 'Customize summaries to match your learning style and needs.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Versatile Use',
    description: 'Perfect for students, professionals, researchers, and avid readers alike.'
  }
];

export function Benefits() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-white to-purple-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            BrevityAI - Summarize Smarter, Comprehend Faster
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-12">
            Supercharge your productivity with BrevityAI, your go-to article summarizer! This intelligent tool distills the essence of any lengthy text—blogs, research papers, news articles, and beyond—into concise and clear summaries.
          </p>
          <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-100 text-purple-700">
            <span className="text-sm lg:text-base font-medium">Make every minute count—explore more with less effort!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
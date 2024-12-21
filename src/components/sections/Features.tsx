import React from 'react';
import { Zap, Clock, Layout, Share2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'AI-Powered',
    description: 'Advanced algorithms extract key information from any article'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Save Time',
    description: 'Get the essence of long articles in seconds'
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Multiple Formats',
    description: 'Choose between paragraph, bullet points, or article format'
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: 'Easy Sharing',
    description: 'Copy and share summaries with one click'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Zap, Clock, Layout } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'AI-Powered Intelligence',
    description: 'Advanced algorithms extract key information from any article with high accuracy and relevance.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Lightning Fast',
    description: 'Get instant summaries in seconds, helping you process more content in less time.'
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Flexible Formats',
    description: 'Choose between paragraph, bullet points, or article format to match your reading style.'
  }
];

export function Features() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-24 text-gray-900">
            Powerful Features
          </h2>
          
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row items-start gap-8 p-10 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
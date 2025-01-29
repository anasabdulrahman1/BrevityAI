import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

const userTypes = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Researchers & Academics',
    description: 'Quickly digest research papers and academic content to accelerate your research process and stay up-to-date with the latest findings.'
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Students & Professionals',
    description: 'Understand complex study materials and improve learning efficiency with clear summaries. Perfect for busy professionals staying informed on industry trends.'
  }
];

export function UsersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can Use BrevityAI?
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered summarizer helps various professionals and individuals
              save time and improve their understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userTypes.map((type, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative p-8 bg-white group-hover:bg-opacity-0 transition-colors duration-300 rounded-2xl border border-purple-100 h-full">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {type.description}
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
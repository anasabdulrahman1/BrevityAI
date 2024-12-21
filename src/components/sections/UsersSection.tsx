import React from 'react';
import { BookOpen, GraduationCap, Briefcase, Newspaper } from 'lucide-react';

const userTypes = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Researchers',
    description: 'Quickly digest research papers and academic content to accelerate your research process.'
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Students',
    description: 'Understand complex study materials and improve learning efficiency with clear summaries.'
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Professionals',
    description: 'Stay informed on industry trends and extract key insights from business documents.'
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: 'Journalists',
    description: 'Research topics quickly and gather essential information from multiple sources.'
  }
];

export function UsersSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who Can Use BrevityAI?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered summarizer is designed to help various professionals and individuals
            save time and improve their understanding of complex content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {userTypes.map((type, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
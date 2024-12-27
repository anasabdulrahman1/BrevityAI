import React from 'react';
import { FAQItem } from '../faq/FAQItem';

const faqs = [
  {
    iconType: 'accuracy' as const,
    question: "How accurate are BrevityAI's summaries?",
    answer: "BrevityAI uses advanced AI algorithms to generate highly accurate summaries. Our system maintains the core message and key points of the original content while condensing it into a more digestible format."
  },
  {
    iconType: 'content' as const,
    question: "What types of content can I summarize?",
    answer: "You can summarize various types of content including news articles, research papers, blog posts, and long-form content. The system works best with well-structured text in English."
  },
  {
    iconType: 'time' as const,
    question: "How long does it take to generate a summary?",
    answer: "Most summaries are generated within seconds. However, the exact time may vary depending on the length and complexity of the original content."
  },
  {
    iconType: 'customize' as const,
    question: "Can I customize the length of the summary?",
    answer: "Yes! You can choose between brief (2-3 sentences), medium (4-5 sentences), or detailed (7-8 sentences) summaries to match your needs."
  },
  {
    iconType: 'limit' as const,
    question: "Is there a limit to how many articles I can summarize?",
    answer: "Free users can summarize up to 5 articles per day. Premium users get unlimited summaries and additional features."
  }
];

export function FAQ() {
  return (
    <section className="py-32 bg-gradient-to-br from-white to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
              Got Questions?
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about BrevityAI
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
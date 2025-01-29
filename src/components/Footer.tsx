import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { NewsletterForm } from './footer/NewsletterForm';
import { LogoWithText } from './logo/LogoWithText';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <LogoWithText variant="small" />
            <p className="text-gray-300">
              Transform complex content into clear, actionable insights with AI-powered summarization.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <a 
                href="mailto:contact@brevityai.com" 
                className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                contact@brevityai.com
              </a>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
              <NewsletterForm />
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BrevityAI. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
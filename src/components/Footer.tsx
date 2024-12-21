import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">BrevityAI</h3>
            <p className="text-gray-600">
              Transform complex content into clear, actionable insights with AI-powered summarization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact</h4>
            <a 
              href="mailto:contact@brevityai.com" 
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              contact@brevityai.com
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Subscribe to Newsletter</h4>
            <form className="flex flex-col md:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="border border-gray-300 rounded-md p-2 mb-2 md:mb-0 md:mr-2"
                required
              />
              <button 
                type="submit" 
                className="bg-purple-600 text-white rounded-md p-2 hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} BrevityAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
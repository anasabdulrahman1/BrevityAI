import React, { useState } from 'react';
import { User, HelpCircle, Mail, LogIn, UserPlus } from 'lucide-react';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <User className="h-5 w-5 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-lg py-2 z-50 animate-fade-in-up">
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Sign Up
          </a>
          <hr className="my-2 border-gray-100 dark:border-gray-700" />
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help Center
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">
            <Mail className="h-4 w-4 mr-2" />
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}
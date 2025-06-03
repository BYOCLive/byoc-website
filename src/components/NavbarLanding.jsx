import React, { useState, useEffect } from 'react';
import UrgencySection from './LimitedTime';

// Navigation Component
export default function Navbar({ currentPage, onPageChange })  {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <UrgencySection />
      {/* <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-white font-bold text-xl">BYOC</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => onPageChange('home')}
            className={`${currentPage === 'home' ? 'text-purple-400' : 'text-gray-300 hover:text-white'} transition-colors`}
          >
            Home
          </button>
          <button 
            onClick={() => onPageChange('landing')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div> */}
    </nav>
  );
};


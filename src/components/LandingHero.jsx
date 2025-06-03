// Hero Section for Landing Page
import React, { useState, useEffect } from 'react';

export default function LandingHero  ()  {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-900 bg-grid-pattern relative ">
      <div className="max-w-4xl mt-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            BYOC Token
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Introductory Offer
        </h2>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-2xl md:text-3xl py-4 px-8 rounded-full mb-8 inline-block">
          ₹1 = 10 BYOC Tokens
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the future of digital commerce with BYOC tokens. Limited time introductory pricing - 
          secure your position in India's next-generation payment ecosystem.
        </p>
        
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-purple-400 text-3xl mb-3">🚀</div>
            <h3 className="text-white font-bold mb-2">Early Access</h3>
            <p className="text-gray-300 text-sm">Be among the first to own BYOC tokens at launch price</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-teal-400 text-3xl mb-3">💎</div>
            <h3 className="text-white font-bold mb-2">Premium Value</h3>
            <p className="text-gray-300 text-sm">Maximum tokens for minimum investment</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="text-pink-400 text-3xl mb-3">🎯</div>
            <h3 className="text-white font-bold mb-2">Future Ready</h3>
            <p className="text-gray-300 text-sm">Built for India's digital economy transformation</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </div>
  );
};
import React, { useState, useEffect } from 'react';

// Enhanced Urgency Section Component
export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;

      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClaimNow = () => {
    const purchaseFormElement = document.getElementById('purchaseForm');
    if (purchaseFormElement) {
      purchaseFormElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 py-3">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Moving particles */}
      <div className="absolute inset-0">
        <div className="absolute top-2 left-10 w-2 h-2 bg-white rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-80" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-70" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {/* Alert section */}
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
            <div className="relative">
              <svg className="w-4 h-4 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <span className="font-bold text-white text-sm tracking-wide">LIMITED TIME OFFER!</span>
          </div>

          {/* Timer section */}
          <div className="flex items-center gap-3">
            <span className="text-white/90 font-medium text-sm">Ends in:</span>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <div className="font-mono text-lg font-bold text-white tracking-wider bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {timeLeft}
              </div>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClaimNow}
            className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm">
            <span className="relative z-10">Claim Now</span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
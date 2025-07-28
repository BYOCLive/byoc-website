import React from "react";

export default function HeroSection() {
  const handleScroll = () => {
    const el = document.getElementById("purchaseForm");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-900 bg-grid-pattern relative overflow-hidden">
      {/* AI Floating Elements */}
      

      <div className="max-w-4xl mt-24 w-full relative z-10">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-purple-300 font-medium text-sm">Powered by Advanced AI</span>
        </div>

        <h1 className="text-5xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            5+ Premium AI Tools for Just ₹200
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Everything you need to automate your work and boost productivity.
        </h2>

        {/* AI Tools Preview Grid */}
        

        <button
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all mb-10 transform hover:scale-105"
          onClick={handleScroll}
        >
          <span className="flex items-center gap-2">
            Get Access To Tools Today
          </span>
        </button>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12 15v2m-6 0v2m3-7V8a3 3 0 116 0v2M5 11h10a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 011-1z"/>
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
            <span>10M+ Users</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Background Effects */}
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-0 left-0 h-48 w-48 bg-teal-400 rounded-full blur-3xl opacity-10" />
      <div className="absolute top-1/2 right-1/4 h-32 w-32 bg-pink-500 rounded-full blur-2xl opacity-15" />
    </section>
  );
}

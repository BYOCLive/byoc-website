import React, { useState } from "react";

// Tokenomics Section Component
const TokenomicsSection = () => {
    return (
      <section className="py-20 px-4 bg-gray-900 bg-grid-pattern">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Tokenomics</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The economics and distribution of the BYOC token ecosystem
            </p>
          </div>
  
          {/* Token Stats */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm mb-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {/* Token Name */}
              <div className="flex flex-col items-center text-center p-4 w-full md:w-64">
                <div className="bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Token Name</h3>
                <p className="text-gray-300">BYOC – Build Your Own Content</p>
              </div>
  
              {/* Total Supply */}
              <div className="flex flex-col items-center text-center p-4 w-full md:w-64">
                <div className="bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1v22"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Total Supply</h3>
                <p className="text-gray-300">40 million tokens</p>
              </div>
  
              {/* Value per Token */}
              <div className="flex flex-col items-center text-center p-4 w-full md:w-64">
                <div className="bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Value per Token</h3>
                <p className="text-gray-300">$0.01 (approx)</p>
              </div>
            </div>
          </div>
  
          {/* Token Details */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Blockchain */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm flex flex-col w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]">
              <div className="bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Blockchain</h3>
              <p className="text-gray-300">Solana infrastructure</p>
            </div>
  
            {/* Transaction Fee */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm flex flex-col w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]">
              <div className="bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transaction Fee</h3>
              <p className="text-gray-300">1% per transaction</p>
            </div>
  
            {/* Minting Authority */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm flex flex-col w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]">
              <div className="bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Minting Authority</h3>
              <p className="text-gray-300">Future minting allowed, no hard cap</p>
            </div>
  
            {/* Vesting Period */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm flex flex-col w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]">
              <div className="bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Vesting Period</h3>
              <p className="text-gray-300">1 year</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default TokenomicsSection;
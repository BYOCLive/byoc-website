import React, { useState } from "react";

// Ecosystem Section Component
const EcosystemSection = () => {
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => {
    setActivePopup(null);
  };

  const popupContent = {
    agentic: {
      title: "Agentic AI Applications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9"></path>
          <path d="M12 2a9 9 0 0 0-9 9"></path>
          <path d="M12 18a9 9 0 0 1 4.5-7.8"></path>
          <path d="M12 18a9 9 0 0 0-4.5-7.8"></path>
          <circle cx="12" cy="12" r="1"></circle>
        </svg>
      ),
      content: `Deployed across 10 sectors through a $10M American partnership:

● Healthcare: Voice-based EMR updates, reducing admin burden
● Hospitality: Hotel task updates via voice for faster service
● Legal: Dictation of legal notes, briefs directly to software
● Real Estate: CRM integration via voice updates
● Education: Record and transcribe school meeting notes
● Retail: Voice-driven inventory updates and feedback
● Financial Services: Banking/insurance claim transcription
● Logistics: Delivery status via voice commands
● Manufacturing: Voice-updated production and maintenance logs`
    },
    community: {
      title: "Community App",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      content: `A commerce platform using BYOC tokens for seamless QR, image, and NFC-based transactions, it enables peer-to-peer (P2P) and business-to-peer (B2P) trades. Users can buy/sell content (NFTs, comics, blogs) and participate in auctions. Merchants accept tokens, and token growth is stimulated by:

● Payments (1% fee adds to token utility)
● Minting (supports ecosystem scale and transaction verification)
● Gaming (Gamezop partnership with 500+ NFT-enabled games)
● Community subscriptions (for B2B customer outreach)`
    },
    voiceai: {
      title: "VoAI – Voice AI Engine",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      ),
      content: `A highly advanced voice AI system with:

● Automatic Speech Recognition (ASR): Converts speech to machine-readable text
● Noise Filter Tech: Removes background disturbances
● Neural Networks: Analyzes voice data using pattern recognition
● NLP Engine: Understands user sentiment and context
● Response Evaluation: Chooses most relevant replies
● Delivery System: Converts responses to audio and stores logs`
    },
    marketplace: {
      title: "Digital Marketplace",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      content: `Buy, sell, and trade digital assets, services, and knowledge within a secure blockchain environment that rewards quality and authenticity.

Our marketplace enables creators to monetize their work while buyers can discover unique digital content and services with full transparency and security.

Features include:
● NFT minting and trading capabilities
● Smart contract-based transactions
● Creator royalties on secondary sales
● Curated collections and featured artists
● Integration with BYOC token economy`
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">The BYOC</span>{" "}
            <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A complete suite of Web3 products designed to work together, creating a seamless
            experience for users across our ecosystem.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 2 - Community App */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full w-full md:w-[calc(33.333%-16px)]">
            <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">BYOC Community App</h3>
            <p className="text-gray-300 mb-6 flex-grow">
             Digital marketplace for buying, selling and trading Digital assets, services and knowledge within a secure Blockchain environment. A platform that enables P2P trades for digital content.
            </p>
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                <span className="text-teal-400 text-sm">Beta Launch Coming Soon</span>
              </div>
              {/* <button 
                onClick={() => setActivePopup('community')}
                className="inline-flex items-center text-white hover:text-purple-400 transition-colors"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>
          </div>

          

          {/* Card 4 - Digital Marketplace */}
          {/* <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full w-full md:w-[calc(33.333%-16px)]">
            <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">BYOC Digital Marketplace</h3>
            <p className="text-gray-300 mb-6 flex-grow">
              Buy, sell, and trade digital assets, services, and knowledge within a secure blockchain environment 
              that rewards quality and authenticity.
            </p>
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                <span className="text-teal-400 text-sm">In Development</span>
              </div>
              <button 
                onClick={() => setActivePopup('marketplace')}
                className="inline-flex items-center text-white hover:text-teal-400 transition-colors"
              >
                Explore What's Coming
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div> */}
          
          {/* Card 1 - Agentic AI Applications */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full w-full md:w-[calc(33.333%-16px)]">
            <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a9 9 0 0 1 9 9"></path>
                <path d="M12 2a9 9 0 0 0-9 9"></path>
                <path d="M12 18a9 9 0 0 1 4.5-7.8"></path>
                <path d="M12 18a9 9 0 0 0-4.5-7.8"></path>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Agentic AI Applications</h3>
            <p className="text-gray-300 mb-6 flex-grow">
              Deployed across 10 key sectors through a $10M American strategic partnership, our advanced AI applications significantly reduce administrative burden and improve operational efficiency across industries.
            </p>
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                <span className="text-teal-400 text-sm">In Development</span>
              </div>
              {/* <button 
                onClick={() => setActivePopup('agentic')}
                className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Card 3 - VoAI – Voice AI Engine */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full w-full md:w-[calc(33.333%-16px)]">
            <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">VoAI – Voice AI Engine</h3>
            <p className="text-gray-300 mb-6 flex-grow">
             A highly advanced voice AI system equipped with ASR, intelligent noise filtering, deep neural networks, and robust NLP capabilities for seamless and natural voice interaction across platforms.
            </p>
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                <span className="text-teal-400 text-sm">In Development</span>
              </div>
              {/* <button 
                onClick={() => setActivePopup('voiceai')}
                className="inline-flex items-center text-white hover:text-teal-400 transition-colors"
              >
                Discover Features
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button> */}
            </div>
          </div>
          
        </div>
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col">

            {/* Close button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fixed Header */}
            <div className="flex items-center gap-4 p-6 border-b border-gray-700">
              <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700">
                {popupContent[activePopup].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {popupContent[activePopup].title}
              </h3>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 pt-4 border-t border-gray-800 max-h-[calc(90vh-96px)]">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 whitespace-pre-line">
                  {popupContent[activePopup].content}
                </p>
              </div>
            </div>

            {/* Bottom Decoration OUTSIDE scrollable area */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 z-10" />
          </div>
        </div>
      )}
    </section>
  );
};

export default EcosystemSection;
import { useState } from 'react';
import { WaitlistPopupForm } from './WaitlistPopupForm';

// Join the BYOC Genesis Section Component
const JoinSection = () => {
  const [showWaitlistPopup, setShowWaitlistPopup] = useState(false);
  
  return (
    <section className="py-20 px-4 bg-gray-900 bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Card Container */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-3xl p-8 md:p-12 ">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Join the BYOC Genesis
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Be among the first to experience the future of Web3 communities. Early 
              adopters gain exclusive benefits, token allocations, and founding member 
              status.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* For Early Adopters */}
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                For Early Adopters
              </h3>
              <p className="text-gray-300 mb-8">
                Students, creators, and freelancers looking to learn, 
                connect, and earn in a new digital economy.
              </p>
              <button 
                onClick={() => setShowWaitlistPopup(true)}
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium"
              >
                Join Waitlist
              </button>
            </div>

            {/* For Investors */}
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                For Investors
              </h3>
              <p className="text-gray-300 mb-8">
                VCs, digital token enthusiasts, and strategic partners 
                interested in the future of AI + blockchain.
              </p>
              <a 
                href="mailto:investors@byoc.com" 
                className="w-full py-3 px-6 bg-transparent border border-blue-500 hover:bg-blue-500/10 transition-colors rounded-lg text-blue-400 font-medium flex items-center justify-center"
              >
                Connect With Us <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-400">
              By joining, you'll be the first to receive updates on our launch, token events, and exclusive community access.
            </p>
          </div>
        </div>
      </div>
        
      {/* Import and use the WaitlistPopupForm component */}
      <WaitlistPopupForm 
        isOpen={showWaitlistPopup} 
        onClose={() => setShowWaitlistPopup(false)} 
      />
    </section>
  );
};

export default JoinSection;
// Token Utility Popup Overlay Component
import { useState } from 'react';

const TokenUtilitySection = () => {
  // State to track which popup is active (null means no popup is showing)
  const [activePopup, setActivePopup] = useState(null);

  // Detailed content for each feature box
  const popupContent = {
    creation: {
      title: "Transactions with Online and Offline Merchants",
      content: `The BYOC community app will enable seamless transactions between customers and both online and offline merchants using the BYOC crypto token. Customers can make purchases by capturing images, scanning QR codes, or tapping their phone. This facilitates peer-to-peer transactions as well. The app is designed to be the primary platform for these BYOC token payments, supporting increased transaction volume.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    platform: {
      title: "E-commerce Vision and Mainstream Crypto Payments",
      content: `The ultimate aim of the BYOC community app is to become India's leading cryptocurrency platform, particularly appealing to Gen Z and Gen Beta users Achieving this will enable collaboration with governmental bodies to mainstream crypto payments, positioning BYOC tokens as a prevalent payment method like UPI. The goal is to have millions of users utilising BYOC tokens for transactions across online and offline merchants, playing a significant role in India's next-generation payment systems and the transition towards a cryptocurrency-driven economy.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    staking: {
      title: "Marketplace Utility for Content Monetisation",
      content: `Within the BYOC community app, there will be a marketplace where users can upload and monetise digital content such as comics, blogs, and NFTs. The platform will also feature an auction mode to potentially increase demand for these offerings. This provides creators with a direct way to earn using BYOC tokens.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4"></path>
          <path d="M12 18v4"></path>
          <path d="M4.93 4.93l2.83 2.83"></path>
          <path d="M16.24 16.24l2.83 2.83"></path>
          <path d="M2 12h4"></path>
          <path d="M18 12h4"></path>
          <path d="M4.93 19.07l2.83-2.83"></path>
          <path d="M16.24 7.76l2.83-2.83"></path>
        </svg>
      )
    },
    governance: {
      title: "Transaction Fee Mechanism",
      content: ` A 1% transaction fee will be applied to every purchase made online and offline (with merchants) using BYOC Tokens. This mechanism is designed to expand the company's token pool and increase its stake within the ecosystem.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      )
    },
    security: {
      title: "Token Minting and Network Participation",
      content: `Users will be able to participate in mining new BYOC tokens within the community app. This process is described as enhancing transaction verification, strengthening the blockchain, and driving network activity, ultimately boosting BYOC's adoption and ecosystem growth. While the total token supply is initially set at 100 million, the minting authority will allow future minting with no cap on the number of tokens.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    rewards: {
      title: "Gaming Integration through Gamezop Partnership",
      content: `BYOC has partnered with Gamezop, providing users access to over 500 games. This integration enables users to trade, earn, and cash out in-game assets within a decentralised ecosystem using BYOC tokens, enhancing their gaming experience.
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    benefits: {
      title: "Acquisition and Trading of BYOC Tokens",
      content: ` The community app will enable B2P (Business-to-Person) transactions, allowing users to acquire BYOC tokens directly within the app. Furthermore, users will be able to trade their BYOC tokens on external platforms, fostering a decentralised digital economy. There are also plans to register and launch BYOC on major exchanges like Binance or WazirX to initiate trading.	
`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
  };

  // Function to open a popup
  const openPopup = (popupKey) => {
    setActivePopup(popupKey);
    // Prevent body scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the popup
  const closePopup = () => {
    setActivePopup(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 px-4 bg-gray-900 bg-grid-pattern relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            BYOC Token Utility
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            More than just a cryptocurrency – BYOC coin powers our entire ecosystem with real-world applications and value.
          </p>
        </div>
          
        {/* Token Icon */}
        <div className="flex justify-center mb-12">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-30 blur-md"></div>
            <div className="relative w-full h-full rounded-full border-2 border-teal-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="7"></circle>
                <circle cx="16" cy="16" r="7"></circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Key Token Features Heading */}
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Token Features</h3>

        {/* Features in Single Column */}
        <div className="relative space-y-6">
          {/* Timeline Line (vertical line) */}
          <div className="absolute left-4 top-0 bottom-0 bg-gradient-to-b from-purple-600 via-teal-400 to-pink-500 w-[1px]"></div>

          <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-0 left-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-15" />

          {/* Feature 1 */}
          <div className="relative">
            {/* Timeline Dot - Purple */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-purple-600 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('creation')}
            >
              <h4 className="text-lg font-bold text-white mb-2">Transactions with Online and Offline Merchants</h4>
              <p className="text-gray-300">
              The BYOC community app empowers seamless crypto payments with BYOC tokens across online, offline, and peer-to-peer transactions via image capture, QR scans, or phone taps.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative">
            {/* Timeline Dot - Teal */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-teal-400 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('platform')}
            >
              <h4 className="text-lg font-bold text-white mb-2">E-commerce Vision and Mainstream Crypto Payments</h4>
              <p className="text-gray-300">
              The BYOC app aims to lead India's crypto revolution by becoming the go-to payment platform for Gen Z and Gen Beta, driving mainstream adoption like UPI and powering the nation's transition to a crypto-driven economy.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="relative">
            {/* Timeline Dot - Pink */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-pink-500 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('staking')}
            >
              <h4 className="text-lg font-bold text-white mb-2">Marketplace Utility for Content Monetisation</h4>
              <p className="text-gray-300">
              The BYOC app features a creator-driven marketplace where users can monetize digital content and NFTs—enhanced by an auction mode—earning directly through BYOC tokens.
              </p>
            </div>
          </div>
        
          {/* Feature 4 */}
          <div className="relative">
            {/* Timeline Dot - Purple */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-purple-600 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('governance')}
            >
              <h4 className="text-lg font-bold text-white mb-2">Transaction Fee Mechanism</h4>
              <p className="text-gray-300">
              A 1% transaction fee on BYOC token purchases helps grow the token pool and strengthen the ecosystem's value and sustainability.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="relative">
            {/* Timeline Dot - Teal */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-teal-400 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('security')}
            >
              <h4 className="text-lg font-bold text-white mb-2">Token Minting and Network Participation</h4>
              <p className="text-gray-300">
              Users can mine new BYOC tokens in-app, boosting blockchain security, network activity, and ecosystem growth, with future minting enabled beyond the initial 100 million supply.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="relative">
            {/* Timeline Dot - Purple */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-purple-500 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('rewards')}
            >
              <h4 className="text-lg font-bold text-white mb-2">Gaming Integration through Gamezop Partnership</h4>
              <p className="text-gray-300">
              Through its Gamezop partnership, BYOC offers access to 500+ games where users can trade, earn, and cash out in-game assets using BYOC tokens in a decentralized gaming ecosystem.
              </p>
            </div>
          </div>
          
          {/* Feature 7 */}
          <div className="relative">
            {/* Timeline Dot - Pink */}
            <div className="absolute left-4 top-6 w-3 h-3 rounded-full bg-pink-500 -ml-1.5"></div>
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ml-10 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('benefits')}
            >
              <h4 className="text-lg font-bold text-white mb-2">Acquisition and Trading of BYOC Tokens</h4>
              <p className="text-gray-300">
              The BYOC app supports B2P transactions and token acquisition, with plans for exchange listings to enable trading and power a decentralized digital economy.
              </p>
            </div>
          </div>

          {/* Read Full Tokenomics Link */}
          <div className="pt-6 ml-10">
            <a href="#tokenomics" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              Read Full Tokenomics
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

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

export default TokenUtilitySection;
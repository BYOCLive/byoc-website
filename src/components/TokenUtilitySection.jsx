// Token Utility Popup Overlay Component
import { useState } from 'react';

const TokenUtilitySection = () => {
  // State to track which popup is active (null means no popup is showing)
  const [activePopup, setActivePopup] = useState(null);

  // Detailed content for each feature box
  const popupContent = {
    creation: {
      title: "Creation & Distribution",
      content: `BYOC tokens are created with a fixed total supply of 100 million tokens. The distribution follows a carefully designed allocation:

• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision
• 40% reserved for ecosystem participants and early adopters
• 25% allocated to the development team (vested over 4 years)
• 20% for the community treasury to fund future initiatives
• 10% for marketing and partnerships
• 5% for liquidity provision

This balanced distribution ensures long-term sustainability while rewarding early supporters of the BYOC ecosystem.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    platform: {
      title: "Platform Integration",
      content: `BYOC tokens serve as the foundation of our entire ecosystem, powering multiple features:

• Pay for services and products within the BYOC marketplace
• Receive rewards for positive contributions
• Access premium features and content
• Participate in exclusive events and opportunities
• Enjoy reduced fees when using BYOC for transactions

The seamless integration across all products creates a cohesive experience while providing real utility for token holders.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    staking: {
      title: "Staking & Rewards",
      content: `The BYOC staking program offers multiple benefits to encourage long-term holding:

• Base APY of 8-12% when staking for 30+ days
• Tiered rewards based on staking duration (30, 90, 180, 365 days)
• Bonus multipliers for larger stake amounts
• Weekly reward distributions paid directly to your wallet
• Early unstaking available with reduced rewards

Additionally, staked tokens grant voting power proportional to the amount and duration of your stake, giving long-term holders more influence in governance decisions.`,
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
      title: "Community Governance",
      content: `BYOC employs a decentralized governance model where token holders have direct influence:

• Submit proposals for platform improvements
• Vote on feature prioritization and development roadmap
• Participate in treasury fund allocation decisions
• Help shape community guidelines and moderation policies
• Influence tokenomics adjustments and ecosystem parameters

Our governance portal makes participation simple with an intuitive interface for proposal submission and voting. Each BYOC token represents one vote, with the option to delegate voting power to trusted community representatives.`,
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
      title: "Secure Transactions",
      content: `Security is at the core of BYOC token design:

• Built on industry-leading blockchain infrastructure
• Smart contract audited by multiple independent security firms
• Multi-signature requirements for treasury operations
• Transparent transaction verification and traceability
• Anti-fraud mechanisms to prevent market manipulation

All marketplace transactions using BYOC are recorded on the blockchain, providing immutable proof of ownership and transaction history. Our security team continuously monitors for potential vulnerabilities and implements upgrades as needed.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    rewards: {
      title: "Reward Mechanism",
      content: `The BYOC reward system incentivizes positive contributions through:

• Content creation rewards based on community engagement
• Curation rewards for identifying valuable content
• Bounty programs for technical contributions and bug reports
• Ambassador rewards for growing the community
• Referral bonuses for bringing new users to the platform

Rewards are distributed automatically through smart contracts, ensuring fairness and transparency. The reward algorithm considers multiple factors including quality, uniqueness, and impact of contributions to prevent gaming of the system.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      )
    },
    benefits: {
      title: "Staking Benefits",
      content: `Staking BYOC tokens unlocks a range of exclusive benefits:

• Reduced platform fees (up to 50% discount)
• Priority access to new features and products
• Enhanced visibility for your content and offerings
• Exclusive access to premium content libraries
• Participation in VIP events and networking opportunities
• Higher voting power in governance decisions

The benefits scale with your staking tier, with longer staking periods and larger amounts qualifying for premium tiers. Our staking dashboard makes it easy to track your benefits and rewards in real-time.`,
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
      <div className="max-w-6xl mx-auto">
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
        <h3 className="text-2xl font-bold text-white mb-8 ml-4 md:ml-0">Key Token Features</h3>

        {/* Features Grid with Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Timeline Line (visible on md screens and above) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 bg-gradient-to-b from-purple-600 via-teal-400 to-pink-500 w-[1px]"></div>

          {/* Left Column Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="relative">
              {/* Timeline Dot - Purple */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-purple-600 -ml-1.5 hidden md:block"></div>
              <div 
                className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8 cursor-pointer hover:bg-gray-800/20 transition-colors"
                onClick={() => openPopup('creation')}
              >
                <h4 className="text-lg font-bold text-white mb-2">Creation & Distribution</h4>
                <p className="text-gray-300">
                  BYOC tokens are created with fixed supply distribution across ecosystem participants, development, and community treasury.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative">
              {/* Timeline Dot - Teal */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-teal-400 -ml-1.5 hidden md:block"></div>
              <div 
                className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8 cursor-pointer hover:bg-gray-800/20 transition-colors"
                onClick={() => openPopup('platform')}
              >
                <h4 className="text-lg font-bold text-white mb-2">Platform Integration</h4>
                <p className="text-gray-300">
                  Tokens integrate across all BYOC products, enabling transactions, rewards, governance, and premium feature access.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
            <div className="absolute top-0 left-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-15" />
            
            {/* Feature 3 */}
            <div className="relative">
              {/* Timeline Dot - Pink */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-pink-500 -ml-1.5 hidden md:block"></div>
              <div 
                className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8 cursor-pointer hover:bg-gray-800/20 transition-colors"
                onClick={() => openPopup('staking')}
              >
                <h4 className="text-lg font-bold text-white mb-2">Staking & Rewards</h4>
                <p className="text-gray-300">
                  Stake tokens to earn passive income, unlock platform benefits, and participate in exclusive opportunities.
                </p>
              </div>
            </div>
          
            {/* Feature 4 */}
            <div className="relative">
              {/* Timeline Dot - Purple */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-purple-600 -ml-1.5 hidden md:block"></div>
              <div 
                className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8 cursor-pointer hover:bg-gray-800/20 transition-colors"
                onClick={() => openPopup('governance')}
              >
                <h4 className="text-lg font-bold text-white mb-2">Community Governance</h4>
                <p className="text-gray-300">
                  Token holders vote on platform improvements, feature prioritization, and ecosystem evolution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Features */}
          <div className="space-y-6">
            {/* Feature 5 */}
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('security')}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">Secure Transactions</h4>
              </div>
              <p className="text-gray-300">
                BYOC token ensures all marketplace transactions are secure, transparent, and verifiable.
              </p>
            </div>

            {/* Feature 6 */}
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('rewards')}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">Reward Mechanism</h4>
              </div>
              <p className="text-gray-300">
                Earn tokens for quality content, valuable contributions, and positive community engagement.
              </p>
            </div>
            
            {/* Feature 7 */}
            <div 
              className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 cursor-pointer hover:bg-gray-800/20 transition-colors"
              onClick={() => openPopup('benefits')}
            >
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">Staking Benefits</h4>
              </div>
              <p className="text-gray-300">
                Stake your tokens to access premium features, boost visibility, and earn passive rewards.
              </p>
            </div>

            {/* Read Full Tokenomics Link */}
            <div className="pt-2">
              <a href="#tokenomics" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                Read Full Tokenomics
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    {activePopup && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh]">

          {/* Close button */}
          <button 
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-1rem)] pr-4">
            {/* Header with icon */}
            <div className="flex items-center mb-6">
              <div className="mr-4 p-3 rounded-full bg-gray-800/50 border border-gray-700">
                {popupContent[activePopup].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {popupContent[activePopup].title}
              </h3>
            </div>

            {/* Main Content */}
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
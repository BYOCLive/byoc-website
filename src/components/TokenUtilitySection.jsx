// Token Utility Section Component
const TokenUtilitySection = () => {
    return (
      <section className="py-20 px-4 bg-gray-900  bg-grid-pattern">
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
                <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8">
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
                <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8">
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
                <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8">
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
                <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 md:ml-8 ">
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
              <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ">
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
              <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ">
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
              <div className="bg-gray-800/10 border border-gray-700 rounded-xl p-6 ">
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
        
      </section>
    );
  };
  
  export default TokenUtilitySection;
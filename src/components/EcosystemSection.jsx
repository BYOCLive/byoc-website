// Ecosystem Section Component
const EcosystemSection = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Community App */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full">
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
                A decentralized social platform where creators, learners, and professionals connect, share
                knowledge, and earn rewards through meaningful interactions.
              </p>
              <div className="mt-auto">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                  <span className="text-teal-400 text-sm">Beta Launch Coming Soon</span>
                </div>
                <a href="#early-access" className="inline-flex items-center text-white hover:text-purple-400 transition-colors">
                  Join Early Access
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Card 2 - Digital Marketplace */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full">
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
                <a href="#explore" className="inline-flex items-center text-white hover:text-teal-400 transition-colors">
                  Explore What's Coming
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Card 3 - Trust & Ratings System */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col h-full">
              <div className="bg-gray-700/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Trust & Ratings System</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                Our proprietary verification and reputation system ensures transparency and accountability across all
                platform interactions.
              </p>
              <div className="mt-auto">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                  <span className="text-teal-400 text-sm">Foundation Phase</span>
                </div>
                <a href="#trust-layer" className="inline-flex items-center text-white hover:text-pink-400 transition-colors">
                  Learn About Trust Layer
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
  
  export default EcosystemSection;
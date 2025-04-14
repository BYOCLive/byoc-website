// Roadmap Section Component
const RoadmapSection = () => {
    return (
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our strategic journey from concept to a fully-integrated Web3 ecosystem. Here's 
              what we're building and when.
            </p>
          </div>
  
          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Q2 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 font-medium">Q2 2025</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-400 text-sm">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Beta Launch of Community App
              </h3>
              <p className="text-gray-300">
                Initial release of our Community App with core social features, wallet integration, and basic reward mechanisms.
              </p>
            </div>
  
            {/* Q3 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 font-medium">Q3 2025</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-400 text-sm">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Digital Marketplace Rollout
              </h3>
              <p className="text-gray-300">
                Launch of the BYOC Marketplace with initial categories focused on digital products, services, and knowledge exchange.
              </p>
            </div>
  
            {/* Q4 2025 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 font-medium">Q4 2025</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-400 text-sm">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ratings & Reviews System
              </h3>
              <p className="text-gray-300">
                Implementation of our trust and verification system to ensure quality and transparency across the platform.
              </p>
            </div>
  
            {/* Q1 2026 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 font-medium">Q1 2026</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-400 text-sm">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Premium Monetization Tools
              </h3>
              <p className="text-gray-300">
                Release of advanced monetization features including boosted listings, subscription services, and premium content models.
              </p>
            </div>
  
            {/* Q3 2026 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 font-medium">Q3 2026</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-400 text-sm">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI + Sectoral Expansion
              </h3>
              <p className="text-gray-300">
                Integration of AI tools for content creation, curation, and community management. Expansion into specialized industry sectors.
              </p>
            </div>
  
            {/* Q1 2027 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-300 font-medium">Q1 2027</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-400 text-sm">Upcoming</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Open-source Bilingual LLM
              </h3>
              <p className="text-gray-300">
                Release of our own bilingual language model to power AI features across the ecosystem, with open-source components for community contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RoadmapSection;
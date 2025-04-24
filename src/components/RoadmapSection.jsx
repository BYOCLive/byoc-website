// Roadmap Section Component
const RoadmapSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 flex justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
              Roadmap (2025 & Beyond)
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our strategic journey from concept to a fully-integrated Web3 ecosystem. Here's what we're building and when.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
              Launch 100M BYOC Token Offering (Solana-based)
            </h3>
            <p className="text-gray-300">
              The launch of the 100 million BYOC token offering, based on Solana blockchain, for the expansion of the ecosystem.
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
              Partner with Gamezop for NFT Gaming
            </h3>
            <p className="text-gray-300">
              A strategic partnership with Gamezop for integrating NFT-based gaming experiences into the BYOC ecosystem.
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
              Launch Community Marketplace and BYOC Commerce Marketplace
            </h3>
            <p className="text-gray-300">
              The official launch of both the community marketplace and the commerce marketplace, enabling seamless transactions and user engagement.
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
              Enable Token Minting Inside the App
            </h3>
            <p className="text-gray-300">
              Introduction of token minting features directly inside the app, allowing users to create and manage their own tokens.
            </p>
          </div>

          {/* Q2 2026 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-300 font-medium">Q2 2026</span>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                <span className="text-gray-400 text-sm">Upcoming</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              List BYOC on Binance/WazirX for Public Trading
            </h3>
            <p className="text-gray-300">
              Strategic listing of the BYOC token on major exchanges like Binance and WazirX to facilitate public trading and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

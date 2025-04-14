// Hero Section Component
const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-900 bg-grid-pattern">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Learn. Connect. Earn.
          </span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Welcome to the BYOC Web3 Ecosystem
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          A multi-product AI + blockchain ecosystem designed to empower creators, investors, 
          and communities in the new digital economy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Join Waitlist
          </button>
          <button className="bg-transparent border border-purple-600 text-purple-400 hover:bg-purple-900/30 font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors">
            Explore Ecosystem
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 animate-bounce mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      {/* Background decoration - could be implemented with absolute positioning */}
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </div>
  );
};

export default HeroSection;
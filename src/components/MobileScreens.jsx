// HowItWorksSection Component
const MobileScreens = () => {
    return (
      <div className=" flex flex-col items-center justify-center text-center px-4 bg-gray-900 pt-32 relative">
        <div className="max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Start your journey into the BYOC Ecosystem in three simple steps.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-700/20 transition-all">
              <img
                src="/png/i3.jpg"
                alt="Step 1"
                className="w-[60%] mb-4 object-contain rounded-xl shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Purchase Tokens</h3>
              <p className="text-gray-400 text-base">
                Purchase tokens worth ₹500 and unlock the ecosystem.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-700/20 transition-all">
              <img
                src="/png/i2.jpg"
                alt="Step 2"
                className="w-[60%] mb-4 object-contain rounded-xl shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Sell Tokens at Profit</h3>
              <p className="text-gray-400 text-base">
                Sell your tokens to your friends or the BYOC Network. Earn upto 10–20% per year returns.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-700/20 transition-all">
              <img
                src="/png/i1.jpg"
                alt="Step 3"
                className="w-[60%] mb-4 object-contain rounded-xl shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">Visit Marketplace</h3>
              <p className="text-gray-400 text-base">
              Discover products, services, and exclusive community offerings.
              </p>
            </div>
          </div>
        </div>
        {/* Background decoration - subtle visual harmony with HeroSection */}
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
      </div>
    );
  };
  
  export default MobileScreens;
  
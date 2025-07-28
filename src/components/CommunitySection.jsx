import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Community Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Be Part of a Global Community
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Join a thriving ecosystem that has grown to <span className="text-teal-400 font-bold">10 million users</span> spread across <span className="text-purple-400 font-bold">196 countries</span>
          </p>
          
          {/* Carnegie Mellon Badge */}
            <div className='flex flex-col items-center'>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-300 font-medium">Created by Carnegie Mellon University student</span>
                </div>

                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-full px-6 py-3 mb-12">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-300 font-medium">Notesgen has acquired BYOC expanding its offerings into the financial sector</span>
                </div>
            </div>
          </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-purple-400 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">10M+</div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Users</h3>
            <p className="text-gray-300">Active community members worldwide</p>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-teal-400 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">196</div>
            <h3 className="text-xl font-semibold text-white mb-2">Countries</h3>
            <p className="text-gray-300">Spanning across all continents</p>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center hover:border-pink-400 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-4">15M+</div>
            <h3 className="text-xl font-semibold text-white mb-2">Communities</h3>
            <p className="text-gray-300">Connect with like-minded people</p>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-purple-400 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6">Join Communities</h3>
            <p className="text-lg text-gray-300 mb-6">
              Connect with like-minded people across <span className="text-teal-400 font-semibold">15 million communities</span>. 
              Find your tribe, share experiences, and build meaningful connections in the BYOC ecosystem.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Interest-based communities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-300">Global networking opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-300">Real-time collaboration</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-teal-400 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6">Grow Value</h3>
            <p className="text-lg text-gray-300 mb-6">
              Watch your investment flourish as you engage with the community. 
              The more active you are, the more value you create in the BYOC ecosystem.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Community-driven growth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-300">Engagement-based rewards</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-300">Long-term value creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 h-32 w-32 bg-purple-600 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 h-48 w-48 bg-teal-400 rounded-full blur-3xl opacity-10" />
    </section>
  );
};

export default CommunitySection;

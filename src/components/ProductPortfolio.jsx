// Product Portfolio Section Component
const ProductPortfolioSection = () => {
    return (
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Product Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore the range of innovative products in the BYOC App Store across various sectors like Financial Tech, Education, Collaboration, and more.
            </p>
          </div>
  
          {/* Portfolio Categories */}
          <div className="flex flex-wrap justify-center gap-12">
            {/* Financial Tech */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Financial Tech</h3>
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-bold">PNCASH:</span> NFC-based mobile banking app integrated into Notesgen as NCash</li>
                <li><span className="font-bold">Smart Poster QR Commerce:</span> NFC/QR-enabled outdoor commerce</li>
                <li><span className="font-bold">ImageMap:</span> Scan and shop via product photos</li>
                <li><span className="font-bold">NFC SmartPay:</span> Tap-to-pay in Delhi Metro</li>
              </ul>
            </div>
  
            {/* Education & Learning */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Education & Learning</h3>
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-bold">Content Marketplace:</span> Blockchain-secured educational content</li>
                <li><span className="font-bold">LearnXP:</span> AI-customized learning paths</li>
                <li><span className="font-bold">EdCloud & OprX:</span> 100+ AI tools for educational institutions</li>
              </ul>
            </div>
  
            {/* Collaboration & Productivity */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Productivity</h3>
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-bold">Firestick:</span> B2B platform for unified SaaS tool integration</li>
                <li><span className="font-bold">CHATR:</span> Secure chat for creators with end-to-end encryption</li>
                <li><span className="font-bold">TUTR:</span> Blockchain-based tutor marketplace</li>
                <li><span className="font-bold">MC – Mini Communities:</span> Creator-driven, commission-free service storefronts</li>
              </ul>
            </div>
  
            {/* Commerce & Real Estate */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Commerce & Real Estate</h3>
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-bold">QuickBuy:</span> Social commerce with location-based deals</li>
                <li><span className="font-bold">PropertyTech:</span> Virtual walkthroughs for real estate buyers</li>
              </ul>
            </div>
  
            {/* Healthcare & Accessibility */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Accessibility</h3>
              <ul className="text-gray-300 space-y-2">
                <li><span className="font-bold">Smart Hospital:</span> RFID-powered hospital operation monitoring</li>
                <li><span className="font-bold">VISUALII:</span> AR navigation for visually impaired users</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductPortfolioSection;
  
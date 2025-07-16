
import { useNavigate } from 'react-router-dom';
// Vision & Mission Section Component
const VisionMissionSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 bg-gray-900 bg-grid-pattern relative mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Vision</span>{" "}
            <span className="text-gray-300">&</span>{" "}
            <span className="text-teal-400">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Vision Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col w-full md:w-[calc(50%-16px)]">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="21.17" y1="8" x2="12" y2="8"></line>
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              BYOC aims to drive mass adoption of its token through a commerce-centric community app that integrates gaming, 
              finance, and consumer commerce. The platform intends to position itself as India's next UPI, enabling global 
              B2B collaboration using its proprietary Fire Stick technology.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm flex flex-col w-full md:w-[calc(50%-16px)]">
            <div className="flex items-center mb-6">
              <div className="bg-teal-500/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              To become India's leading consumer-led peer-to-peer AI-driven 
              digital transaction ecosystem that supports real-time, cross-industry applications and contributes to 
              widespread financial inclusion.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default VisionMissionSection;
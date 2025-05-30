import React, { useState, useEffect } from 'react';

const LogoAlternatives = () => {
  const [activeView, setActiveView] = useState('carousel');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Logo data
  const logos = [
    { id: 'logo01', name: 'Apple', color: '#007AFF' },
    { id: 'logo02', name: 'LinkedIn', color: '#0A66C2' },
    { id: 'logo03', name: 'Discord', color: '#5865F2' },
    { id: 'logo04', name: 'NearPay', color: '#00D4AA' },
    { id: 'logo05', name: 'Carnegie Mellon University', color: '#C41E3A' },
    { id: 'logo06', name: 'Government Initiative', color: '#1C4E80' },
    { id: 'logo07', name: 'ByteDance', color: '#FF6B6B' },
    { id: 'logo08', name: 'Career Launcher', color: '#4ECDC4' },
    { id: 'logo09', name: 'Lepton', color: '#45B7D1' },
    { id: 'logo10', name: 'Accenture', color: '#A100FF' },
    { id: 'logo11', name: 'Infibeam', color: '#FF9500' },
    { id: 'logo12', name: 'Adobe', color: '#FF0000' }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (activeView === 'carousel') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(logos.length / 4));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeView, logos.length]);

  const renderCarousel = () => (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(logos.length / 4) }, (_, slideIndex) => (
          <div key={slideIndex} className="min-w-full flex justify-center gap-8">
            {logos.slice(slideIndex * 4, (slideIndex + 1) * 4).map((logo) => (
              <div 
                key={logo.id}
                className="group relative bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:scale-105 transition-all duration-300 w-48 h-32"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div 
                    className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: logo.color }}
                  >
                    {logo.name.charAt(0)}
                  </div>
                  <span className="text-gray-300 text-sm font-medium text-center">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Carousel indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(logos.length / 4) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-purple-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );

  const renderScrollingMarquee = () => (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll space-x-8">
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 group relative bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 w-40 h-24"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src={`/logos/${logo.id}.png`} 
                alt={logo.name}
                className="max-h-12 max-w-24 object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );

  const renderBadgeCloud = () => (
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      {logos.map((logo, index) => (
        <div 
          key={logo.id}
          className="group relative bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-800/60 backdrop-blur-sm border border-purple-400/30 rounded-xl px-6 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animation: 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          <div className="flex items-center justify-center">
            <img 
              src={`/logos/${logo.id}.png`} 
              alt={logo.name}
              className="max-h-8 max-w-20 object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
            />
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );

  const renderHexagonGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {logos.map((logo, index) => (
        <div 
          key={logo.id}
          className="group relative aspect-square"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animation: 'fadeInScale 0.8s ease-out forwards'
          }}
        >
          <div className="hexagon-container relative w-full h-full">
            <div className="hexagon transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl">
              <div className="hexagon-inner flex flex-col items-center justify-center text-center p-4">
                <img 
                  src={`/logos/${logo.id}.png`} 
                  alt={logo.name}
                  className="max-h-12 max-w-16 object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .hexagon-container {
          position: relative;
        }
        .hexagon {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hexagon-inner {
          width: 100%;
          height: 100%;
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );

  const renderTypography = () => (
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
      {logos.map((logo, index) => (
        <div
          key={logo.id}
          className="group hover:scale-110 transition-all duration-300 cursor-default bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animation: 'fadeInUp 0.8s ease-out forwards',
            opacity: 0
          }}
        >
          <img 
            src={`/logos/${logo.id}.png`} 
            alt={logo.name}
            className="max-h-16 max-w-24 object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background decorations */}
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 left-0 h-64 w-64 bg-teal-400 rounded-full blur-3xl opacity-15" />
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Industry HNIs & Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Backed by industry titans and visionary leaders who believe in the future of decentralized payments
          </p>
          
          {/* View Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { key: 'carousel', label: 'Carousel' },
              { key: 'marquee', label: 'Scrolling' },
              { key: 'badges', label: 'Badge Cloud' },
              { key: 'hexagon', label: 'Grid Cards' },
              { key: 'typography', label: 'Logo Grid' }
            ].map((view) => (
              <button
                key={view.key}
                onClick={() => setActiveView(view.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeView === view.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="relative z-10 min-h-[300px] flex items-center justify-center">
          {activeView === 'carousel' && renderCarousel()}
          {activeView === 'marquee' && renderScrollingMarquee()}
          {activeView === 'badges' && renderBadgeCloud()}
          {activeView === 'hexagon' && renderHexagonGrid()}
          {activeView === 'typography' && renderTypography()}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16 relative z-10">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Trusted by leading organizations across technology, finance, and innovation sectors worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoAlternatives;
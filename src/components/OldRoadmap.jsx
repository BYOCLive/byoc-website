import React, { useState, useEffect, useRef } from "react";

// Old Roadmap Section Component
const OldRoadmapSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  const timelineEvents = [
    {
      id: 1,
      year: "2010",
      title: "Launched PNCash",
      description: "Onboarded PNCBank at Fintech Conference in Pittsburgh",
      side: "left",
      color: "blue"
    },
    {
      id: 2,
      year: "2012",
      title: "Launched Notesgen- Digital Notes Marketplace",
      description: "Reached 1Mn users in 1 yr",
      side: "right",
      color: "green"
    },
    {
      id: 3,
      year: "2014",
      title: "Acquired Drawnear Tech, onboarded DMRC",
      description: "Launched Smart Posters Marketplace inside metro stations",
      side: "left",
      color: "orange"
    },
    {
      id: 4,
      year: "2016",
      title: "Reached 5Mn Notesgen users & 100k+ B2B org's",
      description: "Launched NCash - First Edu Digital Currency from India. It crossed 250k+ users in 1 month",
      side: "right",
      color: "teal"
    },
    {
      id: 5,
      year: "2018",
      title: "Launched Blockchain content marketplace",
      description: "Integrated NFC Payment system in UPMC Hospital, USA.",
      side: "left",
      color: "blue"
    },
    {
      id: 6,
      year: "2020",
      title: "Launched FireStick - a Blockchain GLocal platform for 100k+ B2B enterprises",
      description: "Released LearnXP - an AI learning tool specially designed for students to improve learning outcome.",
      side: "right",
      color: "green"
    },
    {
      id: 7,
      year: "2022",
      title: "Launched AI enabled SaaS platform for Schools, Colleges, Coaches Institutes",
      description: "Onboarded FiiTJEE, SlideShare, Byju's, Aakash, Duolingo, etc. as SaaS clients",
      side: "left",
      color: "orange"
    },
    {
      id: 8,
      year: "2024",
      title: "Did Partnership with NINA's AI - American AI firm diversifying our services into AI training and LLM",
      description: "Developed Open Source based LLM for India audience in 5 Indian languages.",
      side: "right",
      color: "purple"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, parseInt(entry.target.dataset.id)]));
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-timeline-item]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colorMap[color] || "from-gray-500 to-gray-600";
  };

  return (
    <section className="py-20 px-4 bg-gray-900 bg-grid-pattern relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From our humble beginnings in 2010 to becoming a leading force in Web3 and AI innovation - 
            explore the milestones that shaped BYOC's evolution over 14 years.
          </p>
          <p className="text-sm text-gray-400 mt-2">2010 - 2024</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-teal-400 to-pink-500 rounded-full"></div>
          
          {/* Mobile Timeline Line - Left aligned */}
          <div className="block lg:hidden absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-600 via-teal-400 to-pink-500 rounded-full"></div>
          
          {/* Timeline Events */}
          <div className="space-y-8 lg:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                data-id={event.id}
                data-timeline-item
                className={`relative flex items-center ${
                  // Desktop: alternating sides, Mobile: all items on right side
                  event.side === 'left' ? 'lg:justify-start justify-start' : 'lg:justify-end justify-start'
                }`}
              >
                {/* Timeline Content */}
                <div
                  className={`w-full ${
                    // Desktop: max-width and padding based on side, Mobile: consistent left alignment
                    `lg:max-w-md max-w-none ${
                      event.side === 'left' 
                        ? 'lg:pr-8 lg:text-right pl-16 text-left' 
                        : 'lg:pl-8 lg:text-left pl-16 text-left'
                    }`
                  }`}
                >
                  <div
                    className={`bg-gray-800/50 border border-gray-700 rounded-xl p-4 lg:p-6 backdrop-blur-sm relative transition-all duration-700 transform ${
                      visibleItems.has(event.id)
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    } hover:bg-gray-800/70 hover:border-gray-600`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(event.color)} opacity-5 rounded-xl`}></div>
                    
                    {/* Year Badge */}
                    <div className={`inline-block px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm font-bold text-white mb-3 lg:mb-4 bg-gradient-to-r ${getColorClasses(event.color)}`}>
                      {event.year}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {event.description}
                    </p>

                    {/* Arrow pointing to timeline - Only on desktop */}
                    <div
                      className={`hidden lg:block absolute top-8 ${
                        event.side === 'left'
                          ? 'right-0 translate-x-1/2'
                          : 'left-0 -translate-x-1/2'
                      } w-4 h-4 bg-gray-800 border-2 border-gray-700 transform rotate-45`}
                    ></div>

                    {/* Mobile Arrow - Always points left to timeline */}
                    <div className="block lg:hidden absolute top-6 left-0 -translate-x-1/2 w-3 h-3 bg-gray-800 border-2 border-gray-700 transform rotate-45"></div>
                  </div>
                </div>

                {/* Timeline Dot - Desktop centered, Mobile left aligned */}
                <div className="absolute lg:left-1/2 left-6 transform lg:-translate-x-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 lg:border-4 border-gray-900 transition-all duration-500 ${
                      visibleItems.has(event.id)
                        ? `bg-gradient-to-r ${getColorClasses(event.color)} scale-110`
                        : 'bg-gray-600 scale-100'
                    }`}
                  >
                    {/* Inner Glow */}
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${getColorClasses(event.color)} opacity-20`}></div>
                  </div>
                  
                  {/* Pulse Effect */}
                  {visibleItems.has(event.id) && (
                    <div className={`absolute inset-0 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r ${getColorClasses(event.color)} opacity-20 animate-ping`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Gradient Fade - Desktop centered, Mobile left aligned */}
          <div className="absolute bottom-0 lg:left-1/2 left-6 transform lg:-translate-x-1/2 -translate-x-1/2 w-8 h-16 bg-gradient-to-t from-gray-900 to-transparent rounded-full"></div>
        </div>

        {/* Stats Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-2xl font-bold text-white mb-2">14+</div>
            <div className="text-gray-300 text-sm">Years of Innovation</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-2xl font-bold text-white mb-2">5M+</div>
            <div className="text-gray-300 text-sm">Users Reached</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-2xl font-bold text-white mb-2">100K+</div>
            <div className="text-gray-300 text-sm">B2B Organizations</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-2xl font-bold text-white mb-2">8</div>
            <div className="text-gray-300 text-sm">Major Milestones</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldRoadmapSection;
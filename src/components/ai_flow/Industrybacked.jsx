import React from 'react';

const IndustryLeadersSection = () => {
  // Logo data with names for better accessibility
  const logos = [
    { id: 'logo01', name: 'Apple', src: '/logos/logo01.png' },
    { id: 'logo02', name: 'LinkedIn', src: '/logos/logo02.png' },
    { id: 'logo03', name: 'Discord', src: '/logos/logo13.png' },
    { id: 'logo04', name: 'NearPay', src: '/logos/logo04.png' },
    { id: 'logo05', name: 'Carnegie Mellon Unive0rsity', src: '/logos/logo05.png' },
    { id: 'logo06', name: 'Government Initiative', src: '/logos/logo14.png' },
    { id: 'logo07', name: 'ByteDance', src: '/logos/logo07.png' },
    { id: 'logo08', name: 'Career Launcher', src: '/logos/logo15.png' },
    { id: 'logo09', name: 'Lepton', src: '/logos/logo09.png' },
    { id: 'logo10', name: 'Accenture', src: '/logos/accenture.png' },
    { id: 'logo11', name: 'Infibeam', src: '/logos/logo16.png' },
    { id: 'logo12', name: 'Adobe', src: '/logos/logo12.png' }
  ];

//   return (
//     <section className="py-20 px-4 bg-gray-900 relative">
//       <div className="max-w-6xl mx-auto">
//         {/* Background decorations */}
//         <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
//         <div className="absolute top-0 left-0 h-64 w-64 bg-teal-400 rounded-full blur-3xl opacity-15" />
        
//         {/* Section Header */}
//         <div className="text-center mb-16 relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
//             Industry HNIs & Leaders
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             Backed by industry titans and visionary leaders who believe in the future of decentralized payments
//           </p>
//         </div>

//         {/* Logos Grid */}
//         <div className="relative z-10">
//           {/* Desktop Grid - 4 columns for larger screens */}
//           <div className="hidden lg:grid lg:grid-cols-4 gap-8">
//             {/* First Row */}
//             <div className="grid grid-cols-3 col-span-4 gap-8">
//               {logos.slice(0, 6).map((logo, index) => (
//                 <div 
//                   key={logo.id}
//                   className="group relative bg-white/95 backdrop-blur-sm border border-gray-200/20 rounded-xl p-6 hover:bg-white hover:border-purple-300/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-teal-400/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="relative flex items-center justify-center h-16">
//                     <img 
//                       src={logo.src} 
//                       alt={logo.name}
//                       className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Second Row */}
//             <div className="grid grid-cols-3 col-span-4 gap-8">
//               {logos.slice(6, 12).map((logo, index) => (
//                 <div 
//                   key={logo.id}
//                   className="group relative bg-white/95 backdrop-blur-sm border border-gray-200/20 rounded-xl p-6 hover:bg-white hover:border-purple-300/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-teal-400/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="relative flex items-center justify-center h-16">
//                     <img 
//                       src={logo.src} 
//                       alt={logo.name}
//                       className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tablet Grid - 3 columns */}
//           <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
//             {logos.map((logo, index) => (
//               <div 
//                 key={logo.id}
//                 className="group relative bg-white/95 backdrop-blur-sm border border-gray-200/20 rounded-xl p-6 hover:bg-white hover:border-purple-300/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-teal-400/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative flex items-center justify-center h-16">
//                   <img 
//                     src={logo.src} 
//                     alt={logo.name}
//                     className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile Grid - 2 columns */}
//           <div className="grid md:hidden grid-cols-2 gap-4">
//             {logos.map((logo, index) => (
//               <div 
//                 key={logo.id}
//                 className="group relative bg-white/95 backdrop-blur-sm border border-gray-200/20 rounded-xl p-6 hover:bg-white hover:border-purple-300/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-teal-400/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative flex items-center justify-center h-12">
//                   <img 
//                     src={logo.src} 
//                     alt={logo.name}
//                     className="max-h-8 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Text */}
//         <div className="text-center mt-16 relative z-10">
//           <p className="text-gray-400 text-sm max-w-2xl mx-auto">
//             Trusted by leading organizations across technology, finance, and innovation sectors worldwide
//           </p>
//         </div>
//       </div>
//     </section>
//   );
    return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background decorations */}
        {/* <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 left-0 h-64 w-64 bg-teal-400 rounded-full blur-3xl opacity-15" /> */}
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Industry HNIs & Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Backed by industry titans and visionary leaders who believe in the future of decentralized payments
          </p>
        </div>

        {/* Logos Grid */}
        <div className="relative z-10">
          {/* Desktop Grid - 4 columns for larger screens */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* First Row */}
            <div className="grid grid-cols-3 col-span-4 gap-8">
              {logos.slice(0, 6).map((logo, index) => (
                <div 
                  key={logo.id}
                  className="group relative bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:from-gray-700/50 hover:via-gray-600/40 hover:to-gray-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-teal-400/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center h-20">
                    <img 
                      src={logo.src} 
                      alt={logo.name}
                      className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-3 col-span-4 gap-8">
              {logos.slice(6, 12).map((logo, index) => (
                <div 
                  key={logo.id}
                  className="group relative bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:from-gray-700/50 hover:via-gray-600/40 hover:to-gray-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-teal-400/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center h-16">
                    <img 
                      src={logo.src} 
                      alt={logo.name}
                      className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Grid - 3 columns */}
          <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
            {logos.map((logo, index) => (
              <div 
                key={logo.id}
                className="group relative bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:from-gray-700/50 hover:via-gray-600/40 hover:to-gray-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-teal-400/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center h-16">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Grid - 2 columns */}
          <div className="grid md:hidden grid-cols-2 gap-4">
            {logos.map((logo, index) => (
              <div 
                key={logo.id}
                className="group relative bg-gradient-to-br from-gray-800/40 via-gray-700/30 to-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:from-gray-700/50 hover:via-gray-600/40 hover:to-gray-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-teal-400/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center h-12">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-8 max-w-full object-contain transition-all duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
                  />
                </div>
              </div>
            ))}
          </div>
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

export default IndustryLeadersSection;
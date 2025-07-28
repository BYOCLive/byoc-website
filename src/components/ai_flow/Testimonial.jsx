import React from "react";

const testimonials = [
  {
    name: "PNCash",
    sector: "Financial Sector",
    text: "PNCash, a platform created for PNC Bank, integrated BYOC to power its new-age finance tools.",
    logo: "/logos/logo01.png",
  },
  {
    name: "PropertyBricks",
    sector: "Real Estate, Delhi",
    text: "From listings to buyer engagement, BYOC helped PropertyBricks scale user interaction.",
    logo: "/logos/logo02.png",
  },
  {
    name: "SmartPostr",
    sector: "Public Sector",
    text: "SmartPostr is now using BYOC to power interactive poster tech across Delhi Metro.",
    logo: "/logos/logo03.png",
  },
  {
    name: "Content FireStick",
    sector: "Media/Content",
    text: "FireStick adopted BYOC to streamline content duration and analytics delivery.",
    logo: "/logos/logo04.png",
  },
];

export default function Testimonials() {
  const handleCTAClick = () => {
    const el = document.getElementById('purchaseForm');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Company Milestone Section */}
      {/* <section className="py-16 px-4 bg-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-teal-500/20 border border-purple-500/30 rounded-full px-8 py-4 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-teal-400 rounded-full animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
                Now part of the Notesgen family — expanding BYOC into the financial frontier.
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-32 w-32 bg-purple-600 rounded-full blur-3xl opacity-10" />
      </section> */}

      {/* Testimonials Section */}
      <section className="py-8 px-4 bg-gray-900 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
              Trusted by Disruptors Across Industries
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real impact. Real adoption. See how leading platforms use BYOC to power innovation.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 rounded-lg">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-lg object-cover border border-gray-600 p-1"
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-purple-400 font-medium">{testimonial.sector}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Narrative CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              From finance to real estate, BYOC is powering the next generation of digital communities.
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Are you ready to build yours?
            </p>
            <button
              onClick={handleCTAClick}
              className="py-4 px-12 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full text-white font-bold text-lg shadow-lg cursor-pointer"
            >
              Try BYOC Now
            </button>
          </div>
        </div>
        
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500 rounded-full blur-3xl opacity-15" />
      </section>
    </>
  );
}

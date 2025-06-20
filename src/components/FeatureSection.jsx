// FeaturesSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FeaturesSection() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "💰",
      title: "Instant Transactions",
      description: "Lightning-fast payments across online and offline merchants"
    },
    {
      icon: "🎮",
      title: "Gaming Integration",
      description: "Access 500+ games with Gamezop partnership and earn BYOC tokens"
    },
    {
      icon: "🛒",
      title: "Marketplace",
      description: "Monetize digital content, NFTs, and participate in auctions"
    },
    {
      icon: "🔒",
      title: "Secure Mining",
      description: "Participate in token mining and strengthen the blockchain network"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose <span className="text-purple-500">BYOC?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            BYOC is more than just a token - it's the foundation of India's next-generation digital economy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full max-w-xs py-3 px-6 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium"
          >
            Learn More About BYOC
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function WhyByocVouchers() {
  const benefits = [
    { 
      icon: "💰",
      title: "Flat Discounts or Cashback", 
      color: "text-teal-400",
      description: "Save more with every purchase"
    },
    { 
      icon: "🔒",
      title: "No Hidden Fees", 
      color: "text-purple-400",
      description: "Complete transparency guaranteed"
    },
    { 
      icon: "⚡",
      title: "Instant Delivery via Email/Wallet", 
      color: "text-pink-400",
      description: "Get your vouchers immediately"
    },
    { 
      icon: "🎯",
      title: "One Token, Many Rewards", 
      color: "text-blue-400",
      description: "Maximum flexibility and value"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 bg-grid-pattern relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Why BYOC Vouchers?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Unlock exclusive savings and rewards with every BYOC Token you spend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className={`${benefit.color} font-semibold text-lg mb-2`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" p-8 text-center">
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="py-3 px-8 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-bold text-lg shadow-lg"
              onClick={() => {
                const el = document.getElementById('purchaseForm');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Grab a Voucher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
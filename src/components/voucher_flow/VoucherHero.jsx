import React from "react";

export default function VoucherHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-900 bg-grid-pattern relative">
      <div className="max-w-3xl mt-24 w-full">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Get 20+ Brand Vouchers for ₹200
        </h1>
        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Unlock premium vouchers with <span className="text-purple-400 font-semibold">BYOC Tokens</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Save big on food, fashion, and travel. Limited time offer!
        </p>
        {/* CTA */}
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all"
          onClick={() => {
            const el = document.getElementById('purchaseForm');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          Get Vouchers Now
        </button>
      </div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </section>
  );
}
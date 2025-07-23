import React from "react";

export default function HeroSection() {
  const handleScroll = () => {
    const el = document.getElementById("purchaseForm");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-900 bg-grid-pattern relative">
      <div className="max-w-4xl mt-24 w-full">
        <h1 className="text-5xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            50+ Premium AI Tools for Just ₹200
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Everything you need to automate your work and boost productivity.
        </h2>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all mb-10"
          onClick={handleScroll}
        >
          Access 50+ Tools Now
        </button>
      </div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </section>
  );
}

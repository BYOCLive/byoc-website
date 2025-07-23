import React from "react";

const steps = [
  {
    img: "/png/i3.jpg",
    title: "Buy BYOC Token",
    desc: "Start with just ₹200 to unlock all AI tools.",
    accent: "hover:shadow-purple-700/20",
  },
  {
    img: "/png/i2.jpg",
    title: "Open Your Dashboard",
    desc: "See all 50+ premium AI tools instantly unlocked for you.",
    accent: "hover:shadow-blue-700/20",
  },
  {
    img: "/png/i4.png",
    title: "Access Instantly",
    desc: "Start using every tool right away — no wait, no hassle.",
    accent: "hover:shadow-teal-700/20",
  },
];

export default function HowItWorks() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 bg-gray-900 py-20 relative">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Get instant access to 50+ AI tools in three simple steps.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg ${step.accent} transition-all`}
            >
              <img
                src={step.img}
                alt={`Step ${idx + 1}`}
                className="w-[60%] mb-4 object-contain rounded-xl shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </section>
  );
}

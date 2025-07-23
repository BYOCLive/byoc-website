
import React from "react";

const testimonials = [
  {
    name: "Aarav S.",
    role: "Startup Founder",
    text:
      "The BYOC AI Tools suite has transformed my workflow. I can write, design, and automate—all in one place!",
    avatar: "/logos/logo01.png",
  },
  {
    name: "Priya M.",
    role: "Content Creator",
    text:
      "I love the variety of tools. Sudowrite and Rytr help me create content faster than ever.",
    avatar: "/logos/logo02.png",
  },
  {
    name: "Rahul T.",
    role: "Product Manager",
    text:
      "Having access to premium AI tools for one price is a game changer. The value is unbeatable!",
    avatar: "/logos/logo03.png",
  },
  {
    name: "Sneha K.",
    role: "Designer",
    text:
      "AdCreativeAI and Udio are my go-to for creative projects. The interface is sleek and easy to use.",
    avatar: "/logos/logo04.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real stories from BYOC members using our premium AI tools.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:border-teal-400 transition-colors"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-purple-500 shadow"
                loading="lazy"
              />
              <p className="text-gray-200 text-lg mb-4 font-medium">“{t.text}”</p>
              <div className="text-sm text-gray-400 font-semibold">
                {t.name} <span className="text-xs text-gray-500">/ {t.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20" />
      </div>
    </section>
  );
}

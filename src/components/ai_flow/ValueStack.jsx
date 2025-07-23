import React from "react";

const logos = [
  { name: "Notion Q&A", src: "/aitools/notionqna.png", category: "Productivity" },
  { name: "NotebookLM", src: "/aitools/notebooklm.png", category: "Writing" },
  { name: "Cursor", src: "/aitools/cursor.png", category: "Productivity" },
  { name: "Rytr", src: "/aitools/rytr.png", category: "Writing" },
  { name: "Reclaim", src: "/aitools/reclaimai.png", category: "Productivity" },
  { name: "Sudowrite", src: "/aitools/sudowrite.png", category: "Writing" },
  { name: "Airops", src: "/aitools/airops.png", category: "Marketing" },
  { name: "Fathom", src: "/aitools/fathom.png", category: "Productivity" },
  { name: "n8n", src: "/aitools/n8n.png", category: "Productivity" },
  { name: "AdCreative", src: "/aitools/aicreativeai.png", category: "Marketing" },
];

const categories = [
  { name: "Writing", color: "text-teal-400", icon: "✍️" },
  { name: "Design", color: "text-purple-400", icon: "🎨" },
  { name: "Marketing", color: "text-pink-400", icon: "📈" },
  { name: "Productivity", color: "text-blue-400", icon: "⚡" }
];

export default function ValueStack() {
  const handleScroll = () => {
    const el = document.getElementById("purchaseForm");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            💎 Value Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            50+ industry-leading AI tools. One token. Unlimited possibilities.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div key={category.name} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className={`${category.color} font-semibold text-lg`}>
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Visual Grid of AI Tools */}
        <div className="mb-16">
          <h3 className="text-xl text-gray-300 text-center mb-8 font-semibold">
            Popular AI Tools Available
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex flex-col items-center group">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className=" w-48 object-contain mx-auto"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-gray-400 font-medium mt-3 text-center">{logo.name}</span>
                <span className="text-xs text-gray-500 mt-1">{logo.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className=" rounded-xl p-8 text-center">
          <button
            className="py-4 px-12 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-bold text-lg shadow-lg"
            onClick={handleScroll}
          >
            Access All Tools Today
          </button>
        </div>
      </div>
      
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </section>
  );
}
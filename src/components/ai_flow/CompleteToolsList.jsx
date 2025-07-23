import React from "react";

const categories = [
  {
    name: "Writing & Content",
    tools: [
      { name: "Rytr", src: "/aitools/rytr.png" },
      { name: "Sudowrite", src: "/aitools/sudowrite.png" },
      { name: "Lovable", src: "/aitools/lovable.png" },
      { name: "Manus", src: "/aitools/manus.png" },
    ],
  },
  {
    name: "Design & Creative",
    tools: [
      { name: "AdCreativeAI", src: "/aitools/aicreativeai.png" },
      { name: "Suno", src: "/aitools/suno.png" },
      { name: "Teal", src: "/aitools/teal.png" },
      { name: "Udio", src: "/aitools/udio.png" },
    ],
  },
  {
    name: "Marketing & Sales",
    tools: [
      { name: "GuruAI", src: "/aitools/guruai.png" },
      { name: "Kickresume", src: "/aitools/kickresume.png" },
      { name: "Airops", src: "/aitools/airops.png" },
    ],
  },
  {
    name: "Productivity & Automation",
    tools: [
      { name: "ReclaimAI", src: "/aitools/reclaimai.png" },
      { name: "Clockwise", src: "/aitools/clockwise.png" },
      { name: "n8n", src: "/aitools/n8n.png" },
      { name: "NotebookLM", src: "/aitools/notebooklm.png" },
      { name: "Notion Q&A", src: "/aitools/notionqna.png" },
    ],
  },
  {
    name: "Development & Technical",
    tools: [
      { name: "Cursor", src: "/aitools/cursor.png" },
      { name: "Nyota", src: "/aitools/nyota.png" },
      { name: "Fathom", src: "/aitools/fathom.png" },
    ],
  },
];

export default function CompleteToolsList() {
  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Complete AI Tools List
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore all the premium AI tools you unlock with BYOC — categorized for every need.
          </p>
        </div>
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-2xl font-bold text-white mb-6 text-left md:text-center">
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center">
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className=" w-48 object-containrounded-2xl  mb-2 shadow-md"
                      loading="lazy"
                    />
                    <span className="text-xs text-gray-400 font-medium truncate w-16 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button
            className="w-full max-w-xs py-3 px-6 bg-gradient-to-r from-purple-600 to-teal-400 hover:from-purple-700 hover:to-teal-500 transition-colors rounded-lg text-white font-bold text-lg shadow-lg"
            onClick={() => {
              const el = document.getElementById('purchaseForm');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Get Instant Access
          </button>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </section>
  );
}

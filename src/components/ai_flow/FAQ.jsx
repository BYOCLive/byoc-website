import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Can I use all tools forever?",
    answer: (
      <span>
        Yes! Once you unlock access, you can use all 50+ AI tools <span className="text-teal-400 font-semibold">without any time limit</span> as long as the BYOC platform is live.
      </span>
    ),
    icon: <FaQuestionCircle className="text-purple-500 text-xl mr-2" />,
  },
  {
    question: "Is it really ₹200 only?",
    answer: (
      <span>
        Absolutely. <span className="text-purple-400 font-semibold">One-time payment of ₹200</span> in BYOC tokens unlocks all tools. No hidden fees or subscriptions.
      </span>
    ),
    icon: <FaQuestionCircle className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "Do I need to install anything?",
    answer: (
      <span>
        No installation needed! All tools are <span className="text-pink-400 font-semibold">cloud-based</span> and accessible instantly from your dashboard.
      </span>
    ),
    icon: <FaQuestionCircle className="text-pink-400 text-xl mr-2" />,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 bg-gray-900 relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Answers to common questions about BYOC AI tools access and usage.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-800/60 border border-gray-700 rounded-lg p-5 md:p-6 shadow-sm hover:border-purple-400 transition-all">
              <button
                className="w-full flex items-center justify-between focus:outline-none text-left"
                onClick={() => handleToggle(idx)}
              >
                <span className="flex items-center text-base md:text-lg font-semibold text-white">
                  <span className="mr-2 md:mr-3">{faq.icon}</span>
                  {faq.question}
                </span>
                <span>
                  {openIndex === idx ? (
                    <FaChevronUp className="text-purple-400 text-xl md:text-2xl" />
                  ) : (
                    <FaChevronDown className="text-teal-400 text-xl md:text-2xl" />
                  )}
                </span>
              </button>
              {openIndex === idx && (
                <div className="mt-4 text-gray-300 text-sm md:text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </section>
  );
}

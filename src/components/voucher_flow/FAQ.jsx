import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Do these vouchers expire?",
    answer: (
      <span>
        Most vouchers have an <span className="text-teal-400 font-semibold">expiry date</span> which is mentioned at the time of redemption. Please check the details before use.
      </span>
    ),
    icon: <FaQuestionCircle className="text-purple-500 text-xl mr-2" />,
  },
  {
    question: "How many vouchers do I get?",
    answer: (
      <span>
        You can <span className="text-purple-400 font-semibold">redeem as many vouchers</span> as your BYOC token balance allows. There is <span className="text-teal-400 font-semibold">no upper limit</span>!
      </span>
    ),
    icon: <FaQuestionCircle className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "Can I transfer them?",
    answer: (
      <span>
        Some vouchers are <span className="text-pink-400 font-semibold">non-transferable</span> and linked to your account, while others may be shared. Please check the voucher terms at redemption.
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
    <section className="py-16 px-4 bg-gray-900 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Answers to common questions about BYOC voucher redemption and usage.
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

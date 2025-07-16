import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaMobileAlt, FaRupeeSign, FaExchangeAlt, FaUserFriends, FaChartLine } from "react-icons/fa";
// import "../index.css";

const faqs = [
  {
    question: "What happens after I buy BYOC tokens?",
    answer: (
      <span>
        After buying tokens, you'll have a <span className="text-teal-400 font-semibold">40-day cooling period</span>. After that, you can <span className="text-purple-400 font-semibold">exchange or sell tokens</span> with friends or colleagues on the BYOC platform.
      </span>
    ),
    icon: <FaExchangeAlt className="text-purple-500 text-xl mr-2" />,
  },
  {
    question: "How can I use my BYOC tokens?",
    answer: (
      <ul className="list-disc pl-5">
        <li><span className="text-teal-400 font-semibold">Sell tokens</span> to friends at a profit after the cooling period.</li>
        <li><span className="text-teal-400 font-semibold">Create and sell digital content</span> using AI tools on the BYOC platform.</li>
        <li><span className="text-teal-400 font-semibold">Buy or sell products</span> in the marketplace (for brands).</li>
      </ul>
    ),
    icon: <FaCheckCircle className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "How can I sell my products as a brand?",
    answer: (
      <span>
        Once the BYOC app is live, you can <span className="text-teal-400 font-semibold">upload products</span> to the catalogue, price them in <span className="text-purple-400 font-semibold">Indian rupees</span>, and customers will buy in <span className="text-teal-400 font-semibold">BYOC tokens</span>. You'll earn money in <span className="text-purple-400 font-semibold">Indian rupees</span>.
      </span>
    ),
    icon: <FaUserFriends className="text-purple-500 text-xl mr-2" />,
  },
  {
    question: "How do I price my products in BYOC tokens?",
    answer: (
      <span>
        Simply price your product in <span className="text-purple-400 font-semibold">Indian rupees</span>, and the platform will convert it to <span className="text-teal-400 font-semibold">BYOC tokens</span>.
      </span>
    ),
    icon: <FaRupeeSign className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "When will the BYOC mobile app be live?",
    answer: (
      <span>
        The BYOC app will be live on Android and iOS in <span className="font-bold text-purple-500">October 2025</span>.
      </span>
    ),
    icon: <FaMobileAlt className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "How long can I hold my BYOC tokens?",
    answer: (
      <span>
        You can hold tokens for <span className="text-teal-400 font-semibold">as long as you want</span>. There's <span className="text-purple-400 font-semibold">no time limit</span>.
      </span>
    ),
    icon: <FaCheckCircle className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "What kind of return can I get from BYOC tokens?",
    answer: (
      <span>
        You can get an <span className="text-teal-400 font-semibold">average return of 20% per year</span>.
      </span>
    ),
    icon: <FaChartLine className="text-purple-500 text-xl mr-2" />,
  },
  {
    question: "What's the minimum investment required for BYOC tokens?",
    answer: (
      <span>
        The <span className="text-purple-400 font-semibold">minimum investment</span> is <span className="text-teal-400 font-semibold">₹500</span>.
      </span>
    ),
    icon: <FaRupeeSign className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "How many tokens do I need to buy to activate my account?",
    answer: (
      <span>
        You need to buy at least <span className="text-teal-400 font-semibold">₹500 worth of tokens</span> to <span className="text-purple-400 font-semibold">activate your account</span>.
      </span>
    ),
    icon: <FaCheckCircle className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "Is there a limit on how many tokens I can buy?",
    answer: (
      <span>
        No, there's <span className="text-purple-400 font-semibold">no limit</span>. You can buy <span className="text-teal-400 font-semibold">as many tokens as you want</span>.
      </span>
    ),
    icon: <FaCheckCircle className="text-teal-400 text-xl mr-2" />,
  },
  {
    question: "What if I can't sell my tokens to friends after the cooling period?",
    answer: (
      <span>
        Don't worry! Once the mobile app is live, you'll be able to <span className="text-teal-400 font-semibold">sell your tokens</span> to <span className="text-purple-400 font-semibold">thousands of registered users</span> on the app.
      </span>
    ),
    icon: <FaUserFriends className="text-purple-500 text-xl mr-2" />,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Decorative Backgrounds */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div> */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Answers to the most common questions about BYOC tokens, usage, and platform features.
          </p>
        </div>
        {/* FAQ Cards - single column, sleek modular style */}
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
    </section>
  );
}

import React from "react";
import BYOCPriceChart from "./Chart";// Import the BYOC Price Chart component
import { useNavigate } from 'react-router-dom';

export default function Graph() {
  return (
    <section className="py-20 px-4 bg-gray-900 bg-grid-pattern relative mt-16">
      <div className="max-w-6xl mx-auto">
        <BYOCPriceChart/>
            {/* Centered Button */}
            <div className="flex justify-center mt-8">
                <a href="#investnow">
                    <button 
                    // onClick={() => {
                    //     navigate('/offer');
                    //     window.scrollTo({ top: 0, behavior: 'smooth' });
                    // }}
                    className="w-full max-w-xs py-3 px-6 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium"
                    >
                    Buy Now
                    </button>
                </a>
            </div>
        </div>
    </section>
  );
}
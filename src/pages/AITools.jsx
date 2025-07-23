// src/pages/Home.jsx
import { useEffect } from 'react';
import axios from 'axios';
import HeroSection from '../components/ai_flow/HeroSection';
import HowItWorks from '../components/ai_flow/HowItWorks';
import ValueStack from '../components/ai_flow/ValueStack';
import FAQ from '../components/ai_flow/FAQ';
import CompleteToolsList from '../components/ai_flow/CompleteToolsList';
import TestimonialsSection from '../components/ai_flow/TestimonialsSection';
import PurchaseForm from '../components/PurchaseForm';
import Navbar from '../components/Navbar'; 

const AILandingPage = () => {

  useEffect(() => {
    // Ping the backend when the component mounts
    axios.get('https://byoc-backend-xemb.onrender.com/', { timeout: 3000 }) // Replace with your backend health endpoint
      .then(res => {
        console.log("Backend wakeup ping success:", res.status);
      })
      .catch(err => {
        console.error("Backend wakeup ping failed:", err.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Navbar/>
      <HeroSection />
      <HowItWorks />
      <ValueStack />
      <PurchaseForm id="purchaseform" />
      <CompleteToolsList />
      
      {/* <TestimonialsSection /> */}
      <FAQ />
    </div>
  );
}

export default AILandingPage;
// src/pages/Home.jsx
import { useEffect } from 'react';
import axios from 'axios';
import VoucherHero from '../components/voucher_flow/VoucherHero';
import VoucherCategories from '../components/voucher_flow/VoucherCategories';
import WhyByocVouchers from '../components/voucher_flow/WhyByocVouchers';
import Testimonials from '../components/voucher_flow/Testimonials';
import FAQ from '../components/voucher_flow/FAQ';
import PurchaseForm from '../components/PurchaseForm';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/voucher_flow/HowItWorks';

const VoucerLandingPage = () => {

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
        <VoucherHero />
        <HowItWorks />
        {/* <VoucherCategories /> */}
        <WhyByocVouchers />
        
        <PurchaseForm />
        {/* <Testimonials /> */}
        <FAQ />
    </div>
  );
};

export default VoucerLandingPage;
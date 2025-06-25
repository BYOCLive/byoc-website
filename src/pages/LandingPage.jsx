// src/pages/Home.jsx
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/NavbarLanding';
import Hero from '../components/LandingHero';
import PurchaseForm from '../components/PurchaseForm';
import PurchaseHistory from '../components/PurchaseHistory';
import Features from '../components/FeatureSection';
import Footer from '../components/Footer';

const LandingPage = () => {

  useEffect(() => {
    // Ping the backend when the component mounts
    axios.get('https://byoc-backend.onrender.com/', { timeout: 3000 }) // Replace with your backend health endpoint
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
      <Hero/>
      <PurchaseForm />
      {/* <PurchaseHistory /> */}
      <Features />
    </div>
  );
};

export default LandingPage;
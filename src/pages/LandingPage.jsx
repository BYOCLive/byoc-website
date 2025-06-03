// src/pages/Home.jsx
import Navbar from '../components/NavbarLanding';
import Hero from '../components/LandingHero';
import PurchaseForm from '../components/PurchaseForm';
import PurchaseHistory from '../components/PurchaseHistory';
import Features from '../components/FeatureSection';
import Footer from '../components/Footer';

const LandingPage = () => {
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
// Main App Component
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EcosystemSection from './components/EcosystemSection';
import TokenUtilitySection from './components/TokenUtilitySection';
import RoadmapSection from './components/RoadmapSection'; 
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import './index.css'; // Import your CSS file for global styles
import './App.css'; // Import your CSS file for custom styles


const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <div id="ecosystem">
        <EcosystemSection />
      </div>
      <div id="token">
        <TokenUtilitySection />
      </div>
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <JoinSection />
      <Footer />
      {/* Add other sections as needed */}
    </div>
  );
};

export default App;
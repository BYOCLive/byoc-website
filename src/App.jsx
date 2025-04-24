import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EcosystemSection from './components/EcosystemSection';
import TokenUtilitySection from './components/TokenUtilitySection';
import RoadmapSection from './components/RoadmapSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail'; // Import the new component
import './index.css';
import './App.css';
import MobileScreens from './components/MobileScreens';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <CursorTrail /> {/* Add the cursor trail component */}
      <Navbar />
      <HeroSection />
      <div id="ecosystem">
        <EcosystemSection />
      </div>
      <MobileScreens/>
      <div id="token">
        <TokenUtilitySection />
      </div>
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <JoinSection />
      <Footer />
    </div>
  );
};

export default App;
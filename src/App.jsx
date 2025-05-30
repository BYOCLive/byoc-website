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
import VisionMissionSection from './components/VisionMissionSection';
import TokenomicsSection from './components/TokenomicsSection';
import ProductPortfolio from './components/ProductPortfolio';
import './App.css'; // Ensure this is imported to apply styles
import TeamSection from './components/TeamSection';
import OldRoadmapSection from './components/OldRoadmap';
import IndustryLeadersSection from './components/Industrybacked';
import LogoAlternatives from './components/IndustryBacked123';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <CursorTrail /> {/* Add the cursor trail component */}
      <Navbar />
      <HeroSection />
      <VisionMissionSection/>
      <TokenomicsSection/>
      <div id = "ecosystem">
        <EcosystemSection />
      </div>
      <MobileScreens/>
      <ProductPortfolio/>
      <div id = "token">
        <TokenUtilitySection />
      </div>
      {/* <TeamSection /> */}
      <IndustryLeadersSection />
      {/* <LogoAlternatives /> */}
      <OldRoadmapSection />
      <div id = "roadmap">
        <RoadmapSection />
      </div>
      <div id = "joinSection">
        <JoinSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
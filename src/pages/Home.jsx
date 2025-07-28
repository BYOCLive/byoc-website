// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EcosystemSection from '../components/EcosystemSection';
import TokenUtilitySection from '../components/TokenUtilitySection';
import RoadmapSection from '../components/RoadmapSection';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';
import CursorTrail from '../components/CursorTrail'; // Import the new component
import '../index.css';
import '../App.css';
import MobileScreens from '../components/MobileScreensCommunity';
import VisionMissionSection from '../components/VisionMissionSection';
import TokenomicsSection from '../components/TokenomicsSection';
import ProductPortfolio from '../components/ProductPortfolio';
import '../App.css'; // Ensure this is imported to apply styles
import TeamSection from '../components/TeamSection';
import OldRoadmapSection from '../components/OldRoadmap';
import IndustryLeadersSection from '../components/Industrybacked';
import LogoAlternatives from '../components/IndustryBacked123';
import ContactUsSection from '../components/ContactUs';
import FaqSection from '../components/FaqSection';
import PurchaseForm from '../components/PurchaseForm'; // Import the Purchase Form
import Graph from '../components/Graph'; // Import the Graph component
import CommunitySection from '../components/CommunitySection'; // Import the Community Section

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-gray-900 text-white relative">
      <CursorTrail /> {/* Add the cursor trail component */}
      <Navbar />
      <HeroSection />
      
      <MobileScreens/>
      <Graph /> 
      
      <CommunitySection /> {/* Add the Community Section at the top */}
      {/* <TokenomicsSection/> */}
      <div id="investnow">
        <PurchaseForm/>
      </div>
      <div id = "ecosystem">
        {/* <EcosystemSection /> */}
      </div>
      <IndustryLeadersSection />
      
      {/* <ProductPortfolio/> */}
      <div id = "token">
        {/* <TokenUtilitySection /> */}
      </div>
      {/* <TeamSection /> */}
      
      {/* <LogoAlternatives /> */}
      <FaqSection />
      <VisionMissionSection/> 
      <div id = "about">
      <OldRoadmapSection />
      </div>
      <div id = "roadmap">
        {/* <RoadmapSection /> */}
      </div>
      <div id = "joinSection">
        {/* <JoinSection /> */}
      </div>
      
      
      <div id="contact">
        <ContactUsSection/>
      </div>
    </div>
  );
};

export default Home;
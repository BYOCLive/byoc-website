// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import TermsConditionsPage from '../components/TermsOfUse';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
         
      <Navbar/>
      <TermsConditionsPage />
    </div>
  );
};

export default TermsConditions;
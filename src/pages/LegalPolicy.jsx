// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import LegalPolicyPage from '../components/LegalPolicy';

const LegalPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
         
      <Navbar/>
      <LegalPolicyPage />
    </div>
  );
};

export default LegalPolicy;
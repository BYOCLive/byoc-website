// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import PrivacyPolicyPage from '../components/PrivacyPolicySection';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
         
      <Navbar/>
      <PrivacyPolicyPage />
    </div>
  );
};

export default PrivacyPolicy;
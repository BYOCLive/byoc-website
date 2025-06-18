// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import CancellationPolicy from '../components/CancellationPolicy';

const CancellationPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
         
      <Navbar/>
      <CancellationPolicy />
    </div>
  );
};

export default CancellationPolicyPage;
// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import ShippingPolicy from '../components/ShippingPolicy';

const ShippingPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
         
      <Navbar/>
      <ShippingPolicy />
    </div>
  );
};

export default ShippingPolicyPage;
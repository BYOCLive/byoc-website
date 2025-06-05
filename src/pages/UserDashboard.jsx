// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import UserDashboard from '../components/UserDashboard';

const UserDashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
         
      <Navbar/>
      <UserDashboard />
    </div>
  );
};

export default UserDashboardLayout;
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import './App.css'; // Ensure this is imported to apply styles
import './index.css'; // Ensure this is imported to apply styles
import UserDashboard from './pages/UserDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditionsPage';
import LegalPolicy from './pages/LegalPolicy';
// import SignIn from './pages/SignIn';
import PaymentPage from './pages/PaymentPage';
import CancellationPolicy from './pages/CancellationPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer" element={<LandingPage />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/privacypolicy" element={<div><PrivacyPolicy/></div>} />
            <Route path="/termsandconditions" element={<div><TermsConditions/></div>} />
            <Route path="/legalpolicy" element={<div><LegalPolicy/></div>} />
            <Route path="/cancellationpolicy" element={<div><CancellationPolicy/></div>} />
            <Route path="/shippingpolicy" element={<div><ShippingPolicyPage/></div>}/>
            {/* <Route path="/signin" element={<div><SignIn/></div>} /> */}
            <Route path="/payment" element={<div><PaymentPage/></div>} />
            {/* <Route path="/admin" element={<Admin />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

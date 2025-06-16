// Waitlist Popup Form Component
import { useState, useEffect } from 'react';

const WaitlistPopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interestedIn: [],
    newsletter: true,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const API_BASE = 'https://byoc-backend.onrender.com/api';
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interestedIn') {
      const updatedInterests = checked 
        ? [...formData.interestedIn, value]
        : formData.interestedIn.filter(item => item !== value);
        
      setFormData(prev => ({
        ...prev,
        interestedIn: updatedInterests
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/form/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          interestedIn: [],
          newsletter: true,
        });
        onClose();
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal - Added max-height and overflow-y-auto for scrolling */}
      <div className="relative bg-gray-800 rounded-2xl w-full max-w-md mx-4 border border-gray-700 shadow-xl max-h-[90vh] overflow-y-auto scrollbar-hide scrollbar-premium">
        <div className="p-8">
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-300">Thank you for joining the BYOC waitlist. We'll keep you updated on our launch.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
              <p className="text-gray-300 mb-6">Be the first to access BYOC's Web3 ecosystem and receive exclusive benefits.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">I'm interested in: *</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="communityApp"
                        name="interestedIn"
                        value="communityApp"
                        checked={formData.interestedIn.includes('communityApp')}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-500 rounded border-gray-600 focus:ring-blue-500 bg-gray-700"
                      />
                      <label htmlFor="communityApp" className="ml-2 text-sm text-gray-300">Community App</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="digitalMarket"
                        name="interestedIn"
                        value="digitalMarket"
                        checked={formData.interestedIn.includes('digitalMarket')}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-500 rounded border-gray-600 focus:ring-blue-500 bg-gray-700"
                      />
                      <label htmlFor="digitalMarket" className="ml-2 text-sm text-gray-300">Digital Marketplace</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="tokensInvesting"
                        name="interestedIn"
                        value="tokensInvesting"
                        checked={formData.interestedIn.includes('tokensInvesting')}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-500 rounded border-gray-600 focus:ring-blue-500 bg-gray-700"
                      />
                      <label htmlFor="tokensInvesting" className="ml-2 text-sm text-gray-300">Tokens & Investing</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="aiFeatures"
                        name="interestedIn"
                        value="aiFeatures"
                        checked={formData.interestedIn.includes('aiFeatures')}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-500 rounded border-gray-600 focus:ring-blue-500 bg-gray-700"
                      />
                      <label htmlFor="aiFeatures" className="ml-2 text-sm text-gray-300">AI Features</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-500 rounded border-gray-600 focus:ring-blue-500 bg-gray-700"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-300">
                    I agree to receive updates about BYOC developments, token events, and community activities
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors rounded-lg text-white font-medium"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Join Waitlist'}
                </button>
                {error && <div className="text-red-400 text-center mt-2">{error}</div>}
                
                <p className="text-xs text-gray-400 text-center mt-4">
                  By joining, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Example usage component
const WaitlistButtonExample = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setShowPopup(true)}
        className="py-3 px-6 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium"
      >
        Join Waitlist
      </button>
      
      <WaitlistPopupForm 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </>
  );
};

export { WaitlistPopupForm, WaitlistButtonExample };
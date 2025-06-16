// Purchase Form Component - Option 1: Using React Router Navigation
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const API_BASE = 'https://byoc-backend.onrender.com/api';

export default function PurchaseForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    amount: '',
    customAmount: ''
  });

  const [selectedAmount, setSelectedAmount] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const predefinedAmounts = [1000, 5000, 10000, 20000, 50000];

  const handleAmountSelect = (amount) => {
    if (amount === 'custom') {
      setShowCustom(true);
      setSelectedAmount('custom');
      setFormData({...formData, amount: ''});
    } else {
      setShowCustom(false);
      setSelectedAmount(amount);
      setFormData({...formData, amount: amount, customAmount: ''});
    }
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setFormData({...formData, customAmount: value, amount: value});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const finalAmount = showCustom ? parseInt(formData.customAmount) : formData.amount;
      const purchaseInfo = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        amount: finalAmount
      };

      // Prepare purchase data
      const res = await fetch(`${API_BASE}/form/purchase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          amount: finalAmount
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Purchase failed');
      setSuccessMsg('Purchase successful! Your credentials have been sent to your email.');
      setFormData({ name: '', email: '', phone: '', age: '', amount: '', customAmount: '' });
      setSelectedAmount('');
      setShowCustom(false);
      // Navigate to payment page with purchase data in state
      navigate('/payment', { 
        state: { purchaseData: purchaseInfo } 
      });
      
    } catch (err) {
      console.error('submitPurchase Error:', err); 
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            Secure Your BYOC Tokens
          </h2>
          <p className="text-lg text-gray-300">
            Fill in your details and choose your investment amount
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your full name"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Age *</label>
                <input
                  type="number"
                  required
                  min="18"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your age"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your email"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Phone *</label>
                <input
                  type="text"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your phone number"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-white font-medium mb-4">Select Investment Amount *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedAmount === amount
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-purple-400'
                    }`}
                    disabled={loading}
                  >
                    <div className="font-bold text-lg">₹{amount}</div>
                    <div className="text-sm">{amount * 10} Tokens</div>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleAmountSelect('custom')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedAmount === 'custom'
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-gray-600 bg-gray-700 text-gray-300 hover:border-purple-400'
                  }`}
                  disabled={loading}
                >
                  <div className="font-bold text-lg">Custom</div>
                  <div className="text-sm">Min ₹1000</div>
                </button>
              </div>

              {showCustom && (
                <div>
                  <label className="block text-white font-medium mb-2">Custom Amount (₹)</label>
                  <input
                    type="number"
                    min="1000"
                    required={showCustom}
                    name="customAmount"
                    value={formData.customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Enter custom amount (minimum ₹1000)"
                    disabled={loading}
                  />
                  {formData.customAmount && (
                    <p className="text-purple-400 mt-2">
                      You will receive {parseInt(formData.customAmount || 0) * 10} BYOC tokens
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Purchase Summary */}
            {(formData.amount || formData.customAmount) && (
              <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-white font-bold mb-4">Purchase Summary</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Investment Amount:</span>
                    <span className="font-bold">₹{showCustom ? formData.customAmount : formData.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BYOC Tokens:</span>
                    <span className="font-bold text-purple-400">
                      {(showCustom ? parseInt(formData.customAmount || 0) : formData.amount) * 10} Tokens
                    </span>
                  </div>
                  <div className="border-t border-gray-600 pt-2 mt-4">
                    <div className="flex justify-between font-bold text-white">
                      <span>Rate:</span>
                      <span>₹1 = 10 BYOC Tokens</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {error && <div className="text-red-500 text-center">{error}</div>}

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
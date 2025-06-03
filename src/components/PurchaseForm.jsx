// Purchase Form Component
import React, { useState, useEffect } from 'react';

export default function PurchaseForm ({ purchases, setPurchases }) {
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

  const predefinedAmounts = [100, 200, 500, 1000, 2000];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = showCustom ? parseInt(formData.customAmount) : formData.amount;
    
    if (finalAmount < 100) {
      alert('Minimum purchase amount is ₹100');
      return;
    }

    const newPurchase = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      amount: finalAmount,
      tokens: finalAmount * 10,
      date: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };

    setPurchases([...purchases, newPurchase]);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      amount: '',
      customAmount: ''
    });
    setSelectedAmount('');
    setShowCustom(false);
    
    alert('Purchase successful! Your tokens will be credited soon.');
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Age *</label>
                <input
                  type="number"
                  required
                  min="18"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
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
                >
                  <div className="font-bold text-lg">Custom</div>
                  <div className="text-sm">Min ₹100</div>
                </button>
              </div>

              {showCustom && (
                <div>
                  <label className="block text-white font-medium mb-2">Custom Amount (₹)</label>
                  <input
                    type="number"
                    min="100"
                    required={showCustom}
                    value={formData.customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Enter custom amount (minimum ₹100)"
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Purchase Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
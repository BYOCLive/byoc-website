import React, { useState, useEffect } from 'react'

const API_BASE = 'https://byoc-backend-xemb.onrender.com/api'; 
// const API_BASE = 'http://localhost:5000/api';

export default function PurchaseForm() {
  const FIXED_AMOUNT = 200;
  
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    amount: FIXED_AMOUNT
  });

  const [selectedAmount, setSelectedAmount] = useState(FIXED_AMOUNT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Age validation
    if (!formData.age) {
      errors.age = 'Age is required';
    } else if (parseInt(formData.age) < 18) {
      errors.age = 'You must be at least 18 years old';
    }
    
    // Amount is fixed, no validation needed for amount
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear validation error for the field being edited
    if (validationErrors[name]) {
      setValidationErrors({...validationErrors, [name]: ''});
    }
  };

  const createRazorpayOrder = async (paymentData) => {
    try {
      const response = await fetch(`${API_BASE}/payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create order');
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  const verifyRazorpayPayment = async (paymentData) => {
    try {
      const response = await fetch(`${API_BASE}/payment/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Payment verification failed');
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  const handlePaymentFailure = async (orderId, error) => {
    try {
      await fetch(`${API_BASE}/payment/failed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razorpay_order_id: orderId,
          error: error
        }),
      });
    } catch (err) {
      console.error('Error recording payment failure:', err);
    }
  };

  const initializeRazorpayPayment = (orderData, userDetails) => {
    const options = {
      key: orderData.key, // Razorpay key ID
      amount: orderData.order.amount, // Amount in paise
      currency: orderData.order.currency,
      name: 'BYOC AI Tools Access',
      description: `Unlock 50+ Premium AI Tools`,
      order_id: orderData.order.id, // Order ID from backend
      
      // Prefill user details
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      
      // Theme customization
      theme: {
        color: '#8B5CF6', // Purple color matching your theme
      },
      
      // Payment success handler
      handler: async function (response) {
        try {
          setLoading(true);
          
          // Verify payment on backend
          const verificationResult = await verifyRazorpayPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verificationResult.success) {
            // Show success message and reset form
            setSuccessMsg('Payment successful! You now have access to 50+ premium AI tools.');
            
            // Reset form
            setFormData({ name: '', email: '', phone: '', age: '', amount: FIXED_AMOUNT });
            setSelectedAmount(FIXED_AMOUNT);
            setValidationErrors({});
            setError('');
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          setError('Payment verification failed. Please contact support.');
        } finally {
          setLoading(false);
        }
      },
      
      // Payment failure handler
      modal: {
        ondismiss: async function() {
          await handlePaymentFailure(orderData.order.id, 'Payment cancelled by user');
          setError('Payment was cancelled. Please try again.');
          setLoading(false);
        }
      }
    };

    // Open Razorpay checkout
    const rzp = new window.Razorpay(options);
    
    rzp.on('payment.failed', async function (response) {
      console.error('Payment failed:', response.error);
      await handlePaymentFailure(orderData.order.id, response.error);
      setError(`Payment failed: ${response.error.description}`);
      setLoading(false);
    });

    rzp.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    
    // Trigger click animation
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    
    // Validate form before submission
    if (!validateForm()) {
      setError('Please fix the errors below before proceeding');
      return;
    }
    
    setLoading(true);
    
    try {
      const userDetails = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        amount: FIXED_AMOUNT
      };

      // Create Razorpay order
      const orderData = await createRazorpayOrder(userDetails);

      // Initialize Razorpay payment
      initializeRazorpayPayment(orderData, userDetails);
      
    } catch (err) {
      console.error('Payment initiation error:', err);
      setError(err.message || 'Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section id="purchaseForm" className="py-20 px-4 bg-gray-900 bg-grid-pattern relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            Unlock Premium AI Tools
          </h2>
          <p className="text-lg text-gray-300">
             <strong className="text-teal-400">Access 50+ AI Tools for ₹{FIXED_AMOUNT}</strong> (One-time payment)
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <img 
              src="https://razorpay.com/assets/razorpay-logo.svg" 
              alt="Razorpay" 
              className="h-6"
            />
            <span className="text-sm text-gray-400">Secure payments powered by Razorpay</span>
          </div>
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
                  className={`w-full bg-gray-700 border rounded-lg px-4 py-3 text-white focus:outline-none ${
                    validationErrors.name ? 'border-red-500' : 'border-gray-600 focus:border-purple-500'
                  }`}
                  placeholder="Enter your full name"
                  disabled={loading}
                />
                {validationErrors.name && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.name}</p>
                )}
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
                  className={`w-full bg-gray-700 border rounded-lg px-4 py-3 text-white focus:outline-none ${
                    validationErrors.age ? 'border-red-500' : 'border-gray-600 focus:border-purple-500'
                  }`}
                  placeholder="Enter your age (18+)"
                  disabled={loading}
                />
                {validationErrors.age && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.age}</p>
                )}
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
                  className={`w-full bg-gray-700 border rounded-lg px-4 py-3 text-white focus:outline-none ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-600 focus:border-purple-500'
                  }`}
                  placeholder="Enter your email"
                  disabled={loading}
                />
                {validationErrors.email && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Phone *</label>
                <input
                  type="text"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-gray-700 border rounded-lg px-4 py-3 text-white focus:outline-none ${
                    validationErrors.phone ? 'border-red-500' : 'border-gray-600 focus:border-purple-500'
                  }`}
                  placeholder="Enter your phone number"
                  disabled={loading}
                />
                {validationErrors.phone && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.phone}</p>
                )}
              </div>
            </div>

            {/* Fixed Amount Display */}
            <div>
              <label className="block text-white font-medium mb-4">
                Payment Amount
              </label>
              <div className="bg-gray-700/50 border border-purple-500 rounded-lg p-6 text-center">
                <div className="font-bold text-2xl text-purple-300 mb-2">₹{FIXED_AMOUNT}</div>
                <div className="text-sm text-gray-300">Access to 50+ Premium AI Tools</div>
                <div className="text-xs text-gray-400 mt-2">Lifetime Access</div>
              </div>
            </div>

            {/* Purchase Summary */}
            <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
              <h3 className="text-white font-bold mb-4">Purchase Summary</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Payment Amount:</span>
                  <span className="font-bold">
                    ₹{FIXED_AMOUNT.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>AI Tools Access:</span>
                  <span className="font-bold text-purple-400">
                    50+ Premium Tools
                  </span>
                </div>
                <div className="border-t border-gray-600 pt-2 mt-4">
                  <div className="flex justify-between font-bold text-white">
                    <span>Access Duration:</span>
                    <span>Lifetime</span>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            )}

            {successMsg && (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
                <p className="text-green-400 text-center">{successMsg}</p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              className={`w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform disabled:opacity-50 disabled:cursor-not-allowed ${isClicked ? 'scale-95' : 'hover:scale-105'}`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    ></path>
                  </svg>
                  Processing Payment...
                </div>
              ) : (
                <>
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Unlock AI Tools Access
                  </span>
                </>
              )}
            </button>

            <div className="text-center text-sm text-gray-400">
              <p>🔒 Your payment is secured with 256-bit SSL encryption</p>
              <p className="mt-1">Get instant access to 50+ premium AI tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
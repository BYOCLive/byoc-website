// Payment Page Component - Enhanced with Loading Animation and Scroll to Top
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const API_BASE = 'https://byoc-backend-xemb.onrender.com/api';

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get purchase data from navigation state
  const purchaseData = location.state?.purchaseData;

  // Handle case where purchaseData is undefined
  if (!purchaseData) {
    return (
      <section className="py-20 px-4 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-red-500 text-xl">
            Error: No purchase data found. Please go back and fill the form again.
          </div>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/purchase');
            }}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Go Back to Form
          </button>
        </div>
      </section>
    );
  }

  const handleFinishPayment = async () => {
    setError('');
    setSuccessMsg('');
    setLoading(true);
    
    try {
      // TODO: Uncomment when ready to save data to backend
      /*
      const res = await fetch(`${API_BASE}/form/payment-done`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...purchaseData,
          status: 'payment_done',
          timestamp: new Date().toISOString()
        })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Payment confirmation failed');
      */

    //   const res = await fetch(`${API_BASE}/form/payment-done`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: purchaseData.email })
    //   });
      
    //   const data = await res.json();
    //   if (!res.ok) throw new Error(data.message || 'Payment confirmation failed');
      
      // Simulate API call delay for demo purposes
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccessMsg('Payment confirmed successfully! Your tokens will be credited shortly.');
      setTimeout(() => {
        window.scrollTo(0, 0);
        navigate('/');
      }, 2000);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToForm = () => {
    window.scrollTo(0, 0);
    navigate('/purchase');
  };

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
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
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <section className="py-20 px-4 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
            Complete Your Payment
          </h2>
          <p className="text-lg text-gray-300">
            Scan the QR code or use the bank details below to complete your payment
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
          {/* Purchase Summary */}
          <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 mb-8">
            <h3 className="text-white font-bold mb-4">Purchase Summary</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Name:</span>
                <span className="font-bold">{purchaseData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-bold">{purchaseData.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Investment Amount:</span>
                <span className="font-bold">₹{purchaseData.amount}</span>
              </div>
              <div className="flex justify-between">
                <span>BYOC Tokens:</span>
                <span className="font-bold text-purple-400">
                  {purchaseData.amount * 10} Tokens
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Scan QR Code</h3>
              <div className="bg-white p-6 rounded-lg inline-block mb-4">
                {/* <div className="w-48 h-48 bg-gray-200 rounded-lg flex flex-col items-center justify-center">
                  <p className="text-gray-600 text-sm">QR Code Image</p>
                  <p className="text-gray-500 text-xs mt-2">(Upload your QR code image here)</p>
                </div> */}
                <img src="/png/qrScan.jpg" alt="QR Code" className="w-100" />
              </div>
              <p className="text-gray-400 text-sm">
                Scan this QR code with your banking app to make the payment
              </p>
            </div>

            {/* Bank Details Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Bank Transfer Details</h3>
              <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 space-y-4">
                <div>
                  <label className="text-gray-400 text-sm">Account Name</label>
                  <p className="text-white font-bold">Notesgen Technologies Private Limited</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Bank Name</label>
                  <p className="text-white font-bold">Axis Bank</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Account Number</label>
                  <p className="text-white font-bold">924020030988515</p>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">IFSC Code</label>
                  <p className="text-white font-bold">UTIB0003028</p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <label className="text-gray-400 text-sm">Amount to Transfer</label>
                  <p className="text-purple-400 font-bold text-xl">₹{purchaseData.amount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
            <h4 className="text-yellow-400 font-bold mb-3">Important Instructions:</h4>
            <ul className="text-yellow-200 space-y-2 text-sm">
              <li>• Please transfer the exact amount: ₹{purchaseData.amount}</li>
              <li>• Add your name "{purchaseData.name}" in the transfer reference/remarks</li>
              <li>• Keep your transaction receipt for your records</li>
              <li>• Click "Finish Payment" after completing the transfer</li>
              <li>• Your tokens will be credited within 24 hours after verification</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBackToForm}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              Back to Form
            </button>
            <button
              onClick={handleFinishPayment}
              className="flex-1 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  Processing...
                </>
              ) : (
                'Finish Payment'
              )}
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-center mt-4 bg-red-900/20 border border-red-700 rounded-lg p-3">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="text-green-400 text-center mt-4 bg-green-900/20 border border-green-700 rounded-lg p-3">
              {successMsg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
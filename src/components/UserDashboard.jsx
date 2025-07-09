import { useState, useEffect, useCallback } from 'react';

const API_BASE = 'https://byoc-backend-xemb.onrender.com/api';

const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
    <span>{message}</span>
    <button onClick={onClose} className="ml-4 text-white font-bold">×</button>
  </div>
);

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyAmount, setBuyAmount] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: '', phone: '', age: '' });
  const [profileMsg, setProfileMsg] = useState('');
  const [profileLoading, setProfileLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [buyError, setBuyError] = useState('');
  const [buySuccess, setBuySuccess] = useState('');

  // Define fetchDashboard as a named async function using useCallback
  const fetchDashboard = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Not authenticated. Please sign in.');
        setLoading(false);
        return;
      }
      const res = await fetch(`${API_BASE}/user/dashboard`, {
        headers: { 'Authorization': 'Bearer ' + token }
      });
      if (!res.ok) {
        throw new Error((await res.json()).message || 'Failed to fetch dashboard');
      }
      const data = await res.json();
      setUserData(data.user);
      setTransactions(data.transactions.filter(txn => txn.status === 'completed'));
      setProfileForm({ name: data.user.name || '', phone: data.user.phone || '', age: data.user.age || '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  // Profile update handler
  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileMsg('');
    setError('');
    setProfileLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE}/user/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileForm)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to update profile');
      setUserData(data.user);
      setProfileMsg('Profile updated successfully!');
      setEditMode(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setProfileLoading(false);
    }
  };

  const openBuyModal = () => {
    setShowBuyModal(true);
    document.body.style.overflow = 'hidden';
  };
  const closeBuyModal = () => {
    setShowBuyModal(false);
    setBuyAmount('');
    document.body.style.overflow = 'auto';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  // const handleBuyTokens = async () => {
  //   setBuyLoading(true);
  //   setBuyError('');
  //   setBuySuccess('');
  //   try {
  //     const token = localStorage.getItem('token');
  //     const res = await fetch(`${API_BASE}/user/buy`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + token
  //       },
  //       body: JSON.stringify({ amount: buyAmount })
  //     });
  //     const data = await res.json();
  //     if (!res.ok) throw new Error(data.message || 'Purchase failed');
  //     setBuySuccess('Purchase successful! Check your email for confirmation.');
  //     setBuyAmount('');
  //     await fetchDashboard();
  //   } catch (err) {
  //     setBuyError(err.message);
  //   } finally {
  //     setBuyLoading(false);
  //   }
  // };

  const handleBuyTokens = async () => {
  setBuyLoading(true);
  setBuyError('');
  setBuySuccess('');

  try {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      setBuyError("Failed to load Razorpay SDK");
      setBuyLoading(false);
      return;
    }

    const res = await fetch(`${API_BASE}/payment/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: parseFloat(buyAmount),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        age: userData.age,
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Order creation failed');

    const { order, key } = data;

    const options = {
      key,
      amount: order.amount,
      currency: order.currency,
      name: "BYOC Token Purchase",
      description: "Purchase BYOC tokens securely",
      image: "/logo.png",
      order_id: order.id,
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.phone,
      },
      handler: async function (response) {
        const verifyRes = await fetch(`${API_BASE}/payment/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          setBuySuccess("Payment successful! Check your email.");
          closeBuyModal();
          await fetchDashboard();
        } else {
          setBuyError("Payment verification failed.");
        }
      },
      theme: { color: "#6b21a8" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (err) {
    setBuyError(err.message);
  } finally {
    setBuyLoading(false);
  }
};


const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });


  if (loading) return <div className="text-center text-white py-20">Loading dashboard...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-900 bg-grid-pattern relative">
      {/* Toast Notification */}
      {showToast && <Toast message="Profile updated successfully!" onClose={() => setShowToast(false)} />}
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-0 left-0 h-64 w-64 bg-teal-400 rounded-full blur-3xl opacity-15" />
      <div className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome back, {userData.name}
            </h1>
            <p className="text-gray-300">Manage your BYOC tokens and track your investments</p>
          </div>

          {/* User Profile Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-teal-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{userData.name}</h2>
                <p className="text-gray-300">BYOC Token Holder</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Email Address</p>
                <p className="text-white font-medium">{userData.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone Number</p>
                <p className="text-white font-medium">{userData.phone}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Wallet ID</p>
                <p className="text-white font-medium font-mono">BYOC-WLT-{userData.id.toString().padStart(8, '0')}</p>
              </div>
            </div>
            {/* Profile Edit */}
            <div className="mt-6">
              <button onClick={() => setEditMode(true)} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium">Edit Profile</button>
            </div>
          </div>

          {/* Profile Edit Dialog */}
          {editMode && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setEditMode(false)}>
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-11/12 max-w-xs mx-auto flex flex-col items-center shadow-lg" onClick={e => e.stopPropagation()}>
                <div className="text-white text-lg font-semibold mb-4 text-center">Edit Profile</div>
                <form onSubmit={handleProfileSubmit} className="space-y-4 w-full">
                  <div>
                    <label className="block text-gray-300 mb-1">Name</label>
                    <input type="text" name="name" value={profileForm.name} onChange={handleProfileChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Phone</label>
                    <input type="text" name="phone" value={profileForm.phone} onChange={handleProfileChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Age</label>
                    <input type="number" name="age" value={profileForm.age} onChange={handleProfileChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white" />
                  </div>
                  <div className="flex gap-4">
                    <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium w-full flex items-center justify-center" disabled={profileLoading}>
                      {profileLoading ? <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : null}
                      {profileLoading ? 'Processing...' : 'Update'}
                    </button>
                    <button type="button" onClick={() => setEditMode(false)} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium w-full">Cancel</button>
                  </div>
                  {error && <div className="text-red-500 text-center text-sm">{error}</div>}
                </form>
              </div>
            </div>
          )}

          {/* Token Holdings Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Holdings */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="8" cy="8" r="7"></circle>
                    <circle cx="16" cy="16" r="7"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Total BYOC Holdings</h3>
              </div>
              <p className="text-3xl font-bold text-purple-400">{formatNumber(userData.total_holdings || 0)}</p>
              <p className="text-gray-400 text-sm mt-1">BYOC Tokens</p>
            </div>
            {/* Wallet Value */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Total Wallet Value</h3>
              </div>
              <p className="text-3xl font-bold text-teal-400">{formatCurrency(userData.total_purchased || 0)}</p>
              <p className="text-gray-400 text-sm mt-1">Current Market Value</p>
            </div>
            {/* Buy More Tokens */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Expand Holdings</h3>
              </div>
              <button 
                onClick={openBuyModal}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Buy More Tokens
              </button>
              <p className="text-gray-400 text-sm mt-2 text-center">Secure & Instant Purchase</p>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-2">Transaction History</h2>
              <p className="text-gray-300">Track all your BYOC token purchases and transactions</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/80">
                  <tr>
                    <th className="text-left p-4 text-gray-300 font-semibold">Transaction ID</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Amount Paid</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Tokens Received</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Date & Time</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={transaction.id} className={`border-t border-gray-700 hover:bg-gray-800/30 transition-colors ${index % 2 === 0 ? 'bg-gray-800/10' : ''}`}>
                      <td className="p-4">
                        <span className="font-mono text-sm text-purple-400">{transaction.id}</span>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-white">{formatCurrency(transaction.amount)}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-teal-400 font-semibold">{formatNumber(transaction.tokens)} BYOC</span>
                      </td>
                      <td className="p-4">
                        <div className="text-white">
                          <div className="font-medium">{new Date(transaction.created_at).toLocaleDateString()}</div>
                          <div className="text-sm text-gray-400">{new Date(transaction.created_at).toLocaleTimeString()}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          transaction.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Buy More Tokens Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full">
            {/* Close button */}
            <button 
              onClick={closeBuyModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="8" cy="8" r="7"></circle>
                    <circle cx="16" cy="16" r="7"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Buy BYOC Tokens</h3>
                  <p className="text-gray-400 text-sm">Current Rate: ₹0.1 per BYOC</p>
                </div>
              </div>
            </div>
            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Enter Amount (INR)
                </label>
                <input
                  type="number"
                  value={buyAmount}
                  onChange={(e) => setBuyAmount(e.target.value)}
                  placeholder="Enter amount in INR"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  disabled={buyLoading}
                />
              </div>
              {buyAmount && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">You will receive:</span>
                    <span className="text-teal-400 font-bold">
                      {formatNumber(parseFloat(buyAmount)*10)} BYOC
                    </span>
                  </div>
                </div>
              )}
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={!buyAmount || parseFloat(buyAmount) <= 0 || buyLoading}
                onClick={handleBuyTokens}
              >
                {buyLoading ? 'Processing...' : 'Purchase Tokens'}
              </button>
              {buyError && <div className="text-red-500 text-center mt-2">{buyError}</div>}
              {buySuccess && <div className="text-green-400 text-center mt-2">{buySuccess}</div>}
            </div>
            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-teal-400 to-pink-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
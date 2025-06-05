import { useState } from 'react';

const UserDashboard = () => {
  // Sample user data
  const [userData] = useState({
    name: "Krish Goyal",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    walletId: "BYOC-WLT-8F7A2B9C",
    totalHolding: 25847.52,
    walletValue: 387712.80,
    coinName: "BYOC"
  });

  // Sample transaction data
  const [transactions] = useState([
    {
      id: "TXN-001-8B3F7A2E",
      amountPaid: 5000.00,
      tokensReceived: 3333.33,
      date: "2025-06-01",
      time: "14:30:25",
      status: "completed"
    },
    {
      id: "TXN-002-9C4G8B3F",
      amountPaid: 2500.00,
      tokensReceived: 1666.67,
      date: "2025-05-28",
      time: "09:15:42",
      status: "completed"
    },
    {
      id: "TXN-003-A5H9C4G8",
      amountPaid: 7500.00,
      tokensReceived: 5000.00,
      date: "2025-05-25",
      time: "16:45:18",
      status: "completed"
    },
    {
      id: "TXN-004-B6I0D5H9",
      amountPaid: 1000.00,
      tokensReceived: 666.67,
      date: "2025-05-22",
      time: "11:20:33",
      status: "pending"
    },
    {
      id: "TXN-005-C7J1E6I0",
      amountPaid: 3000.00,
      tokensReceived: 2000.00,
      date: "2025-05-20",
      time: "13:55:07",
      status: "completed"
    }
  ]);

  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyAmount, setBuyAmount] = useState('');

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

  return (
    <div className="min-h-screen bg-gray-900 bg-grid-pattern relative">
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
                <p className="text-white font-medium font-mono">{userData.walletId}</p>
              </div>
            </div>
          </div>

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
                <h3 className="text-lg font-semibold text-white">Total {userData.coinName} Holdings</h3>
              </div>
              <p className="text-3xl font-bold text-purple-400">{formatNumber(userData.totalHolding)}</p>
              <p className="text-gray-400 text-sm mt-1">{userData.coinName} Tokens</p>
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
              <p className="text-3xl font-bold text-teal-400">{formatCurrency(userData.walletValue)}</p>
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
                        <span className="font-semibold text-white">{formatCurrency(transaction.amountPaid)}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-teal-400 font-semibold">{formatNumber(transaction.tokensReceived)} BYOC</span>
                      </td>
                      <td className="p-4">
                        <div className="text-white">
                          <div className="font-medium">{transaction.date}</div>
                          <div className="text-sm text-gray-400">{transaction.time}</div>
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
                  <p className="text-gray-400 text-sm">Current Rate: ₹1.50 per BYOC</p>
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
                />
              </div>

              {buyAmount && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">You will receive:</span>
                    <span className="text-teal-400 font-bold">
                      {formatNumber(parseFloat(buyAmount) / 1.5)} BYOC
                    </span>
                  </div>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={!buyAmount || parseFloat(buyAmount) <= 0}>
                Purchase Tokens
              </button>
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
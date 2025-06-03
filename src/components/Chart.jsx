import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BYOCPriceChart = () => {
  const [priceData, setPriceData] = useState([]);
  const [timeframe, setTimeframe] = useState('1M');
  
  // Deterministic random number generator using seed
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  // Generate consistent price data based on date (only up to current date)
  const generatePriceData = (days) => {
    const startDate = new Date('2025-04-01'); // April 1st, 2025
    const today = new Date(); // Get current system date
    today.setHours(23, 59, 59, 999); // Set to end of today to include full day
    
    const data = [];
    let currentPrice = 0.05; // Starting price ₹0.01
    
    // Calculate how many days from start date to today
    const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Don't generate data beyond today or beyond requested timeframe
    const maxDays = Math.min(days, daysSinceStart + 1);
    
    // If start date is in future, return empty array
    if (daysSinceStart < 0) {
      return [];
    }
    
    for (let i = 0; i < maxDays; i++) {
      const dateForPrice = new Date(startDate);
      dateForPrice.setDate(startDate.getDate() + i);
      
      // Don't generate data for future dates
      if (dateForPrice > today) {
        break;
      }
      
      // Use date as seed for consistent randomness
      const seed = dateForPrice.getTime() / 86400000; // Convert to days since epoch
      const random1 = seededRandom(seed);
      const random2 = seededRandom(seed + 0.5);
      const random3 = seededRandom(seed + 1.0);
      
      // More realistic volatility with negative bias some days
      let dailyChange;
      
      // Create patterns: 40% chance negative, 60% chance positive
      if (random1 < 0.4) {
        // Negative day: -0.5% to -3%
        dailyChange = -0.005 - (random2 * 0.025);
      } else {
        // Positive day: 0.2% to 3%
        dailyChange = 0.002 + (random2 * 0.028);
      }
      
      // Add some momentum and cycles
      const cycleFactor = Math.sin(i * 0.15) * 0.005; // Smaller cycles
      const momentumFactor = Math.sin(i * 0.05) * 0.008; // Longer trends
      
      dailyChange += cycleFactor + momentumFactor;
      
      // Cap daily changes to max ±3%
      dailyChange = Math.max(-0.03, Math.min(0.03, dailyChange));
      
      // Apply the change
      currentPrice = currentPrice * (1 + dailyChange);
      
      // Prevent price from going too low
      if (currentPrice < 0.005) {
        currentPrice = 0.005 + (random3 * 0.003);
      }
      
      const formattedDate = dateForPrice.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short'
      });
      
      data.push({
        date: formattedDate,
        price: parseFloat(currentPrice.toFixed(6)),
        timestamp: dateForPrice.getTime(),
        change: i > 0 ? ((currentPrice - data[i-1]?.price) / data[i-1]?.price * 100) : 0
      });
    }
    
    return data;
  };
  
  useEffect(() => {
    const today = new Date();
    const startDate = new Date('2025-04-01');
    
    // Calculate total available days from start to today (inclusive)
    const totalAvailableDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
    
    // Get the requested days for the timeframe
    const requestedDays = timeframe === '7D' ? 7 : timeframe === '1M' ? 30 : timeframe === '3M' ? 90 : 180;
    
    // Generate ALL historical data first
    const allData = generatePriceData(totalAvailableDays);
    
    // For 3M and 6M, if we don't have enough data, show all available data
    // Otherwise, slice to show only the requested timeframe (last N days)
    let filteredData;
    if ((timeframe === '3M' || timeframe === '6M') && totalAvailableDays < requestedDays) {
      filteredData = allData; // Show all available data
    } else {
      filteredData = allData.slice(-requestedDays);
    }
    
    setPriceData(filteredData);
  }, [timeframe]);
  
  const currentPrice = priceData[priceData.length - 1]?.price || 0.01;
  const previousPrice = priceData[priceData.length - 2]?.price || 0.01;
  const priceChange = currentPrice - previousPrice;
  const percentChange = (priceChange / previousPrice) * 100;
  
  const formatPrice = (price) => `₹${price.toFixed(6)}`;
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-medium">{label}</p>
          <p className="text-purple-400">
            Price: {formatPrice(data.price)}
          </p>
          <p className={`text-sm ${data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            Change: {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 mt-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <h2 className="text-2xl font-bold text-white">BYOC Token</h2>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">
              {formatPrice(currentPrice)}
            </span>
            <span className={`text-lg font-medium ${percentChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {percentChange >= 0 ? '+' : ''}{percentChange.toFixed(2)}%
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Live as of {new Date().toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })} • {Math.floor((new Date() - new Date('2025-04-01')) / (1000 * 60 * 60 * 24)) + 1} days since launch
          </p>
        </div>
        
        {/* Timeframe Selector */}
        <div className="flex bg-gray-800 rounded-lg p-1 mt-4 md:mt-0">
          {['7D', '1M', '3M', '6M'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeframe === period
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Past {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              fontSize={12}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              domain={['dataMin * 0.95', 'dataMax * 1.05']}
              tickFormatter={(value) => `₹${value.toFixed(4)}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="url(#gradient)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#8B5CF6' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Market Cap</p>
          <p className="text-white font-bold">₹{(currentPrice * 100000000).toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">24h Volume</p>
          <p className="text-white font-bold">₹{(currentPrice * 1250000).toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">All-Time High</p>
          <p className="text-white font-bold">{formatPrice(Math.max(...priceData.map(d => d.price)))}</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Circulating Supply</p>
          <p className="text-white font-bold">100M BYOC</p>
        </div>
      </div>

      {/* Disclaimer */}
      {/* <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
        <p className="text-yellow-400 text-sm">
          ⚠️ This chart displays simulated price data for demonstration purposes. 
          Actual token performance may vary significantly from projections shown.
        </p>
      </div> */}
    </div>
  );
};

export default BYOCPriceChart;
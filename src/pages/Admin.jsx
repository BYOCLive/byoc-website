import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = 'https://byoc-backend-xemb.onrender.com/api/admin';

const TABS = [
  { key: 'waitlist', label: 'Waitlist Entries' },
  { key: 'users', label: 'Users' },
  { key: 'transactions', label: 'Transactions' },
  { key: 'contact', label: 'Contact Messages' },
];

function Admin() {
  const [tab, setTab] = useState('waitlist');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [auth, setAuth] = useState(!!localStorage.getItem('admin_token'));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) fetchData(tab);
    // eslint-disable-next-line
  }, [tab, auth]);

  const fetchData = async (type) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/${type}`, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('admin_token') }
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Failed to fetch');
      setData(json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoginError('');
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Login failed');
      localStorage.setItem('admin_token', json.token);
      setAuth(true);
    } catch (err) {
      setLoginError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setAuth(false);
    setUsername('');
    setPassword('');
    setData([]);
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        {/* Top right Home button */}
        <button
            onClick={() => navigate('/')}
            className="absolute top-6 right-6 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-900/30 font-medium py-2 px-6 rounded-full transition-colors z-10"
        >
            Home
        </button>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-xs">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="w-full mb-6 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none" 
            required 
          />
          {loginError && <div className="text-red-400 mb-4 text-center text-sm">{loginError}</div>}
          <button 
            type="button"
            onClick={handleLogin} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition-colors"
          >
            Login
          </button>
          <div className="text-gray-400 text-xs mt-4 text-center">
            Enter your admin credentials
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col flex-shrink-0">
        <div className="p-6 text-2xl font-bold text-white border-b border-gray-700">Admin Panel</div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {TABS.map(t => (
            <button 
              key={t.key} 
              onClick={() => setTab(t.key)} 
              className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                tab === t.key 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 p-4 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {TABS.find(t => t.key === tab).label}
          </h1>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 md:px-6 rounded transition-colors"
          >
            Logout
          </button>
        </div>
        
        <div className="flex-1 min-h-0">
          {loading ? (
            <div className="text-white text-center py-8">Loading...</div>
          ) : error ? (
            <div className="text-red-400 text-center py-8 bg-gray-800 rounded-xl border border-red-500">
              {error}
            </div>
          ) : (
            <div className="h-full flex flex-col bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              {data.length === 0 ? (
                <div className="text-gray-400 text-center py-8">No data found.</div>
              ) : (
                <>
                  {/* Table Container with Custom Scrollbars */}
                  <div className="flex-1 overflow-auto" style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#4B5563 #1F2937'
                  }}>
                    <style jsx>{`
                      .table-container::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                      }
                      .table-container::-webkit-scrollbar-track {
                        background: #1F2937;
                      }
                      .table-container::-webkit-scrollbar-thumb {
                        background: #4B5563;
                        border-radius: 4px;
                      }
                      .table-container::-webkit-scrollbar-thumb:hover {
                        background: #6B7280;
                      }
                      .table-container::-webkit-scrollbar-corner {
                        background: #1F2937;
                      }
                    `}</style>
                    <div className="table-container">
                      <table className="w-full min-w-max">
                        <thead className="sticky top-0 z-10">
                          <tr>
                            {data[0] && Object.keys(data[0]).map(key => (
                              <th 
                                key={key} 
                                className="px-4 py-3 text-left text-gray-300 bg-gray-700 font-semibold text-sm uppercase tracking-wider border-b border-gray-600 whitespace-nowrap"
                              >
                                {key.replace('_', ' ')}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, i) => (
                            <tr 
                              key={i} 
                              className="border-b border-gray-700 hover:bg-gray-750 transition-colors"
                            >
                              {Object.values(row).map((val, j) => (
                                <td 
                                  key={j} 
                                  className="px-4 py-3 text-gray-200 text-sm whitespace-nowrap"
                                  title={String(val)} // Tooltip for long content
                                >
                                  <div className="max-w-xs truncate">
                                    {String(val)}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Table Info Footer */}
                  <div className="px-4 py-3 bg-gray-750 border-t border-gray-700 text-gray-400 text-sm">
                    Showing {data.length} {data.length === 1 ? 'entry' : 'entries'}
                    <span className="ml-4 text-xs">
                      💡 Scroll horizontally and vertically to view all data
                    </span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Admin;
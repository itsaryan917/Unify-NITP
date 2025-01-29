import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    console.log('Login Data:', formData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-white to-sky-600 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-6xl px-6 gap-8">
        {/* Right Section: Glass Effect Box */}
        <div className="relative backdrop-blur-md bg-white/20 border border-white/30 p-8 rounded-3xl shadow-3xl w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-white to-sky-400 opacity-40 rounded-3xl transform rotate-2 scale-105 -z-10 transition-all"></div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center font-serif">UNIFY</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-blue-900 text-lg font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-white/60 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-sky-400 shadow-lg"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-900 text-lg font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-white/60 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-sky-400 shadow-lg"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button
                className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-xl hover:scale-105 transform transition-transform focus:outline-none focus:ring-4 focus:ring-sky-500"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-between">
              <a
                className="text-sm text-blue-700 hover:text-blue-900 font-medium underline"
                href="#"
              >
                Forgot Password?
              </a>
              <a
                className="text-sm text-blue-700 hover:text-blue-900 font-medium underline"
                href="#"
              >
                Create New Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

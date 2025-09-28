import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Welcome to <span className="text-blue-600">SAGARSETU</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            A crowdsourced platform for ocean safety and disaster awareness.
          </p>
        </header>

        {/* Panels */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* User Panel */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-200 text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 overflow-hidden">
                <img
                  src="https://img.icons8.com/?size=100&id=83190&format=png&color=339AF0"
                  alt="User Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">User Panel</h2>
              <p className="text-gray-600 leading-relaxed">
                For citizens and coastal residents. Report hazards, track alerts.
              </p>
            </div>
            <Link
              to="/user-login"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              User Login / Sign Up
            </Link>
          </div>

          {/* Admin Panel */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-200 text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 overflow-hidden">
                <img
                  src="https://img.icons8.com/?size=100&id=83190&format=png&color=94D82D"
                  alt="Admin Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Panel</h2>
              <p className="text-gray-600 leading-relaxed">
                For disaster managers and officials. Access analytics, manage reports.
              </p>
            </div>
            <Link
              to="/admin-login"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition inline-block"
            >
              Admin Login / Sign Up
            </Link>
          </div>
        </div>

        {/* Active Alert */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 flex items-center gap-4 shadow-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">!</div>
            <div className="text-center flex-1">
              <p className="text-yellow-800 font-semibold">
                <span className="font-bold">Active Alert:</span> High tide warning in effect for 48 hours.
              </p>
              <p className="text-yellow-700 text-sm mt-1">
                Please stay cautious and avoid risky coastal activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

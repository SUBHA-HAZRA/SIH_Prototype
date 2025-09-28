import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (username && password) {
      // Redirect to /admin-dashboard
      navigate("/admin-dashboard");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        {/* User Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-cyan-400 border-4 border-white shadow-md mb-4 overflow-hidden mx-auto transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://img.icons8.com/?size=100&id=83190&format=png&color=94D82D"
              alt="Admin Icon"
              className="w-20 h-22 object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            Admin Login
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Access your admin dashboard to manage the system.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-500"
          />

          <div className="flex items-center justify-between text-sm text-gray-700">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-cyan-500 border-gray-300 rounded"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-cyan-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or continue with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg border border-gray-300 flex items-center justify-center space-x-3 transition"
        >
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google Logo"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        <div className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <a href="#" className="text-cyan-600 hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

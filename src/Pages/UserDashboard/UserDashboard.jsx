import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaUserCircle, FaFileAlt, FaUser, FaBars, FaTimes } from "react-icons/fa";

const UserDashboard = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isActive = (path) => location.pathname.includes(path);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex h-screen bg-[#EAE8FF] relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-[#F1F5F9] text-black shadow-lg z-50 transform transition-transform duration-300
          w-64 flex flex-col
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:z-auto md:rounded-2xl md:my-1
        `}
      >
        {/* Logo & Welcome */}
        <div className="p-6 border-b border-gray-300 flex items-center gap-3">
          <FaUserCircle className="text-3xl text-indigo-500" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-sm text-gray-600 mt-1">Welcome back</p>
          </div>
          {/* Close Button on Mobile */}
          <button
            className="md:hidden p-1 rounded-md hover:bg-gray-200 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-6 gap-2 px-3 flex-1">
          <Link
            to="my-reports"
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300
              ${
                isActive("my-reports")
                  ? "bg-[#D8DBF0] text-black font-semibold"
                  : "text-black hover:bg-[#D8DBF0]"
              }
            `}
          >
            <FaFileAlt /> My Reports
          </Link>

          <Link
            to="profile"
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300
              ${
                isActive("profile")
                  ? "bg-[#D8DBF0] text-black font-semibold"
                  : "text-black hover:bg-[#D8DBF0]"
              }
            `}
          >
            <FaUser /> Profile
          </Link>

          {/* Logout Button */}
          <div className="mt-auto p-1 mb-4">
            <button className="w-full py-3 px-4 bg-[#D8DBF0] text-black rounded-lg font-semibold hover:bg-[#C0C4E0] transition-colors duration-300 flex items-center justify-center gap-2">
              <FaUserCircle /> Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#EAE8FF] min-w-0">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between bg-white p-4 shadow-sm border-b border-gray-200">
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars className="text-xl text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <div className="h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
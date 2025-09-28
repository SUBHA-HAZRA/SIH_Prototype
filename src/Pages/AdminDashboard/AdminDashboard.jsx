import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaUserCircle,
  FaChartBar,
  FaFileAlt,
  FaMapMarkedAlt,
  FaBell,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import floodImage from "../../assets/AppLogo.jpg";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar for mobile (above navbar) */}
      <aside
        className={`sm:hidden fixed top-0 left-0 w-full bg-[#F1F5F9] text-black p-4 z-50 shadow-lg transition-transform duration-300 ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg tracking-tight font-bold">NAVIGATION</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaChartBar /> Analytics
          </NavLink>
          <NavLink
            to="reports"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaFileAlt /> Reports
          </NavLink>
          <NavLink
            to="map"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaMapMarkedAlt /> Map
          </NavLink>
          <NavLink
            to="alerts"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaBell /> Alerts
          </NavLink>

          <NavLink
            to="profile"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <FaUser /> Profile
          </NavLink>

          <NavLink
            to="/"
            className="w-full py-3 px-4 bg-[#D8DBF0] text-black rounded-lg font-semibold hover:bg-[#C0C4E0] transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
          >
            <FaUserCircle /> Logout
          </NavLink>
        </nav>
      </aside>

      {/* Navbar */}
      <header className="relative flex items-center bg-white text-gray-800 px-4 py-3 shadow-md sticky top-0 z-40 border-b border-gray-200">
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-gray-700 mr-3"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars className="h-6 w-6" />
        </button>

        {/* Logo (hidden on mobile) */}
        <div className="hidden sm:flex items-center space-x-2">
          <img
            src={floodImage}
            alt="App Logo"
            className="h-10 w-10 rounded-lg object-cover shadow-sm"
          />
          <span className="font-bold text-lg sm:text-xl">SagarSetu</span>
        </div>

        {/* Centered Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-semibold text-gray-900">
          Dashboard Overview
        </h1>

        {/* Profile Section */}
        <div className="ml-auto flex items-center space-x-3">
          <span className="hidden sm:block font-medium text-gray-700">
            Admin
          </span>
          <FaUserCircle className="h-8 w-8 text-gray-700" />
        </div>
      </header>

      {/* Body: Sidebar + Main Content for desktop */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar desktop */}
        <aside className="hidden sm:flex w-64 bg-[#F1F5F9] text-black p-4 flex-col h-[calc(100vh-64px)] shadow-lg rounded-r-2xl">
          <div className="flex items-center gap-3 p-4 border-b border-gray-300 mb-4">
            <h2 className="text-lg tracking-tight">NAVIGATION</h2>
          </div>
          <nav className="flex flex-col gap-2 flex-1 px-1">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
                }`
              }
            >
              <FaChartBar /> Analytics
            </NavLink>
            <NavLink
              to="reports"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
                }`
              }
            >
              <FaFileAlt /> Reports
            </NavLink>
            <NavLink
              to="map"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
                }`
              }
            >
              <FaMapMarkedAlt /> Map
            </NavLink>
            <NavLink
              to="alerts"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
                }`
              }
            >
              <FaBell /> Alerts
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-[#C0C4E0]" : "hover:bg-[#D8DBF0]"
                }`
              }
            >
              <FaUser /> Profile
            </NavLink>

            <NavLink
              to="/"
              className="w-full py-3 px-4 bg-[#D8DBF0] text-black rounded-lg font-semibold hover:bg-[#C0C4E0] transition-colors duration-300 flex items-center justify-center gap-2 mt-auto"
            >
              <FaUserCircle /> Logout
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-2 bg-gray-100 overflow-y-auto h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

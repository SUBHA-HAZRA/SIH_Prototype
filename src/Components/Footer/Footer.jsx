import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Report Hazard", path: "/report-hazard" },
    { name: "View Map", path: "/view-map" },
    { name: "Hazard News", path: "/hazard-news" },
    { name: "User Dashboard", path: "/user-dashboard" },
  ];

  return (
    <footer className="bg-white/90 backdrop-blur-md shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-6 space-y-4">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {link.name}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-200 my-2"></div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} SagarSetu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

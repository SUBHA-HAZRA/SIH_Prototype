import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import floodImage from "../../assets/AppLogo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Report Hazard", path: "/report-hazard" },
    { name: "View Map", path: "/view-map" },
    { name: "Hazard News", path: "/hazard-news" },
    { name: "User Dashboard", path: "/user-dashboard" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-md shadow'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <img
                src={floodImage}
                alt="App Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 whitespace-nowrap">
                SagarSetu
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname.includes(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative group font-medium px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-3 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-[calc(100%-24px)]" : "w-0 group-hover:w-[calc(100%-24px)]"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Side (Desktop) */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <div className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-300 px-3 py-2 rounded-md hover:bg-blue-50">
                <FaGlobe className="text-sm" />
                <span className="hidden lg:inline">English</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <FaBars 
                  className={`absolute inset-0 text-xl text-gray-700 transition-all duration-300 ${
                    menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <FaTimes 
                  className={`absolute inset-0 text-xl text-gray-700 transition-all duration-300 ${
                    menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col py-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname.includes(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`font-medium text-base sm:text-lg px-4 py-3 rounded-lg transition-all duration-300 transform ${
                        menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      } ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      style={{
                        transitionDelay: menuOpen ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className={`flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-all duration-300 px-4 py-3 rounded-lg hover:bg-blue-50 transform ${
                    menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${navLinks.length * 50}ms` : '0ms'
                  }}>
                    <FaGlobe />
                    <span>English</span>
                  </div>
                  
                  <button className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 transform hover:shadow-lg ${
                    menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${(navLinks.length + 1) * 50}ms` : '0ms'
                  }}
                  onClick={() => setMenuOpen(false)}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
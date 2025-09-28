import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // Hide footer on dashboard pages
  const hideFooter = location.pathname.startsWith("/user-dashboard");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

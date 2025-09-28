import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ReportHazard from "./Pages/ReportHazard/ReportHazard";
import ViewMap from "./Pages/ViewMap/ViewMap";
import HazardNews from "./Pages/HazardNews/HazardNews";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import Profile from "./Pages/Profile/Profile";
import MyReports from "./Pages/MyReports/MyReports";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import UserLoginPage from "./Pages/UserLoginPage/UserLoginPage";
import AdminLoginPage from "./Pages/AdminLoginPage/AdminLoginPage";
import MainLayout from "./MainLayout";

import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import { Alerts, Analytics, Map, Reports } from "./NestedPages/index";

const App = () => {
  return (
    // <Router>
    //   <div className="flex flex-col min-h-screen">
    //     <Navbar />
    //     <LandingPage/>
    //     <UserLoginPage/>
    //     <AdminLoginPage/>

    //     {/* Main content grows to fill space */}
    //     <div className="flex-1">
    //       <Routes>
    //         <Route path="/" element={<Navigate to="/home" />} />
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/report-hazard" element={<ReportHazard />} />
    //         <Route path="/view-map" element={<ViewMap />} />
    //         <Route path="/hazard-news" element={<HazardNews />} />

    //         {/* User Dashboard with nested routes */}
    //         <Route path="/user-dashboard" element={<UserDashboard />}>
    //           <Route index element={<MyReports />} /> {/* default */}
    //           <Route path="my-reports" element={<MyReports />} />
    //           <Route path="profile" element={<Profile />} />
    //         </Route>
    //       </Routes>
    //     </div>

    //     {/* Footer stays at bottom */}
    //     <Footer />
    //   </div>
    // </Router>

    <Router>
      <Routes>
        {/* Auth / No Navbar Footer */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* Admin Dashboard (no Navbar/Footer) */}

        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
          <Route path="map" element={<Map />} />
          <Route path="alerts" element={<Alerts />} />
          <Route
            path="profile"
            element={
              <Profile
                title="Admin Profile"
                name="Subha Hazra"
                image="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg?w=768"
                joined="2025"
              />
            }
          />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>

        {/* Main layout (Navbar + Footer around pages) */}
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/report-hazard" element={<ReportHazard />} />
          <Route path="/view-map" element={<ViewMap />} />
          <Route path="/hazard-news" element={<HazardNews />} />

          {/* Nested User Dashboard */}
          <Route path="/user-dashboard" element={<UserDashboard />}>
            <Route index element={<MyReports />} /> {/* default page */}
            <Route path="my-reports" element={<MyReports />} />
            <Route
              path="profile"
              element={
                <Profile
                  title="User Profile"
                  name="Aarav Sharma"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&s"
                  joined="2025"
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import ReportHazard from './Pages/ReportHazard/ReportHazard'
import ViewMap from './Pages/ViewMap/ViewMap'
import HazardNews from './Pages/HazardNews/HazardNews'
import UserDashboard from './Pages/UserDashboard/UserDashboard'
import Profile from './Pages/Profile/Profile'
import MyReports from './Pages/MyReports/MyReports'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content grows to fill space */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/report-hazard" element={<ReportHazard />} />
            <Route path="/view-map" element={<ViewMap />} />
            <Route path="/hazard-news" element={<HazardNews />} />

            {/* User Dashboard with nested routes */}
            <Route path="/user-dashboard" element={<UserDashboard />}>
              <Route index element={<MyReports />} /> {/* default */}
              <Route path="my-reports" element={<MyReports />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  )
}

export default App

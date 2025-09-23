import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaFire,
  FaExclamationTriangle,
  FaExclamationCircle,
} from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import HomeCard from "../../Components/HomeCard/HomeCard";
import TweetCard from "../../Components/TweetCard/TweetCard";

const Home = () => {
  const topics = [
    { name: "All", bg: "bg-blue-100", text: "text-blue-800" },
    { name: "Floods", bg: "bg-red-100", text: "text-red-800" },
    { name: "Tsunami", bg: "bg-purple-100", text: "text-purple-800" },
    { name: "Coastal Erosion", bg: "bg-cyan-100", text: "text-cyan-800" },
    { name: "Marine Pollution", bg: "bg-green-100", text: "text-green-800" },
    { name: "Storm Surge", bg: "bg-yellow-100", text: "text-yellow-800" },
  ];

  const alerts = [
    {
      severity: "Critical",
      message: "Tsunami warning in coastal areas!",
      color: "bg-red-500 text-white",
      border: "border-red-400",
    },
    {
      severity: "High",
      message: "Heavy rainfall expected tomorrow.",
      color: "bg-orange-400 text-white",
      border: "border-orange-300",
    },
    {
      severity: "Medium",
      message: "Moderate flooding in Sundarbans region.",
      color: "bg-yellow-400 text-black",
      border: "border-yellow-300",
    },
    {
      severity: "Low",
      message: "Strong winds along the coastline.",
      color: "bg-green-400 text-white",
      border: "border-green-300",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EAE8FF]">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trending Hazard News */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Icon with colored background */}
              <span className="bg-red-100 text-red-600 p-3 rounded-full flex items-center justify-center shadow-md">
                <FaExclamationCircle className="w-5 h-5" />
              </span>

              {/* Header Text */}
              <h1 className="text-4xl font-extrabold text-gray-900 relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-yellow-400 after:rounded-full after:mt-2">
                Trending Hazard News
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Flood in Digha Card */}
              <HomeCard
                title="Flood in Digha"
                description="Moderate flooding reported after heavy rain in Digha."
                image="https://d2gsigjpujdc9o.cloudfront.net/images/locations/places/1628685308_digha-destination-img3.jpg"
                severity="Medium"
                severityColor="bg-yellow-400 text-yellow-900"
              />

              {/* Flood in Sundarban Card */}
              <HomeCard
                title="Flood in Sundarban"
                description="Heavy rain has caused severe flooding in Sundarbans."
                image="https://map.sahapedia.org/admin/assets/images/2021082117350082002.jpg"
                severity="Severe"
                severityColor="bg-red-400 text-red-900"
              />
            </div>
          </div>

          {/* Social Media Trends */}
          <div className="border-2 border-gray-200 bg-white shadow-lg rounded-3xl p-6 ">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              {/* Title */}
              <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                <span className="bg-gradient-to-tr from-blue-400 to-purple-400 text-white p-3 rounded-full flex items-center justify-center shadow-md">
                  <FaChartLine className="w-5 h-5" />
                </span>
                SOCIAL MEDIA TRENDS
              </h2>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search feed..."
                  className="pl-10 w-full py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition shadow-sm"
                />
              </div>
            </div>

            {/* Tweets */}
            <div className="space-y-4">
              <TweetCard
                profileImage="https://i.pravatar.cc/100?img=5"
                name="Sarah M."
                username="sarahm"
                time="2h"
                text="Just saw a massive rip current at South Beach! Be careful out there, folks."
                hashtags={["OceanSafety", "SouthBeach", "RipCurrent"]}
                comments={12}
                retweets={27}
                likes={156}
                sourceName="Twitter"
                sourceLogo="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
              />

              <TweetCard
                profileImage="https://i.pravatar.cc/100?img=8"
                name="John D."
                username="john_d"
                time="5h"
                text="Crazy wind speeds today near the coast. Stay safe everyone!"
                hashtags={["OceanSafety", "BeachSafety"]}
                comments={5}
                retweets={14}
                likes={98}
                sourceName="Twitter"
                sourceLogo="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
              />
            </div>

            {/* Trending Topics */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-gray-800 text-lg">
                  Trending Topics
                </span>
                <FaFire className="text-red-500 w-5 h-5" />
              </div>

              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <span
                    key={topic.name}
                    className={`${topic.bg} ${topic.text} px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:scale-105 transform transition shadow-sm`}
                  >
                    {topic.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="border-2 border-gray-300 bg-white shadow-lg rounded-3xl p-6 max-w-md mx-auto">
            {/* Header */}
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-800">
              <FaExclamationTriangle className="text-yellow-500 w-5 h-5" />
              Alerts
            </h2>

            {/* Alerts List */}
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-4 border ${alert.border} rounded-xl shadow-sm bg-white hover:shadow-md transition`}
                >
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold w-fit mb-2 ${alert.color}`}
                  >
                    {alert.severity}
                  </span>
                  <p className="text-sm font-medium text-gray-800">
                    {alert.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="border-2 border-gray-300 bg-white shadow-md rounded-3xl p-4">
            {/* Search Bar */}
            <div className="relative mb-4">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search location"
                className="pl-10 w-full py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Map Image Placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://www.bluebird-electric.net/oceanography/ocean_pictures/arabian-sea-bay-bengal-south-china-indian-ocean-google-maps.jpg"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

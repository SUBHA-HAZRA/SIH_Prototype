import React, { useState } from "react";
import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaUpload,
  FaChevronDown,
} from "react-icons/fa";
import { VscFileMedia } from "react-icons/vsc";

const ReportHazard = () => {
  const [location, setLocation] = useState("");
  const [offlineMode, setOfflineMode] = useState(false);

  const handleAutoGeotag = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude.toFixed(5)}, Lon: ${longitude.toFixed(5)}`);
        },
        (error) => {
          alert("Unable to fetch location. Please enter manually.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleOfflineToggle = () => setOfflineMode(!offlineMode);

  return (
    // #EAE8FF
    <div className="bg-[#EAE8FF] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaExclamationTriangle className="text-purple-600 text-4xl md:text-5xl" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Report a Hazard
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Help keep our coastlines safe by reporting hazards you encounter. Upload photos or videos to help authorities respond faster and more effectively.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-4/8 border border-gray-300 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
                required
              />
            </div>

            {/* Location & Hazard Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location or auto-geotag"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 text-sm md:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
                  />
                  <FaMapMarkerAlt
                    onClick={handleAutoGeotag}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 h-5 w-5 cursor-pointer hover:text-red-700 transition-colors"
                    title="Auto-geotag location"
                  />
                </div>
              </div>

              {/* Hazard Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Hazard Type</label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="" disabled selected>Select hazard type</option>
                    <option value="debris">Debris</option>
                    <option value="erosion">Coastal Erosion</option>
                    <option value="pollution">Water Pollution</option>
                    <option value="wildlife">Wildlife Hazard</option>
                    <option value="weather">Weather Related</option>
                    <option value="infrastructure">Infrastructure Damage</option>
                    <option value="other">Other</option>
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                rows={5}
                placeholder="Describe the hazard in detail..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm resize-none"
              />
            </div>

            {/* Media Upload & Offline Mode */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Media Upload */}
              <div className="lg:col-span-2">
                <label className="text-gray-700 font-medium flex items-center gap-2 mb-2">
                  <VscFileMedia className="h-4 w-4 text-gray-600"/>
                  Media Upload
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50"
                  onClick={() => document.getElementById("media-upload").click()}
                >
                  <FaUpload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm md:text-base">Upload a file or drag & drop</p>
                  <p className="text-gray-500 text-xs mt-1">Photo & video up to 10MB. Helps authorities assess hazards faster.</p>
                  <input id="media-upload" type="file" className="hidden" accept="image/*,.pdf,.mp4" multiple />
                </div>
              </div>

              {/* Offline Mode Toggle */}
              <div className="flex flex-col items-start lg:items-end justify-center space-y-2">
                <div className="flex items-center space-x-3">
                  <label className="text-gray-700 font-medium">Offline Mode</label>
                  <button
                    type="button"
                    onClick={handleOfflineToggle}
                    className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ${offlineMode ? "bg-purple-600 justify-end" : "bg-gray-300 justify-start"}`}
                  >
                    <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
                  </button>
                </div>
                <p className="text-gray-500 text-xs text-right">Enable offline mode to save the report locally when there’s no internet.</p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-10 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-base transition-colors shadow-lg"
              >
                Submit Report
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportHazard;

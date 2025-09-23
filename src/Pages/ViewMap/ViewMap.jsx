import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaExclamationTriangle, FaCheckCircle, FaSearch, FaFilter, FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToString } from "react-dom/server";

const dangerZones = [
  { id: 1, name: "Zone A - Downtown Flood Risk", lat: 28.6139, lng: 77.209, level: "high", type: "flood", lastUpdated: "2 hours ago" },
  { id: 2, name: "Zone B - Riverside Park", lat: 28.7041, lng: 77.1025, level: "low", type: "flood", lastUpdated: "1 day ago" },
  { id: 3, name: "Zone C - Industrial Area", lat: 28.5355, lng: 77.391, level: "high", type: "earthquake", lastUpdated: "30 minutes ago" },
  { id: 4, name: "Zone D - Residential District", lat: 28.6500, lng: 77.2300, level: "medium", type: "flood", lastUpdated: "3 hours ago" },
  { id: 5, name: "Zone E - Airport Vicinity", lat: 28.5562, lng: 77.1000, level: "low", type: "cyclone", lastUpdated: "5 hours ago" },
];

const ViewMap = () => {
  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredZones = dangerZones.filter((zone) => {
    const matchesSearch = zone.name.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = filterLevel === "all" || zone.level === filterLevel;
    const matchesType = filterType === "all" || zone.type === filterType;
    return matchesSearch && matchesLevel && matchesType;
  });

  // Function to create custom marker icon with React Icon
  const createCustomIcon = (icon, color, level) => {
    const iconHtml = renderToString(
      <div 
        className={`flex items-center justify-center text-lg font-bold rounded-full border-2 shadow-lg
          ${level === 'high' ? 'bg-red-100 border-red-500 text-red-600' : 
            level === 'medium' ? 'bg-yellow-100 border-yellow-500 text-yellow-600' : 
            'bg-green-100 border-green-500 text-green-600'}
        `}
        style={{ width: '32px', height: '32px' }}
      >
        {icon}
      </div>
    );

    return L.divIcon({
      className: "custom-marker-icon",
      html: iconHtml,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'flood': return '🌊';
      case 'earthquake': return '🌍';
      case 'cyclone': return '🌀';
      default: return '⚠️';
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600 font-medium">Loading hazard map...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Hazard Map
              </h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Monitor real-time hazard zones and safety levels in your area
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search zones..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-500 text-sm" />
                <select
                  className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="high">High Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="low">Low Risk</option>
                </select>
              </div>

              <select
                className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="flood">Flood</option>
                <option value="earthquake">Earthquake</option>
                <option value="cyclone">Cyclone</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Zone Statistics Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zone Statistics</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">High Risk</span>
                  </div>
                  <span className="text-sm font-bold text-red-600">
                    {dangerZones.filter(z => z.level === 'high').length}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Medium Risk</span>
                  </div>
                  <span className="text-sm font-bold text-yellow-600">
                    {dangerZones.filter(z => z.level === 'medium').length}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Low Risk</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">
                    {dangerZones.filter(z => z.level === 'low').length}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Showing {filteredZones.length} of {dangerZones.length} zones
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌊</span>
                  <span className="text-sm text-gray-600">Flood Risk</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌍</span>
                  <span className="text-sm text-gray-600">Earthquake Risk</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌀</span>
                  <span className="text-sm text-gray-600">Cyclone Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-[400px] sm:h-[500px] lg:h-[600px] relative">
                <MapContainer
                  center={[28.6139, 77.209]}
                  zoom={11}
                  className="h-full w-full"
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {filteredZones.map((zone) => (
                    <Marker
                      key={zone.id}
                      position={[zone.lat, zone.lng]}
                      icon={createCustomIcon(
                        zone.level === "high" ? <FaExclamationTriangle /> : <FaCheckCircle />,
                        zone.level === "high" ? "red" : zone.level === "medium" ? "orange" : "green",
                        zone.level
                      )}
                    >
                      <Popup className="custom-popup">
                        <div className="p-2 min-w-[200px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{getTypeIcon(zone.type)}</span>
                            <h3 className="font-semibold text-gray-900">{zone.name}</h3>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Risk Level:</span>
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(zone.level)}`}>
                                {zone.level.toUpperCase()}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Type:</span>
                              <span className="text-sm font-medium capitalize">{zone.type}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Last Updated:</span>
                              <span className="text-sm text-gray-500">{zone.lastUpdated}</span>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>

                {filteredZones.length === 0 && (
                  <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                    <div className="text-center">
                      <FaSearch className="text-4xl text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">No zones match your search criteria</p>
                      <p className="text-gray-500 text-sm">Try adjusting your filters</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for map styling */}
      <style jsx>{`
        .custom-marker-icon {
          background: none !important;
          border: none !important;
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
        }
        
        .custom-popup .leaflet-popup-tip {
          background: white !important;
        }
        
        .leaflet-container {
          font-family: inherit !important;
        }
      `}</style>
    </div>
  );
};

export default ViewMap;
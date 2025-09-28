import { useState } from "react";
import {
  Filter,
  MapPin,
  Calendar,
  AlertTriangle,
  Info,
  Eye,
} from "lucide-react";

const Map = () => {
  const [dangerReports] = useState([
    {
      id: 1,
      location: "North Atlantic",
      coordinates: { lat: 45, lng: -30 },
      eventType: "Hurricane",
      dangerLevel: "severe",
      status: "Active",
      reportedDate: "2024-09-25",
      description: "Category 4 hurricane with 140mph winds",
    },
    {
      id: 2,
      location: "Pacific Northwest",
      coordinates: { lat: 50, lng: -135 },
      eventType: "Tsunami Warning",
      dangerLevel: "warning",
      status: "Monitoring",
      reportedDate: "2024-09-26",
      description: "Seismic activity detected, potential tsunami risk",
    },
    {
      id: 3,
      location: "Mediterranean Sea",
      coordinates: { lat: 35, lng: 15 },
      eventType: "Oil Spill",
      dangerLevel: "warning",
      status: "Contained",
      reportedDate: "2024-09-20",
      description: "Large oil spill from cargo vessel, cleanup in progress",
    },
    {
      id: 4,
      location: "Coral Triangle",
      coordinates: { lat: -5, lng: 120 },
      eventType: "Toxic Algae Bloom",
      dangerLevel: "severe",
      status: "Expanding",
      reportedDate: "2024-09-23",
      description: "Massive toxic algae bloom affecting marine life",
    },
    {
      id: 5,
      location: "Arctic Ocean",
      coordinates: { lat: 75, lng: -100 },
      eventType: "Ice Break",
      dangerLevel: "safe",
      status: "Resolved",
      reportedDate: "2024-09-15",
      description: "Ice shelf stabilized, no immediate danger",
    },
    {
      id: 6,
      location: "South China Sea",
      coordinates: { lat: 10, lng: 115 },
      eventType: "Cyclone",
      dangerLevel: "warning",
      status: "Approaching",
      reportedDate: "2024-09-27",
      description: "Tropical cyclone forming, monitoring path",
    },
    {
      id: 7,
      location: "Indian Ocean",
      coordinates: { lat: -20, lng: 70 },
      eventType: "Piracy Activity",
      dangerLevel: "warning",
      status: "Active",
      reportedDate: "2024-09-24",
      description: "Increased piracy reports in shipping lanes",
    },
    {
      id: 8,
      location: "Caribbean Sea",
      coordinates: { lat: 15, lng: -70 },
      eventType: "Volcanic Activity",
      dangerLevel: "severe",
      status: "Erupting",
      reportedDate: "2024-09-26",
      description: "Underwater volcanic eruption causing tsunamis",
    },
  ]);

  const [filters, setFilters] = useState({
    eventType: "all",
    dangerLevel: "all",
  });
  const [selectedReport, setSelectedReport] = useState(null);
  const [hoveredReport, setHoveredReport] = useState(null);

  const eventTypes = [
    "all",
    "Hurricane",
    "Tsunami Warning",
    "Oil Spill",
    "Toxic Algae Bloom",
    "Ice Break",
    "Cyclone",
    "Piracy Activity",
    "Volcanic Activity",
  ];
  const dangerLevels = ["all", "safe", "warning", "severe"];

  const getDangerColor = (level) => {
    switch (level) {
      case "safe":
        return "#059669"; // emerald
      case "warning":
        return "#D97706"; // amber
      case "severe":
        return "#DC2626"; // red
      default:
        return "#6B7280"; // gray
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
      case "erupting":
      case "expanding":
        return "text-red-700 bg-red-100 border border-red-200";
      case "monitoring":
      case "approaching":
      case "contained":
        return "text-amber-700 bg-amber-100 border border-amber-200";
      case "resolved":
        return "text-emerald-700 bg-emerald-100 border border-emerald-200";
      default:
        return "text-gray-700 bg-gray-100 border border-gray-200";
    }
  };

  const getEventIcon = (eventType) => {
    switch (eventType) {
      case "Hurricane":
      case "Cyclone":
        return "🌪️";
      case "Tsunami Warning":
        return "🌊";
      case "Oil Spill":
        return "🛢️";
      case "Toxic Algae Bloom":
        return "🦠";
      case "Ice Break":
        return "🧊";
      case "Piracy Activity":
        return "🏴‍☠️";
      case "Volcanic Activity":
        return "🌋";
      default:
        return "⚠️";
    }
  };

  const filteredReports = dangerReports.filter(
    (report) =>
      (filters.eventType === "all" || report.eventType === filters.eventType) &&
      (filters.dangerLevel === "all" ||
        report.dangerLevel === filters.dangerLevel)
  );

  const projectCoordinates = (lat, lng) => {
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  const handleReportClick = (report) => {
    setSelectedReport(report.id === selectedReport ? null : report.id);
  };

  return (
    <div className="min-h-screen bg-[#EAE8FF] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            Ocean Danger Monitoring Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Real-time tracking of maritime hazards and environmental threats
          </p>
        </div>

        <div className="flex gap-6 h-[calc(100vh-200px)]">
          {/* Main Map Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col border border-purple-200">
              {/* Filters */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex gap-4 items-center flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Filter className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                      Filters
                    </span>
                  </div>
                  <select
                    value={filters.eventType}
                    onChange={(e) =>
                      setFilters({ ...filters, eventType: e.target.value })
                    }
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-gray-800 transition-all duration-200"
                  >
                    {eventTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-white text-gray-800"
                      >
                        {type === "all" ? "All Event Types" : type}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filters.dangerLevel}
                    onChange={(e) =>
                      setFilters({ ...filters, dangerLevel: e.target.value })
                    }
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-gray-800 transition-all duration-200"
                  >
                    {dangerLevels.map((level) => (
                      <option
                        key={level}
                        value={level}
                        className="bg-white text-gray-800"
                      >
                        {level === "all"
                          ? "All Danger Levels"
                          : level.charAt(0).toUpperCase() + level.slice(1)}
                      </option>
                    ))}
                  </select>
                  <div className="bg-purple-100 px-4 py-2 rounded-lg border border-purple-200">
                    <span className="text-sm font-medium text-purple-800">
                      Showing {filteredReports.length} of {dangerReports.length}{" "}
                      reports
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex-1 p-6 relative">
                <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl overflow-hidden shadow-inner">
                  <svg viewBox="0 0 800 400" className="w-full h-full">
                    <defs>
                      <linearGradient
                        id="oceanGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#3B82F6", stopOpacity: 0.2 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#6366F1", stopOpacity: 0.3 }}
                        />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="400" fill="url(#oceanGradient)" />
                    <g fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5">
                      <path d="M 120 80 L 200 70 L 250 90 L 240 140 L 180 160 L 120 140 Z" />
                      <path d="M 180 200 L 220 190 L 240 250 L 210 300 L 180 280 Z" />
                      <path d="M 380 80 L 420 75 L 430 100 L 400 120 L 375 110 Z" />
                      <path d="M 390 140 L 430 135 L 440 220 L 410 280 L 385 260 L 385 180 Z" />
                      <path d="M 450 70 L 580 65 L 600 120 L 570 140 L 480 135 L 450 100 Z" />
                      <path d="M 580 260 L 640 255 L 650 280 L 620 290 L 580 285 Z" />
                    </g>
                    {filteredReports.map((report) => {
                      const { x, y } = projectCoordinates(
                        report.coordinates.lat,
                        report.coordinates.lng
                      );
                      const isSelected = selectedReport === report.id;
                      const isHovered = hoveredReport === report.id;
                      return (
                        <g key={report.id}>
                          <circle
                            cx={x}
                            cy={y}
                            r={isSelected ? 14 : isHovered ? 12 : 10}
                            fill={getDangerColor(report.dangerLevel)}
                            opacity="0.8"
                            stroke="white"
                            strokeWidth="3"
                            className="cursor-pointer transition-all duration-300 hover:opacity-100"
                            onMouseEnter={() => setHoveredReport(report.id)}
                            onMouseLeave={() => setHoveredReport(null)}
                            onClick={() => handleReportClick(report)}
                            style={{
                              filter: isSelected
                                ? "drop-shadow(0 0 10px rgba(0,0,0,0.3))"
                                : "none",
                              transform: isHovered ? "scale(1.1)" : "scale(1)",
                            }}
                          />
                          {report.dangerLevel === "severe" && (
                            <circle
                              cx={x}
                              cy={y}
                              r="18"
                              fill="none"
                              stroke={getDangerColor(report.dangerLevel)}
                              strokeWidth="2"
                              opacity="0.6"
                            >
                              <animate
                                attributeName="r"
                                values="10;25;10"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0.6;0;0.6"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                          {(isHovered || isSelected) && (
                            <text
                              x={x}
                              y={y - 20}
                              textAnchor="middle"
                              className="fill-gray-800 text-xs font-semibold"
                              style={{
                                filter:
                                  "drop-shadow(0 1px 2px rgba(255,255,255,0.8))",
                              }}
                            >
                              {report.location}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-lg">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      Danger Levels
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getDangerColor("safe") }}
                        ></div>
                        <span className="text-xs text-gray-700">Safe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getDangerColor("warning") }}
                        ></div>
                        <span className="text-xs text-gray-700">Warning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getDangerColor("severe") }}
                        ></div>
                        <span className="text-xs text-gray-700">Severe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="w-96">
            <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col border border-purple-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Recent Reports
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Click on any report to highlight on map
                </p>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {filteredReports.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Info className="w-12 h-12 mx-auto mb-4 opacity-40" />
                    <h3 className="font-medium text-gray-700 mb-2">
                      No reports found
                    </h3>
                    <p className="text-sm">No reports match current filters</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {filteredReports
                      .sort(
                        (a, b) =>
                          new Date(b.reportedDate) - new Date(a.reportedDate)
                      )
                      .map((report, index) => (
                        <div
                          key={report.id}
                          className={`p-5 cursor-pointer hover:bg-gray-50 transition-all duration-200 animate-fade-in ${
                            selectedReport === report.id
                              ? "bg-purple-50 border-l-4 border-purple-500"
                              : ""
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                          onClick={() => handleReportClick(report)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">
                                {getEventIcon(report.eventType)}
                              </span>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {report.location}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {report.eventType}
                                </p>
                              </div>
                            </div>
                            <div
                              className="w-4 h-4 rounded-full flex-shrink-0 mt-1 shadow-sm"
                              style={{
                                backgroundColor: getDangerColor(
                                  report.dangerLevel
                                ),
                              }}
                            ></div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>{report.reportedDate}</span>
                            </div>

                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                report.status
                              )}`}
                            >
                              {report.status}
                            </span>

                            <p className="text-sm text-gray-700 leading-relaxed mt-3">
                              {report.description}
                            </p>

                            {selectedReport === report.id && (
                              <div className="flex items-center gap-2 text-xs text-purple-600 mt-3 pt-2 border-t border-purple-100">
                                <Eye className="w-3 h-3" />
                                <span className="font-medium">
                                  Highlighted on map
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Map;

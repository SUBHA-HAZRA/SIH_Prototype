import React from "react";

const Analytics = () => {
  const stats = [
    {
      label: "Total Reports",
      value: "1,250",
      icon: "📋",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 border-blue-200",
    },
    {
      label: "Verified Reports",
      value: "980",
      icon: "✅",
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-200",
    },
    {
      label: "Pending Reports",
      value: "270",
      icon: "⏳",
      gradient: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 border-amber-200",
    },
    {
      label: "Active Alerts",
      value: "15",
      icon: "🚨",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50 border-red-200",
    },
    {
      label: "Recent Activities",
      value: "32",
      icon: "📈",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 border-purple-200",
    },
  ];

  const chartData = [
    { label: "Floods", height: "h-20", color: "from-blue-400 to-blue-600", value: "120" },
    { label: "Storms", height: "h-40", color: "from-purple-400 to-purple-600", value: "240" },
    { label: "Tsunami", height: "h-32", color: "from-indigo-400 to-indigo-600", value: "180" },
    { label: "Rain", height: "h-28", color: "from-cyan-400 to-cyan-600", value: "160" },
  ];

  const trendPoints = [
    { x: 50, y: 200, month: "Jan", value: "45" },
    { x: 90, y: 170, month: "Feb", value: "67" },
    { x: 130, y: 180, month: "Mar", value: "58" },
    { x: 170, y: 120, month: "Apr", value: "89" },
    { x: 210, y: 110, month: "May", value: "95" },
    { x: 250, y: 190, month: "Jun", value: "52" },
    { x: 290, y: 200, month: "Jul", value: "45" },
    { x: 330, y: 140, month: "Aug", value: "78" },
    { x: 370, y: 60, month: "Sep", value: "125" },
    { x: 410, y: 180, month: "Oct", value: "58" },
    { x: 450, y: 200, month: "Nov", value: "45" },
  ];

  return (
    <div className="min-h-screen bg-[#EAE8FF] p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">🌊</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                Ocean Safety Analytics
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive insights into maritime safety reports, alerts, and trends
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {stats.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border-2 ${card.bgColor} animate-fade-in`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                {card.label}
              </div>
              <div className="text-xl sm:text-3xl font-bold text-gray-800">
                {card.value}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Reports by Category */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Reports by Category
                </h3>
                <p className="text-sm text-gray-600">Current month breakdown</p>
              </div>
            </div>
            
            <div className="flex items-end justify-between h-56 space-x-4 mb-4">
              {chartData.map((bar, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group">
                  <div className="relative">
                    <div
                      className={`w-12 sm:w-16 bg-gradient-to-t ${bar.color} rounded-t-lg mb-2 shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                      style={{ 
                        height: bar.label === 'Floods' ? '80px' : 
                                bar.label === 'Storms' ? '160px' : 
                                bar.label === 'Tsunami' ? '128px' : '112px',
                        animationDelay: `${i * 200}ms` 
                      }}
                    ></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {bar.value}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-medium text-center">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full border">
                Hover bars for exact values
              </div>
            </div>
          </div>

          {/* Report Trends */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📈</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Report Trends
                  </h3>
                  <p className="text-sm text-gray-600">Past 11 months</p>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="relative w-full h-56 sm:h-64 overflow-x-auto">
              <svg
                className="min-w-[600px] w-full h-full"
                viewBox="0 0 500 250"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                <g stroke="#F3F4F6" strokeWidth="1">
                  {[220, 180, 140, 100, 60].map((y, i) => (
                    <line key={i} x1="40" y1={y} x2="480" y2={y} />
                  ))}
                </g>

                {/* Area under curve */}
                <path
                  d="M50,200 L90,170 L130,180 L170,120 L210,110 L250,190 L290,200 L330,140 L370,60 L410,180 L450,200 L450,230 L50,230 Z"
                  fill="url(#areaGradient)"
                  opacity="0.3"
                />

                {/* Main line */}
                <polyline
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  points="50,200 90,170 130,180 170,120 210,110 250,190 290,200 330,140 370,60 410,180 450,200"
                />

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                {/* Interactive dots */}
                {trendPoints.map((dot, i) => (
                  <g key={i}>
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="6"
                      fill="white"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      className="hover:scale-150 transition-all duration-200 cursor-pointer shadow-lg"
                    />
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="3"
                      fill="#8B5CF6"
                    />
                  </g>
                ))}
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between mt-4 px-2 text-xs sm:text-sm text-gray-600 font-medium min-w-[600px]">
                {[
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov"
                ].map((month, i) => (
                  <span key={i} className="hover:text-purple-600 transition-colors duration-200">
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">⚡</span>
              </div>
              <h3 className="font-bold text-gray-800">Response Time</h3>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">2.3 mins</div>
            <div className="text-sm text-gray-600">Average emergency response</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">🎯</span>
              </div>
              <h3 className="font-bold text-gray-800">Accuracy Rate</h3>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">94.7%</div>
            <div className="text-sm text-gray-600">Report verification accuracy</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">🌐</span>
              </div>
              <h3 className="font-bold text-gray-800">Coverage Area</h3>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">847 km²</div>
            <div className="text-sm text-gray-600">Active monitoring zones</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes grow {
          from {
            height: 0;
          }
          to {
            height: var(--target-height);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-grow {
          animation: grow 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Analytics;
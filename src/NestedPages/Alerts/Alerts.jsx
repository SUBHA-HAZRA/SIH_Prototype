import React, { useState } from "react";

const Alerts = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [alertType, setAlertType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pastAlerts = [
    {
      id: "1",
      title: "High Tide Warning",
      location: "Chennai",
      type: "Warning",
      message: "Avoid low-lying areas near the beach due to unusually high tides expected throughout the day.",
      issued: "Sep 1, 2025",
      status: "warning",
    },
    {
      id: "2",
      title: "Flood Advisory",
      location: "Kochi",
      type: "Advisory",
      message: "Heavy rainfall expected in the coming hours. Monitor weather updates and avoid unnecessary travel.",
      issued: "Aug 30, 2025",
      status: "advisory",
    },
    {
      id: "3",
      title: "Cyclone Watch",
      location: "Visakhapatnam",
      type: "Watch",
      message: "Tropical cyclone developing in Bay of Bengal. Residents advised to prepare emergency supplies.",
      issued: "Aug 28, 2025",
      status: "watch",
    },
  ];

  const handleBroadcast = async () => {
    if (!title || !location || !alertType || !message) {
      alert("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Broadcasting alert:", { title, location, alertType, message });
    setTitle("");
    setLocation("");
    setAlertType("");
    setMessage("");
    setIsSubmitting(false);
    alert("Alert broadcasted successfully!");
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "Warning":
        return "⚠️";
      case "Advisory":
        return "ℹ️";
      case "Watch":
        return "👁️";
      case "Emergency":
        return "🚨";
      default:
        return "📢";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "warning":
        return "bg-gradient-to-r from-red-50 to-red-100 border-red-200 text-red-900";
      case "advisory":
        return "bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200 text-amber-900";
      case "watch":
        return "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 text-blue-900";
      case "emergency":
        return "bg-gradient-to-r from-red-100 to-red-200 border-red-300 text-red-900";
      default:
        return "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 text-gray-800";
    }
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "warning":
        return "bg-red-500 text-white";
      case "advisory":
        return "bg-yellow-500 text-white";
      case "watch":
        return "bg-blue-500 text-white";
      case "emergency":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-[#EAE8FF] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Emergency Alert System
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Broadcast critical information and monitor past alerts to keep communities safe and informed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Create Alert */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📢</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Create Alert</h2>
                <p className="text-gray-600 text-sm">Broadcast emergency information</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Alert Title</label>
                  <input
                    type="text"
                    placeholder="Enter alert title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Alert Type</label>
                <select
                  value={alertType}
                  onChange={(e) => setAlertType(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 outline-none transition-all duration-200"
                >
                  <option value="" className="bg-white text-gray-800">Select alert type</option>
                  <option value="Warning" className="bg-white text-gray-800">⚠️ Warning</option>
                  <option value="Advisory" className="bg-white text-gray-800">ℹ️ Advisory</option>
                  <option value="Watch" className="bg-white text-gray-800">👁️ Watch</option>
                  <option value="Emergency" className="bg-white text-gray-800">🚨 Emergency</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Enter detailed alert message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 h-32 resize-none bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 outline-none transition-all duration-200"
                />
              </div>

              <button
                onClick={handleBroadcast}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Broadcasting...
                  </>
                ) : (
                  <>
                    <span className="text-lg">📡</span>
                    Broadcast Alert
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Past Alerts */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Past Alerts</h2>
                <p className="text-gray-600 text-sm">Recent broadcast history</p>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {pastAlerts.map((alert, index) => (
                <div
                  key={alert.id}
                  className={`rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${getStatusColor(alert.status)} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                        <h3 className="font-bold text-lg">{alert.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium">📍 {alert.location}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(alert.status)}`}>
                          {alert.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-75 mb-1">Issued</div>
                      <div className="text-sm font-semibold">{alert.issued}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
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
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Alerts;
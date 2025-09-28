import React, { useState } from "react";

const ReportsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const reports = [
    {
      id: "1",
      reporterName: "Arjun Das",
      eventType: "High Waves",
      location: "Chennai",
      status: "False",
      date: "2025-09-01",
      priority: "medium",
      avatar: "👨‍💼"
    },
    {
      id: "2",
      reporterName: "Meera Nair",
      eventType: "Flooding",
      location: "Kochi",
      status: "Verified",
      date: "2025-09-12",
      priority: "high",
      avatar: "👩‍💼"
    },
    {
      id: "3",
      reporterName: "Ravi Kumar",
      eventType: "Tsunami Alert",
      location: "Visakhapatnam",
      status: "Pending",
      date: "2025-08-25",
      priority: "critical",
      avatar: "👨‍🦲"
    },
    {
      id: "4",
      reporterName: "Ram Charan",
      eventType: "High Rain Alert",
      location: "Mumbai",
      status: "Pending",
      date: "2025-08-20",
      priority: "medium",
      avatar: "🧔‍♂️"
    },
    {
      id: "5",
      reporterName: "Priya Sharma",
      eventType: "Oil Spill",
      location: "Goa",
      status: "Verified",
      date: "2025-09-15",
      priority: "high",
      avatar: "👩‍🔬"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Verified":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200";
      case "Pending":
        return "bg-amber-100 text-amber-700 border border-amber-200";
      case "False":
        return "bg-red-100 text-red-700 border border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "medium":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getEventIcon = (eventType) => {
    switch (eventType) {
      case "High Waves":
        return "🌊";
      case "Flooding":
        return "🌧️";
      case "Tsunami Alert":
        return "⚠️";
      case "High Rain Alert":
        return "☔";
      case "Oil Spill":
        return "🛢️";
      default:
        return "📍";
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.reporterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || report.eventType === typeFilter;
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">📋</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">All Reports</h2>
            <p className="text-gray-600 text-sm">Manage and review submitted hazard reports</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search reporter or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full sm:w-64 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200 text-gray-800"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          
          <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-3 w-full sm:w-40 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200 text-gray-800"
          >
            <option value="all">All types</option>
            <option value="High Waves">High Waves</option>
            <option value="Flooding">Flooding</option>
            <option value="Tsunami Alert">Tsunami Alert</option>
            <option value="High Rain Alert">Rain Alert</option>
            <option value="Oil Spill">Oil Spill</option>
          </select>
          
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 w-full sm:w-40 bg-gray-50 rounded-lg focus:bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-200 text-gray-800"
          >
            <option value="all">Any status</option>
            <option value="Pending">Pending</option>
            <option value="Verified">Verified</option>
            <option value="False">False</option>
          </select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-2xl font-bold text-gray-800">{reports.length}</div>
          <div className="text-sm text-gray-600">Total Reports</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-2xl font-bold text-emerald-600">{reports.filter(r => r.status === 'Verified').length}</div>
          <div className="text-sm text-gray-600">Verified</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-2xl font-bold text-amber-600">{reports.filter(r => r.status === 'Pending').length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-2xl font-bold text-red-600">{reports.filter(r => r.status === 'False').length}</div>
          <div className="text-sm text-gray-600">False Reports</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Reporter</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Event Details</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Location</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Date</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report, index) => (
                <tr
                  key={report.id}
                  className="hover:bg-purple-50 transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">{report.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{report.reporterName}</div>
                        <div className="text-xs text-gray-500">ID: {report.id}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getEventIcon(report.eventType)}</span>
                      <div>
                        <div className="font-medium text-gray-800">{report.eventType}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(report.priority)}`}></div>
                          <span className="text-xs text-gray-500 capitalize">{report.priority} priority</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📍</span>
                      <span className="font-medium text-gray-800">{report.location}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5">
                    <span className={`px-3 py-2 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  
                  <td className="px-6 py-5">
                    <div className="text-gray-700">{report.date}</div>
                    <div className="text-xs text-gray-500">
                      {Math.floor(Math.random() * 24) + 1} days ago
                    </div>
                  </td>
                  
                  <td className="px-6 py-5">
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                        View
                      </button>
                      <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                        Accept
                      </button>
                      <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-md">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No reports found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#EAE8FF] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-3xl">📊</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                Reports Management
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Review, verify, and manage submitted hazard reports from community members
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ReportsTable />
        </div>
      </div>

      <style jsx>{`
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

export default Reports;
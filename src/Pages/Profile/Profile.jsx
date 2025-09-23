import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#EAE8FF] text-gray-900 flex items-center justify-center p-4">
      <main className="w-full max-w-4xl">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-6 sm:mb-8 text-gray-800">
          User Profile
        </h1>

        {/* Profile Section */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
          {/* Header */}
          <header className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-6 sm:py-8 bg-[#21BCFF] text-white">
            <img
              src="https://cutiedp.com/wp-content/uploads/2025/07/cartoon-boy-dp-49.webp"
              alt="Profile avatar"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold leading-none">
                  Sophia Clark
                </h2>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-white text-blue-600 px-3 py-1 text-xs font-medium shadow hover:bg-gray-100 transition"
                >
                  Edit
                </button>
              </div>
              <p className="mt-1 sm:mt-2 text-sm text-blue-100">Joined in 2022</p>
            </div>
          </header>

          {/* Profile Form */}
          <div className="p-4 sm:p-6 bg-[#F5F5F5] space-y-6 sm:space-y-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your email"
                />
              </div>

              {/* Bio */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Bio
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                  rows="3"
                  placeholder="Write something about yourself..."
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* Notification Preferences */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Notification Preferences
              </h3>
              <div className="flex flex-col gap-2 sm:gap-3">
                <label className="flex items-start gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Receive email notifications about new hazard reports in your area.
                  </span>
                </label>

                <label className="flex items-start gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Get in-app alerts for critical safety updates.
                  </span>
                </label>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300" />

            {/* Privacy Settings */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Privacy Settings
              </h3>
              <label className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 text-sm sm:text-base">
                  Share your location data to improve hazard reporting accuracy.
                </span>
              </label>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-[#21BCFF] px-5 sm:px-6 py-2 text-white font-medium shadow-md hover:bg-blue-500 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;

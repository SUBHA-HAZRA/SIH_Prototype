import React from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";

const MyReports = () => {
  return (
    <main className="px-4 py-8 bg-[#EAE8FF] min-h-screen">
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Reports
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          View your report status and track progress easily.
        </p>
      </header>

      {/* Reports Section */}
      <section
        aria-label="Reports container"
        className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg mx-auto max-w-6xl"
      >
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-bold text-gray-800">My Reports</h2>

          <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:max-w-3xl">
            <div className="relative w-full md:max-w-sm">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search Report"
                className="w-full rounded-lg border border-gray-300 bg-gray-100 pl-10 pr-4 py-2 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Type Filter */}
              <select className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="all">All types</option>
                <option value="flood">Flood</option>
                <option value="earthquake">Earthquake</option>
                <option value="cyclone">Cyclone</option>
              </select>

              {/* Status Filter */}
              <select className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="any">Any status</option>
                <option value="approved">Approved</option>
                <option value="in_review">In Review</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="group flex flex-col sm:flex-row items-stretch gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-lg transition">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <span className="inline-flex items-center self-start rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-medium border border-yellow-300">
                In Review
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Flood in Digha
                </h3>
                <p className="mt-1 text-sm text-gray-500">Digha, Purba Medinipur</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLplcrBgWJW0Yu9qIYFOtUO6NDc9KKguWMQ&s"
                alt="Report thumbnail"
                className="h-20 w-full sm:w-28 rounded-lg object-cover shadow-md"
              />
              <FaChevronRight className="mt-3 text-gray-400 group-hover:text-blue-500 transition" />
            </div>
          </article>

          {/* Card 2 */}
          <article className="group flex flex-col sm:flex-row items-stretch gap-4 rounded-xl border border-red-300 bg-red-50 p-5 shadow-md hover:shadow-lg transition">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <span className="inline-flex items-center self-start rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-medium border border-red-300">
                Rejected
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Floods in Punjab
                </h3>
                <p className="mt-1 text-sm text-gray-500">Multiple districts like Gurdaspur, Amritsar, Ferozepur</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <img
                src="https://www.hindustantimes.com/ht-img/img/2025/09/01/1600x900/punjab_floods_1756729360837_1756729361002.jpg"
                alt="Report thumbnail"
                className="h-20 w-full sm:w-28 rounded-lg object-cover shadow-md"
              />
              <FaChevronRight className="mt-3 text-gray-400 group-hover:text-red-500 transition" />
            </div>
          </article>

          {/* Card 3 (Approved) */}
          <article className="group flex flex-col sm:flex-row items-stretch gap-4 rounded-xl border border-green-300 bg-green-50 p-5 shadow-md hover:shadow-lg transition">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <span className="inline-flex items-center self-start rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium border border-green-300">
                Approved
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Flooding in Monsoon
                </h3>
                <p className="mt-1 text-sm text-gray-500">Purba Medinipur, West Bengal</p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <img
                src="https://s3.youthkiawaaz.com/wp-content/uploads/2015/08/06072725/Photo-2.jpg"
                alt="Report thumbnail"
                className="h-20 w-full sm:w-28 rounded-lg object-cover shadow-md"
              />
              <FaChevronRight className="mt-3 text-gray-400 group-hover:text-green-500 transition" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default MyReports;

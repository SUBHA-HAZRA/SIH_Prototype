import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NewCard = () => {
  const [search, setSearch] = useState("");

  const demoItems = [
    {
      title: "Massive rip currents spotted at South Beach today!",
      permalink: "/r/OceanSafety/comments/abc001",
      subreddit: "OceanSafety",
      ups: 152,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnllGnm-9xILMLkhY9t-TXMhX6A7mB9NzsLw&s",
    },
    {
      title: "High tides warning along the east coast.",
      permalink: "/r/MarineAlerts/comments/abc002",
      subreddit: "MarineAlerts",
      ups: 98,
      image:
        "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2024/09/668/376/east-coastal-flood-alerts-with-info.png?ve=1&tl=1",
    },
    {
      title: "Oil spill detected near Gulf Coast affecting marine life.",
      permalink: "/r/MarineNews/comments/abc003",
      subreddit: "MarineNews",
      ups: 210,
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/211005124857-01-wildlife-oil-spill-file.jpg?q=w_3000,h_1688,x_0,y_0,c_fill",
    },
    {
      title: "Coastal erosion increasing after recent storms.",
      permalink: "/r/ClimateImpact/comments/abc004",
      subreddit: "ClimateImpact",
      ups: 87,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240326092139/Coastal-Erosion.webp",
    },
    {
      title: "Tsunami alert issued for Pacific coastal regions.",
      permalink: "/r/OceanSafety/comments/abc005",
      subreddit: "OceanSafety",
      ups: 320,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pDvfVUlhBuLoMYaquR7fzAzDrltK6dchyQ&s",
    },
    {
      title: "Marine pollution detected near popular tourist beaches.",
      permalink: "/r/MarineNews/comments/abc006",
      subreddit: "MarineNews",
      ups: 145,
      image: "https://blog.cleanhub.com/hubfs/Waste-on-the-beach%20(1).webp",
    },
  ];

  // Filter items based on search
  const filteredItems = demoItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#EAE8FF]">
      {/* Search Bar */}
      <div className="mb-4 flex items-center w-full max-w-3xl mx-auto bg-white rounded-full shadow-lg px-6 py-3 border border-gray-300 focus-within:border-blue-500 focus-within:shadow-blue-200 transition-all duration-300">
        <FaSearch className="text-gray-400 mr-4 text-lg" />
        <input
          type="text"
          placeholder="Search ocean hazards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-gray-700 placeholder-gray-400 text-base font-medium outline-none"
        />
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Trending Hazard News
      </h2>

      {/* Scrollable Cards */}
      <div className="overflow-x-auto py-4">
        <div className="flex gap-4 min-w-max">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <a
                key={item.permalink}
                href={`https://reddit.com${item.permalink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 rounded-xl border border-gray-200 bg-white shadow hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 hover:text-blue-600 hover:underline transition-colors duration-200">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {item.subreddit} • {item.ups.toLocaleString()} upvotes
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-gray-500 font-medium p-4">
              No results found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewCard;

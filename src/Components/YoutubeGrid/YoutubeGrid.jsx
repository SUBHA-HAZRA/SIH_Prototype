import React from "react";

const YoutubeGrid = () => {
  // Demo video IDs
  const demoVideoIds = [
    "c7YXt6vFUpg",
    "0cNgww6zJLs",
    "RdZh44vzqeU",
  ];

  return (
    <div className="py-4 px-6">
      {/* Scrollable Cards */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {demoVideoIds.map((id, index) => (
            <div
              key={id}
              className="flex-shrink-0 w-80 rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Card Header / Title */}
              <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800">
                  Video {index + 1}
                </h3>
              </div>

              {/* Video iframe */}
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${index + 1}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>

              {/* Card Footer / Description */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  This is a demo YouTube video card description.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeGrid;

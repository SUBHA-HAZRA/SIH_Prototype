import React from "react";

const HomeCard = ({ title, description, image, severity, severityColor }) => {
  return (
    <div className="max-w-md w-full border-2 border-gray-300 bg-white/90 rounded-3xl p-4 mx-auto shadow-md">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={image}
          alt={title}
          className="w-full sm:w-24 h-40 sm:h-24 rounded-xl object-cover"
        />
        <div className="flex-1 flex flex-col justify-between">
          <h3 className="font-semibold text-lg mb-1 sm:mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          <span
            className={`px-3 py-1 border-2 border-black rounded-lg font-bold text-sm w-fit ${severityColor}`}
          >
            {severity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

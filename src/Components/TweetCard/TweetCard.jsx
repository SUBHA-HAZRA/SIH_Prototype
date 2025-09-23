import React from "react";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";

const TweetCard = ({
  profileImage,
  name,
  username,
  time,
  text,
  hashtags = [],
  comments,
  retweets,
  likes,
  sourceName = "",
  sourceLogo = "",
}) => {
  return (
    <div className="relative flex gap-2 xs:gap-3 p-3 xs:p-4 lg:p-5 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 rounded-lg">
      {/* Source Badge */}
      {sourceName && sourceLogo && (
        <div className="absolute top-1.5 xs:top-2 right-2 xs:right-3 flex items-center gap-1 xs:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-gray-500 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
          <img
            src={sourceLogo}
            alt={sourceName}
            className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 object-contain"
          />
          <span className="capitalize hidden xs:inline">{sourceName}</span>
        </div>
      )}

      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <img
          src={profileImage}
          alt={name}
          className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-1 ring-gray-200"
        />
      </div>

      {/* Tweet Content */}
      <div className="flex-1 min-w-0">
        {/* Username & Handle */}
        <div className="flex flex-col xs:flex-row xs:items-center xs:flex-wrap gap-0 xs:gap-x-2 xs:gap-y-0.5 mb-1 xs:mb-2">
          <span className="font-semibold hover:underline cursor-pointer text-sm xs:text-sm sm:text-base text-gray-900 truncate">
            {name}
          </span>
          <span className="text-gray-500 text-xs xs:text-xs sm:text-sm">
            <span className="xs:hidden">@{username}</span>
            <span className="hidden xs:inline">@{username} · {time}</span>
          </span>
          {/* Show time on separate line for mobile */}
          <span className="text-gray-500 text-xs xs:hidden block -mt-0.5">
            {time}
          </span>
        </div>

        {/* Tweet Text */}
        <div className="mb-2 xs:mb-3">
          <p className="text-sm xs:text-sm sm:text-base text-gray-800 leading-relaxed break-words whitespace-pre-wrap">
            {text}
          </p>
        </div>

        {/* Hashtags */}
        {hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1 xs:gap-2 mb-2 xs:mb-3">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-blue-600 text-xs xs:text-xs sm:text-sm font-medium cursor-pointer hover:underline hover:text-blue-700 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between xs:justify-start xs:gap-4 sm:gap-6 lg:gap-8 text-gray-500">
          {/* Comments */}
          <button className="flex items-center gap-1 xs:gap-1.5 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200 rounded-full px-2 xs:px-3 py-1 xs:py-1.5 -ml-2 xs:-ml-3 group">
            <FaRegComment className="text-xs xs:text-sm group-hover:scale-110 transition-transform" />
            <span className="text-xs xs:text-sm font-medium">{comments}</span>
          </button>

          {/* Retweets */}
          <button className="flex items-center gap-1 xs:gap-1.5 hover:text-green-500 hover:bg-green-50 transition-all duration-200 rounded-full px-2 xs:px-3 py-1 xs:py-1.5 group">
            <FaRetweet className="text-xs xs:text-sm group-hover:scale-110 transition-transform" />
            <span className="text-xs xs:text-sm font-medium">{retweets}</span>
          </button>

          {/* Likes */}
          <button className="flex items-center gap-1 xs:gap-1.5 hover:text-red-500 hover:bg-red-50 transition-all duration-200 rounded-full px-2 xs:px-3 py-1 xs:py-1.5 group">
            <FaRegHeart className="text-xs xs:text-sm group-hover:scale-110 transition-transform" />
            <span className="text-xs xs:text-sm font-medium">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
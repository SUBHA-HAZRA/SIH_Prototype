"use client";

import {
  FaRegComment,
  FaRetweet,
  FaHeart,
  FaExclamationTriangle,
  FaLeaf,
  FaStar,
  FaWater,
  FaFire,
} from "react-icons/fa";
import TweetCard from "../TweetCard/TweetCard";

export default function SocialFeedSection() {
  const keywords = [
    "#SaveOurSeas",
    "#OceanPollution",
    "#MarineDebris",
    "#OceanAcidification",
    "#RipCurrents",
    "#BeachSafety",
    "#ClimateChange",
    "#ProtectMarineLife",
    "#OilSpill",
    "#OceanStorm",
    "#ClimateAction",
    "#OceanRescue",
  ];

  const topics = [
    { name: "All", bg: "bg-gradient-to-r from-blue-100 to-blue-200", text: "text-blue-800" },
    { name: "Floods", bg: "bg-gradient-to-r from-red-100 to-red-200", text: "text-red-800" },
    { name: "Tsunami", bg: "bg-gradient-to-r from-purple-100 to-purple-200", text: "text-purple-800" },
    { name: "Coastal Erosion", bg: "bg-gradient-to-r from-cyan-100 to-cyan-200", text: "text-cyan-800" },
    { name: "Marine Pollution", bg: "bg-gradient-to-r from-green-100 to-green-200", text: "text-green-800" },
    { name: "Storm Surge", bg: "bg-gradient-to-r from-yellow-100 to-yellow-200", text: "text-yellow-800" },
  ];

  return (
    <section className="grid gap-8 md:grid-cols-3 px-6 md:px-8 bg-[#EAE8FF]">
      {/* Social Media Feed */}
      <div className="md:col-span-2 bg-white shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold mb-3 md:mb-0 text-gray-900">Social Media Feed</h2>
        </div>

        <div className="space-y-6">
          <TweetCard
            profileImage="https://i.pravatar.cc/100?img=5"
            name="Sarah M."
            username="sarahm"
            time="2h"
            text="Just saw a massive rip current at South Beach! Be careful out there, folks."
            hashtags={["OceanSafety", "SouthBeach", "RipCurrent"]}
            comments={12}
            retweets={27}
            likes={156}
            sourceName="Twitter"
            sourceLogo="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
          />
          <TweetCard
            profileImage="https://i.pravatar.cc/100?img=2"
            name="Ocean Watch"
            username="oceanwatch"
            time="1h"
            text="High tides expected along the east coast today. Stay alert!"
            hashtags={["FloodWarning", "HighTide", "OceanSafety"]}
            comments={8}
            retweets={15}
            likes={120}
            sourceName="Twitter"
            sourceLogo="https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000"
          />
          <TweetCard
            profileImage="https://i.pravatar.cc/100?img=3"
            name="Marine Life News"
            username="marinelife"
            time="3h"
            text="Oil spill reported near the Gulf Coast. Avoid beaches in the affected area."
            hashtags={["OilSpill", "ProtectMarineLife", "BeachSafety"]}
            comments={20}
            retweets={40}
            likes={210}
            sourceName="Reddit"
            sourceLogo="https://img.icons8.com/?size=100&id=p71QFaxkU6wX&format=png&color=000000"
          />
          <TweetCard
            profileImage="https://i.pravatar.cc/100?img=4"
            name="Coastal Alerts"
            username="coastalalerts"
            time="5h"
            text="Rip currents reported at South Beach. Swim only in designated areas."
            hashtags={["RipCurrents", "BeachSafety", "OceanSafety"]}
            comments={12}
            retweets={27}
            likes={180}
            sourceName="Reddit"
            sourceLogo="https://img.icons8.com/?size=100&id=p71QFaxkU6wX&format=png&color=000000"
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Trending Keyword Cloud */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <FaWater className="text-blue-600 text-3xl" />
            Trending Ocean Hazard Keywords
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-white shadow-md px-5 py-2 rounded-2xl text-blue-600 font-semibold text-lg cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-blue-50"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <div className="bg-white shadow-xl rounded-3xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaFire className="text-red-500 w-6 h-6 animate-pulse" />
              <span className="font-bold text-gray-900 text-lg tracking-wide">
                Trending Topics
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {topics.map((topic) => (
                <span
                  key={topic.name}
                  className={`${topic.bg} ${topic.text} px-5 py-2 rounded-full text-sm font-medium cursor-pointer hover:scale-110 hover:shadow-lg transition-transform duration-300`}
                >
                  {topic.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

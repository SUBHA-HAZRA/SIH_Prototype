import React from 'react';
import NewCard from '../../Components/NewCard/NewCard';
import SocialFeedSection from '../../Components/SocialFeedSection/SocialFeedSection';
import YoutubeGrid from '../../Components/YoutubeGrid/YoutubeGrid';

const HazardNews = () => {
  return (
    <div className="bg-[#EAE8FF] ">
      {/* Trending Hazard News Cards */}
      <section>
        <NewCard />
      </section>

      {/* Social Media Feed */}
      <section>
        <SocialFeedSection />
      </section>

      {/* Featured YouTube Videos */}
      <section className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Featured Videos
        </h2>
        <div className="bg-white rounded-xl shadow-md p-4 px-6">
          <YoutubeGrid />
        </div>
      </section>
    </div>
  );
};

export default HazardNews;

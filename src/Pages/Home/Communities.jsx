import React, { useState } from "react";
import { Link } from "react-router-dom";

// Sample data for communities with categories
const communitiesData = [
  {
    id: 1,
    title: "01",
    description: "Tech news, reviews, and how to’s.",
    stories: "38,568",
    creators: "14,248",
    category: "Technology",
    image: "https://via.placeholder.com/300x150?text=01",
  },
  {
    id: 2,
    title: "ART",
    description: "Where words paint masterpieces.",
    stories: "12,849",
    creators: "6,209",
    category: "Arts",
    image: "https://via.placeholder.com/300x150?text=ART",
  },
  {
    id: 3,
    title: "Beat",
    description: "Music artists, reviews, and playlists.",
    stories: "14,536",
    creators: "5,713",
    category: "Entertainment",
    image: "https://via.placeholder.com/300x150?text=Beat",
  },
  {
    id: 4,
    title: "BLUSH",
    description: "Skincare, hair, makeup, and body.",
    stories: "6,920",
    creators: "3,674",
    category: "Lifestyle",
    image: "https://via.placeholder.com/300x150?text=BLUSH",
  },
  {
    id: 5,
    title: "BookClub",
    description: "Where every page sparks a conversation.",
    stories: "8,619",
    creators: "3,125",
    category: "Education",
    image: "https://via.placeholder.com/300x150?text=BookClub",
  },
  {
    id: 6,
    title: "Chapters",
    description: "Where stories unfold, one chapter at a time.",
    stories: "11,055",
    creators: "3,581",
    category: "Education",
    image: "https://via.placeholder.com/300x150?text=Chapters",
  },
  {
    id: 7,
    title: "CLEATS",
    description: "Association football and soccer.",
    stories: "3,345",
    creators: "1,278",
    category: "Sports",
    image: "https://via.placeholder.com/300x150?text=CLEATS",
  },
  {
    id: 8,
    title: "CONFESSIONS",
    description: "Love, life, and secret confessions.",
    stories: "13,386",
    creators: "4,572",
    category: "Lifestyle",
    image: "https://via.placeholder.com/300x150?text=CONFESSIONS",
  },
];

const Communities = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  // List of tabs
  const tabs = [
    "ALL",
    "Arts",
    "Business",
    "Education",
    "Entertainment",
    "Health",
    "Lifestyle",
    "Politics",
    "Science",
    "Society",
    "Sports",
    "Technology",
  ];

  // Filter communities based on the active tab
  const filteredCommunities =
    activeTab === "ALL"
      ? communitiesData
      : communitiesData.filter((community) => community.category === activeTab);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Heading and Description */}
        <h1 className="text-5xl font-bold mb-2 text-black">Communities</h1>
        <p className="text-lg text-[#1a1a1a] mb-6">
          Explore communities powered by creators sharing stories about your
          interests and passions.
        </p>

        {/* Tabs */}
        <div className="flex  gap-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? " text-white bg-black border border-[#1a1a1a]"
                  : " text-[#1e1e1e]  border  hover:border-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCommunities.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-lg border overflow-hidden flex flex-col justify-between"
            >
              <Link to="/subject_detail">
              {/* Image with Title Overlay */}
              <div className="relative">
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center border">
                  <h2 className="text-3xl font-bold text-black">
                    {community.title}
                  </h2>
                </div>
              </div>

              {/* Description and Stats */}
              <div className="p-4 flex flex-col justify-between h-full">
                <p className="text-[16px] text-[#737373] mb-1">
                  {community.description}
                </p>

                {/* Aligned Stats */}
                <div className="block md:flex items-center justify-between text-[13px] text-gray-500">
                  <div className="flex items-center whitespace-nowrap">
                    <img
                      src="/book.svg"
                      alt=""
                      className="w-[16px] h-[16px] mr-1"
                    />
                    {community.stories} Stories
                  </div>
                  <div className="flex items-center whitespace-nowrap">
                    <img
                      src="/person.svg"
                      alt=""
                      className="w-[16px] h-[16px] mr-1"
                    />
                    {community.creators} Creators
                  </div>
                </div>
              </div>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;

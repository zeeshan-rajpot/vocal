import React, { useState } from "react";

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
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image with Title Overlay */}
              <div className="relative">
                <img
                  src={community.image}
                  alt={community.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">
                    {community.title}
                  </h2>
                </div>
              </div>
              {/* Description and Stats */}
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">
                  {community.description}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                      />
                    </svg>
                    {community.stories} Stories
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {community.creators} Creators
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
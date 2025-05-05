import React from 'react';

const TechSection = () => {
  const stats = [
    { label: 'Stories', value: '39,151', icon: '📄' },
    { label: 'Creators', value: '14,477', icon: '👤' },
    { label: 'Top Creators', value: '', icon: '👥', avatars: ['🧑', '👩', '🧔', '👨'] },
  ];

  return (
    <div className="bg-black py-12 px-4 rounded-xl container">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section: Image and Description */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            {/* Placeholder for Image */}
            <div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto lg:mx-0 flex items-center justify-center">
              <span className="text-6xl text-white">01</span>
            </div>
          </div>
          <p className="text-gray-300 text-lg">
            Your source for all things tech. Bringing us into the future, one technological advancement at a time. For updates, opinions, reviews, and more.
          </p>
        </div>

        {/* Right Section: Stats Card */}
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-gray-800 font-medium">{stat.label}</span>
              </div>
              {stat.value ? (
                <span className="text-gray-800 font-semibold">{stat.value}</span>
              ) : (
                <div className="flex -space-x-2">
                  {stat.avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center border-2 border-white"
                    >
                      <span className="text-sm">{avatar}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="w-full mt-4 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition">
            Submit to 01
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
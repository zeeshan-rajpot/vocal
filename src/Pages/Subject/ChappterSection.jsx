import React from 'react';
import { Link } from 'react-router-dom';

const ChapterSection = () => {
  const topics = [
    '01 Ethics Principles',
    '02 Informed Consent',
    '03 Confidentiality',
    '04 Decision-Making Capacity',
    '05 Public Health',
    '06 Quality and Safety',
  ];

  return (
    <div className=" py-12 px-4">
      <div className=" mx-auto p-6">
        <h2 className="text-gray-400 text-sm mb-4">Chapter 2</h2>
        <h1 className="text-2xl font-bold text-black mb-6">02 Behavioral Science: 01 General Topics</h1>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <Link to="/chapter_detail">
            <li
              key={index}
              className="relative group border-gray-200 rounded-full p-4 flex items-center justify-between  transition-colors duration-300 border-2  border-opacity-50 hover:border-black hover:shadow-xl"
              >
              <span className="text-black font-medium">{topic}</span>
              <span className="text-black">🔒</span>
            </li>
              </Link>
          ))}
        </ul>
      </div>
      
      <div className=" mx-auto p-6 bg-gray-50 rounded-2xl ">
        <h2 className="text-gray-400 text-sm mb-4">Chapter 2</h2>
        <h1 className="text-2xl font-bold text-black mb-6">02 Behavioral Science: 01 General Topics</h1>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="relative group border-gray-200 rounded-full p-4 flex items-center justify-between  transition-colors duration-300 border-2  border-opacity-50 hover:border-black hover:shadow-xl"
            >
              <span className="text-black font-medium">{topic}</span>
              <span className="text-black">🔒</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterSection;
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border border-b-3">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between px-4  container py-[1rem]">
        {/* Logo and Links */}
        <div className="flex items-center space-x-4 ">
          
          <img src="/logo.svg" alt="" className="w-[80px]"/>
          <a href="#" className="text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Top Stories
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Latest Stories
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Communities
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Challenge
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Resources
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Vocal+
          </a>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <a href="#" className="text-gray-600 hover:text-black">
            Join
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Sign In
          </a>
          <button className="hover:bg-black rounded  leading-none text-sm h-10 min-w-10 px-4 bg-[#2e2e2e] border-transparent  whitespace-nowrap text-white">
            Create Story
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2">
        {/* Logo and Hamburger */}
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12h18M3 6h18M3 18h18"
            />
          </svg>
          <span className="font-bold text-lg">VOCAL</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="flex justify-between px-4 py-2 border-b">
            <a href="#" className="text-gray-600 hover:text-black">
              Join
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Sign In
            </a>
          </div>
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              Top Stories
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              Latest Stories
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              Communities
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              Challenge
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              Resources
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              Vocal+
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
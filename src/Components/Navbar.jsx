import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Pricing", path: "/pricing" },
    { label: "DocsLayout", path: "/DocsLayout" },
  ];

  const authLinks = [
    { label: "Join", path: "/join" },
    { label: "Sign In", path: "/sign-in" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border border-b-3">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between px-4 container py-[1rem]">
        {/* Logo and Links */}
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="w-[80px]" />
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className="text-gray-600 hover:text-black"
            >
              {link.label}
            </NavLink>
          ))}
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
          {authLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className="text-gray-600 hover:text-black"
            >
              {link.label}
            </NavLink>
          ))}
          <button className="hover:bg-black rounded leading-none text-sm h-10 min-w-10 px-4 bg-[#2e2e2e] border-transparent whitespace-nowrap text-white">
            Create Story
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3  border-b-2">
        {/* Logo and Hamburger */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-[80px]" />
        </div>
        <div className="flex items-center space-x-6">
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
          {authLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className="text-gray-600 hover:text-black"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scroll Links */}
      <div className="flex md:hidden items-center space-x-4 overflow-x-scroll p-3">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            className="text-gray-600 hover:text-black text-nowrap"
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

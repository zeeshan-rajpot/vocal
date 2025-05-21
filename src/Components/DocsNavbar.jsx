import React, { useState } from "react";
import { ExternalLink, Menu, X, Github } from "lucide-react";

const DocsNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white   px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="h-8 w-12 bg-indigo-800 rounded flex items-center justify-center mr-2">
          <span className="text-white font-bold text-sm">W3T</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#templates" className="text-gray-700 hover:text-indigo-600">
          Templates
        </a>
        <a
          href="#support"
          className="text-gray-700 hover:text-indigo-600 flex items-center"
        >
          Support
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        <a
          href="https://github.com"
          className="text-gray-700 hover:text-indigo-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-2 px-4 md:hidden z-50">
          <div className="flex flex-col space-y-3">
            <a
              href="#templates"
              className="text-gray-700 hover:text-indigo-600 py-2"
              onClick={toggleMenu}
            >
              Templates
            </a>
            <a
              href="#support"
              className="text-gray-700 hover:text-indigo-600 py-2 flex items-center"
              onClick={toggleMenu}
            >
              Support
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              className="text-gray-700 hover:text-indigo-600 py-2 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              GitHub
              <Github className="ml-1 h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DocsNavbar;
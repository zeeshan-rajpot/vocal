import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t border-t-3">
      <div className="container mx-auto px-4 flex flex-col items-center ">
        {/* Social Media Icons */}
        <div className="flex space-x-3 mb-3 md:mb-7">
          <a href="#" aria-label="Facebook">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.07 5.766.128 4.668.393 3.69 1.372 2.711 2.351 2.446 3.449 2.389 4.735.332 8.332.319 8.735.319 12s.013 3.665.07 4.945c.058 1.286.323 2.384 1.302 3.363.979.979 2.077 1.244 3.363 1.302 1.28.057 1.683.07 4.945.07s3.665-.013 4.945-.07c1.286-.058 2.384-.323 3.363-1.302.979-.979 1.244-2.077 1.302-3.363.057-1.28.07-1.683.07-4.945s-.013-3.665-.07-4.945c-.058-1.286-.323-2.384-1.302-3.363-.979-.979-2.077-1.244-3.363-1.302C15.668.013 15.265 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg
              className="w-5 h-5 text-gray-600 hover:text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.957 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868 4.66 4.66 0 001.442 6.22 4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.19 13.19 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.604a9.463 9.463 0 002.324-2.413z" />
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row items-center space-y-2 md:flex-row md:space-y-0 space-x-5 mb-3 md:mb-7">
          <a href="#" className="text-gray-600 hover:text-black uppercase text-xs tracking-wider">
            Explore
          </a>
          <a href="#" className="text-gray-600 hover:text-black uppercase text-xs tracking-wider">
            Contact
          </a>
          <a href="#" className="text-gray-600 hover:text-black uppercase text-xs tracking-wider">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-black uppercase text-xs tracking-wider">
            Terms of Use
          </a>
          <a href="#" className="text-gray-600 hover:text-black uppercase text-xs tracking-wider">
            Support
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-gray-600 text-xs">
          © 2025 Creatd, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 p-4 text-white flex justify-between items-center flex-wrap shadow-lg">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="focus:outline-none md:hidden mr-3"
        >
          <FaBars className="text-2xl text-white animate-spin-slow" />
        </button>
        <h1 className="text-2xl font-bold font-permanent-marker neon-text">
          College Placement Hub
        </h1>{" "}
        {/* New font style */}
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link
          to="/"
          className="hover:bg-gray-600 p-2 rounded transition flex items-center font-permanent-marker neon-text"
        >
          <FaHome className="inline mr-1" /> Home
        </Link>
        <span className="hidden md:inline-block text-sm italic font-permanent-marker neon-text">
          "Success is not the key to happiness. Happiness is the key to
          success."
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

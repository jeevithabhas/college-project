import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 p-4 text-white flex justify-between items-center shadow-lg relative">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold font-permanent-marker neon-text animate-pulse">
          College Placement Hub
        </h1>
        <Link
          to="/"
          className="mt-2 hover:bg-gray-600 p-2 rounded transition flex items-center font-permanent-marker neon-text animate-bounce"
        >
          <FaHome className="inline mr-1" /> Home
        </Link>
      </div>
      <span className="hidden md:inline-block text-sm italic font-permanent-marker neon-text animate-fade-in">
        "Success is not the key to happiness. Happiness is the key to success."
      </span>
      <button
        onClick={toggleSidebar}
        className="focus:outline-none md:hidden absolute right-4 top-4 transform transition-transform duration-500 hover:rotate-180 hover:scale-110"
      >
        <FaBars className="text-2xl text-white animate-spin-slow animate-ping hover:animate-none" />
      </button>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBars,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { logout } from "../services/auth";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isAuthenticated = !!localStorage.getItem("token");

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
        </h1>
      </div>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link
          to="/"
          className="hover:bg-gray-600 p-2 rounded transition flex items-center font-permanent-marker neon-text"
        >
          <FaHome className="inline mr-1" /> Home
        </Link>
        {!isAuthenticated ? (
          <>
            <Link
              to="/signup"
              className="hover:bg-gray-600 p-2 rounded transition flex items-center font-permanent-marker neon-text"
            >
              <FaUserPlus className="inline mr-1" /> Sign Up
            </Link>
            <Link
              to="/login"
              className="hover:bg-gray-600 p-2 rounded transition flex items-center font-permanent-marker neon-text"
            >
              <FaSignInAlt className="inline mr-1" /> Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:bg-gray-600 p-2 rounded transition flex items-center font-permanent-marker neon-text"
          >
            <FaSignOutAlt className="inline mr-1" /> Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaCalendarCheck,
  FaBriefcase,
  FaPlus,
  FaChevronDown,
  FaChevronUp,
  FaList,
  FaWpforms,
  FaTimes,
  FaTachometerAlt, // Add dashboard icon
} from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      className={`bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 text-white w-64 space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50 shadow-lg`}
    >
      <div className="flex justify-end md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          <FaTimes className="animate-pulse" />
        </button>
      </div>
      <Link
        to="/"
        className="text-white flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105"
      >
        <FaHome className="inline mr-2 animate-bounce" /> <span>Home</span>
      </Link>
      <Link
        to="/dashboard"
        className="text-white flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105"
      >
        <FaTachometerAlt className="inline mr-2 animate-pulse" />{" "}
        <span>Dashboard</span>
      </Link>
      <div>
        <div
          onClick={() => toggleSection("applications")}
          className="cursor-pointer text-white flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105"
        >
          <FaClipboardList className="inline mr-2 animate-pulse" />{" "}
          <span>Applications</span>
          {openSection === "applications" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "applications" && (
          <div className="ml-6 space-y-2">
            <Link
              to="/student-application-form"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaWpforms className="inline mr-2" />{" "}
              <span>Student Application Form</span>
            </Link>
            <Link
              to="/applications"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaList className="inline mr-2" /> <span>View Applications</span>
            </Link>
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => toggleSection("interviews")}
          className="cursor-pointer text-white flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105"
        >
          <FaCalendarCheck className="inline mr-2 animate-pulse" />{" "}
          <span>Interviews</span>
          {openSection === "interviews" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "interviews" && (
          <div className="ml-6 space-y-2">
            <Link
              to="/interview-schedule-form"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaWpforms className="inline mr-2" />{" "}
              <span>Schedule Interview</span>
            </Link>
            <Link
              to="/interviews"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaList className="inline mr-2" /> <span>View Interviews</span>
            </Link>
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => toggleSection("jobs")}
          className="cursor-pointer text-white flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105"
        >
          <FaBriefcase className="inline mr-2 animate-pulse" />{" "}
          <span>Jobs</span>
          {openSection === "jobs" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "jobs" && (
          <div className="ml-6 space-y-2">
            <Link
              to="/job-posting-form"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaWpforms className="inline mr-2" /> <span>Post a Job</span>
            </Link>
            <Link
              to="/jobs"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaList className="inline mr-2" /> <span>View Jobs</span>
            </Link>
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => toggleSection("placementDrives")}
          className="cursor-pointer text-white flex items-center space-x-3 px-4 py-3 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105"
        >
          <FaPlus className="inline mr-2 animate-pulse" />{" "}
          <span>Placement Drives</span>
          {openSection === "placementDrives" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </div>
        {openSection === "placementDrives" && (
          <div className="ml-6 space-y-2">
            <Link
              to="/placement-drive-form"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaWpforms className="inline mr-2" />{" "}
              <span>Placement Drive Form</span>
            </Link>
            <Link
              to="/placement-drives"
              className="block text-white flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded transition duration-150 transform hover:scale-105 animate-bounce"
            >
              <FaList className="inline mr-2" />{" "}
              <span>View Placement Drives</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

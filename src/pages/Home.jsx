import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaGraduationCap, FaBriefcase } from "react-icons/fa";

function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-400 text-white h-full p-8">
      <div className="text-center p-8 bg-gray-200 bg-opacity-80 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 animate-bounce font-permanent-marker">
          Welcome to College Placement Hub
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-6 text-gray-800 animate-pulse font-poppins">
          Your gateway to a brighter future. Manage applications, schedule
          interviews, and connect with top companies.
        </p>
        <Link
          to="/student-application-form"
          className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 font-roboto flex items-center space-x-2"
        >
          <FaRocket /> <span>Get Started</span>
        </Link>
        <div className="mt-6 flex justify-around space-x-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-600">
            <Link to="/applications" className="text-white font-bold">
              <FaGraduationCap className="inline mr-2" /> Applications
            </Link>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-600">
            <Link to="/jobs" className="text-white font-bold">
              <FaBriefcase className="inline mr-2" /> Jobs
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200 font-permanent-marker animate-fade-in">
          Achieve Your Dreams with Us!
        </h2>
        <p className="text-md md:text-lg text-gray-300 font-poppins animate-fade-in">
          Join our community to connect with top companies and get your career
          started.
        </p>
      </div>
    </div>
  );
}

export default Home;

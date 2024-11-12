import React, { useEffect, useState } from "react";
import { getPlacementDrives } from "../services/api";
import { FaCalendarAlt, FaUsers, FaBriefcase } from "react-icons/fa";

function PlacementDriveList() {
  const [placementDrives, setPlacementDrives] = useState([]);

  useEffect(() => {
    const fetchPlacementDrives = async () => {
      const { data } = await getPlacementDrives();
      setPlacementDrives(data);
    };
    fetchPlacementDrives();
  }, []);

  const handleDetailsClick = (drive) => {
    alert(
      `Drive Name: ${drive.name}\nDate: ${new Date(
        drive.date
      ).toLocaleDateString()}\nParticipants: ${drive.participants
        .map((p) => p.name)
        .join(", ")}`
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-8 rounded-lg shadow-xl max-w-2xl mx-auto mt-10 transform transition-all duration-500 hover:scale-105">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-4 sm:mb-8 animate-fade-in">
        Placement Drives
      </h2>
      <ul className="space-y-4 sm:space-y-6">
        {placementDrives.map((drive) => (
          <li
            key={drive._id}
            className="flex flex-col p-4 sm:p-6 border-l-4 border-blue-500 rounded-lg shadow-sm bg-white hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Drive Header: Name and Icon */}
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-indigo-500 mr-3" size={20} />
              <h3 className="font-semibold text-lg sm:text-xl text-gray-700">
                {drive.name}
              </h3>
            </div>

            {/* Drive Date and Participants */}
            <div className="text-gray-600 mb-4">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-indigo-500 mr-2" size={18} />
                <span className="font-semibold">Date:</span>{" "}
                {new Date(drive.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <FaUsers className="text-indigo-500 mr-2" size={18} />
                <span className="font-semibold">Participants:</span>{" "}
                {drive.participants.map((p) => p.name).join(", ")}
              </div>
            </div>

            {/* "Details" Button */}
            <div className="mt-auto">
              <button
                className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all"
                onClick={() => handleDetailsClick(drive)}
              >
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlacementDriveList;

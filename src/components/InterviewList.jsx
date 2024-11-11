import React, { useEffect, useState } from "react";
import { getInterviews } from "../services/api";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

function InterviewList() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      const { data } = await getInterviews();
      setInterviews(data);
    };
    fetchInterviews();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-xl max-w-4xl mx-auto mt-10 transform transition-all duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8 animate-fade-in">
        Scheduled Interviews
      </h2>
      <ul className="space-y-6">
        {interviews.map((interview) => (
          <li
            key={interview._id}
            className="flex items-center p-6 border-l-4 rounded-lg shadow-sm bg-white hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Icon for Student */}
            <div className="mr-4 text-indigo-500">
              <FaUser size={24} />
            </div>

            {/* Interview Details */}
            <div className="flex-1">
              <div className="font-semibold text-lg">
                <span className="text-gray-700">Student: </span>
                <span className="text-blue-700">
                  {interview.studentId?.name ?? "Unknown"}
                </span>
              </div>
              <div className="text-gray-600 mt-2">
                <FaCalendarAlt className="inline mr-2 text-indigo-500" />
                <span>{new Date(interview.date).toLocaleDateString()}</span>
              </div>
              <div className="text-gray-600 mt-2">
                <FaClock className="inline mr-2 text-indigo-500" />
                <span>{interview.time}</span>
              </div>
            </div>

            {/* Status Badge (Optional) */}
            <div className="ml-4">
              <span className="bg-indigo-200 text-indigo-600 py-1 px-3 rounded-full text-sm">
                Scheduled
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InterviewList;

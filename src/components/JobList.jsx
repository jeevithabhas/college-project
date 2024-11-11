import React, { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import { FaBriefcase, FaBuilding, FaListAlt } from "react-icons/fa";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await getJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-xl max-w-4xl mx-auto mt-10 transform transition-all duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8 animate-fade-in">
        Job Postings
      </h2>
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li
            key={job._id}
            className="flex flex-col p-6 border-l-4 rounded-lg shadow-sm bg-white hover:shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Job Header: Company and Title */}
            <div className="flex items-center mb-4">
              <FaBuilding className="text-indigo-500 mr-3" size={20} />
              <h3 className="font-semibold text-xl text-gray-700">
                {job.name}
              </h3>
              <div className="ml-auto bg-indigo-200 text-indigo-600 py-1 px-3 rounded-full text-sm">
                <FaBriefcase className="inline mr-1" size={16} />
                {job.jobTitle}
              </div>
            </div>

            {/* Job Description */}
            <div className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-800">Description:</span>{" "}
              {job.description}
            </div>

            {/* Job Requirements */}
            <div className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-800">Requirements:</span>{" "}
              {job.requirements}
            </div>

            {/* Apply Now Button */}
            <div className="mt-auto">
              <button
                className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all"
                onClick={() => alert(`Applied to ${job.jobTitle}`)}
              >
                Apply Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

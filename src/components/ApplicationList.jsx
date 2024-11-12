import React, { useEffect, useState } from "react";
import { getApplications } from "../services/api";

function ApplicationList() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const { data } = await getApplications();
      setApplications(data);
    };
    fetchApplications();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-xl max-w-2xl mx-auto mt-10 transform transition-all duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 animate-fade-in">
        📄 Student Applications
      </h2>
      <ul className="space-y-6">
        {applications.map((app) => (
          <li
            key={app._id}
            className="p-5 border-l-4 border-blue-500 rounded-lg shadow-sm bg-white flex justify-between items-center hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{app.name}</h3>
              <p className="text-gray-600">
                Status:{" "}
                <span
                  className={`inline-block px-3 py-1 mt-2 text-sm font-medium rounded-full ${
                    app.applicationStatus === "Submitted"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {app.applicationStatus}
                </span>
              </p>
            </div>
            {app.applicationStatus === "Submitted" && (
              <span className="px-3 py-1 ml-2 text-xs font-semibold text-white bg-green-500 rounded-full animate-bounce">
                ✅ Submitted
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationList;

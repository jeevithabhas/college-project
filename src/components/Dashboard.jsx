import React, { useEffect, useState } from "react";
import {
  getApplications,
  getInterviews,
  getJobs,
  getPlacementDrives,
} from "../services/api";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto"; // Important for Chart.js v3+
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCalendarCheck,
  faBriefcase,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [applicationsCount, setApplicationsCount] = useState(0);
  const [interviewsCount, setInterviewsCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  const [placementDrivesCount, setPlacementDrivesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const applications = await getApplications();
        const interviews = await getInterviews();
        const jobs = await getJobs();
        const placementDrives = await getPlacementDrives();

        setApplicationsCount(applications.data.length);
        setInterviewsCount(interviews.data.length);
        setJobsCount(jobs.data.length);
        setPlacementDrivesCount(placementDrives.data.length);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const barData = {
    labels: ["Applications", "Interviews", "Jobs", "Placement Drives"],
    datasets: [
      {
        label: "Count",
        data: [
          applicationsCount,
          interviewsCount,
          jobsCount,
          placementDrivesCount,
        ],
        backgroundColor: ["#4A90E2", "#50E3C2", "#F5A623", "#B8E986"],
        borderColor: ["#4178BE", "#39A388", "#D38F19", "#9DC12B"],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Applications", "Interviews", "Jobs", "Placement Drives"],
    datasets: [
      {
        label: "Count",
        data: [
          applicationsCount,
          interviewsCount,
          jobsCount,
          placementDrivesCount,
        ],
        backgroundColor: ["#4A90E2", "#50E3C2", "#F5A623", "#B8E986"],
        borderColor: ["#fff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl transform transition-transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Welcome to your Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="text-blue-700 text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                {applicationsCount}
              </h3>
              <p className="text-gray-600">Applications</p>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="text-green-700 text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                {interviewsCount}
              </h3>
              <p className="text-gray-600">Scheduled Interviews</p>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-yellow-700 text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">
                {jobsCount}
              </h3>
              <p className="text-gray-600">Job Postings</p>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-purple-700 text-3xl"
            />
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                {placementDrivesCount}
              </h3>
              <p className="text-gray-600">Placement Drives</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <Bar data={barData} options={options} />
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

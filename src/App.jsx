import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ApplicationList from "./components/ApplicationList";
import InterviewList from "./components/InterviewList";
import JobList from "./components/JobList";
import PlacementDriveList from "./components/PlacementDriveList";
import StudentApplicationForm from "./components/StudentApplicationForm";
import InterviewScheduleForm from "./components/InterviewScheduleForm";
import JobPostingForm from "./components/JobPostingForm";
import PlacementDriveForm from "./components/PlacementDriveForm";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applications" element={<ApplicationList />} />
            <Route path="/interviews" element={<InterviewList />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/placement-drives" element={<PlacementDriveList />} />
            <Route
              path="/student-application-form"
              element={<StudentApplicationForm />}
            />
            <Route
              path="/interview-schedule-form"
              element={<InterviewScheduleForm />}
            />
            <Route path="/job-posting-form" element={<JobPostingForm />} />
            <Route
              path="/placement-drive-form"
              element={<PlacementDriveForm />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
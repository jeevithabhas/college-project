import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SignupForm from "./components/Auth/SignupForm";
import LoginForm from "./components/Auth/LoginForm";
import ApplicationList from "./components/ApplicationList";
import InterviewList from "./components/InterviewList";
import JobList from "./components/JobList";
import PlacementDriveList from "./components/PlacementDriveList";
import StudentApplicationForm from "./components/StudentApplicationForm";
import InterviewScheduleForm from "./components/InterviewScheduleForm";
import JobPostingForm from "./components/JobPostingForm";
import PlacementDriveForm from "./components/PlacementDriveForm";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

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
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={Dashboard} />}
            />
            <Route
              path="/applications"
              element={<PrivateRoute element={ApplicationList} />}
            />
            <Route
              path="/interviews"
              element={<PrivateRoute element={InterviewList} />}
            />
            <Route path="/jobs" element={<PrivateRoute element={JobList} />} />
            <Route
              path="/placement-drives"
              element={<PrivateRoute element={PlacementDriveList} />}
            />
            <Route
              path="/student-application-form"
              element={<PrivateRoute element={StudentApplicationForm} />}
            />
            <Route
              path="/interview-schedule-form"
              element={<PrivateRoute element={InterviewScheduleForm} />}
            />
            <Route
              path="/job-posting-form"
              element={<PrivateRoute element={JobPostingForm} />}
            />
            <Route
              path="/placement-drive-form"
              element={<PrivateRoute element={PlacementDriveForm} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

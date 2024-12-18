import axios from "axios";

const api = axios.create({
  baseURL: "https://college-backend-i6yo.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
});

export const getStudents = () => api.get("/students");
export const getInterviews = () => api.get("/interviews");
export const getJobs = () => api.get("/companies");
export const getPlacementDrives = () => api.get("/placement-drives");
export const createJob = (job) => api.post("/companies", job);
export const createPlacementDrive = (drive) =>
  api.post("/placement-drives", drive);
export const submitApplication = (application) =>
  api.post("/students/register", application, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const scheduleInterview = (interview) =>
  api.post("/interviews/schedule", interview);
export const getApplications = () => api.get("/students");

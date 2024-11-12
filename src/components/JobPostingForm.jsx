import React, { useState } from "react";
import { createJob } from "../services/api";

function JobPostingForm() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = { name, jobTitle, description, requirements };
    try {
      await createJob(newJob);
      setShowModal(true);
      setName("");
      setJobTitle("");
      setDescription("");
      setRequirements("");
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all hover:scale-105"
      >
        <h2 className="text-3xl mb-6 font-bold text-center tracking-wide animate-slide-in">
          Post a Job
        </h2>

        <label className="block mb-2 font-medium">Company Name</label>
        <input
          type="text"
          placeholder="Enter Company Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />

        <label className="block mb-2 font-medium">Job Title</label>
        <input
          type="text"
          placeholder="Enter Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />

        <label className="block mb-2 font-medium">Job Description</label>
        <textarea
          placeholder="Describe the job role"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105 resize-none h-28"
          required
        />

        <label className="block mb-2 font-medium">Requirements</label>
        <textarea
          placeholder="List the requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="mb-6 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105 resize-none h-28"
          required
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition transform hover:scale-105"
        >
          Post Job
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl transform transition-all hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 animate-slide-in">
              Job Posted!
            </h3>
            <p className="mb-4 text-green-600 font-semibold">
              🎉 The job has been successfully posted. Applicants will be able
              to view and apply soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full p-3 bg-red-500 text-white rounded hover:bg-red-600 transition transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPostingForm;

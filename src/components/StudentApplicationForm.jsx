import React, { useState } from "react";
import { submitApplication } from "../services/api";

function StudentApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.name === "resume") {
      setResume(e.target.files[0]);
    } else if (e.target.name === "coverLetter") {
      setCoverLetter(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    formData.append("coverLetter", coverLetter);

    try {
      await submitApplication(formData);
      setShowModal(true);
      setName("");
      setEmail("");
      setResume(null);
      setCoverLetter(null);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all hover:scale-105"
      >
        <h2 className="text-3xl mb-6 font-bold text-center tracking-wide animate-slide-in">
          Student Application
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />
        <label className="block mb-2 font-medium">Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />
        <label className="block mb-2 font-medium">Cover Letter</label>
        <input
          type="file"
          name="coverLetter"
          onChange={handleFileChange}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition transform hover:scale-105"
        >
          Submit Application
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl transform transition-all hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 animate-slide-in">
              Application Submitted!
            </h3>
            <p className="mb-4 text-green-600 font-semibold">
              🎉 Thank you for submitting your application. We will review it
              and get back to you soon.
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

export default StudentApplicationForm;

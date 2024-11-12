import React, { useState, useEffect } from "react";
import { scheduleInterview, getStudents } from "../services/api";

function InterviewScheduleForm() {
  const [formData, setFormData] = useState({
    studentId: "",
    date: "",
    time: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    const selectedStudent = students.find(
      (student) => student.email === e.target.value
    );
    setFormData({ ...formData, studentId: selectedStudent._id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await scheduleInterview(formData);
      setShowModal(true);
      setFormData({ studentId: "", date: "", time: "" });
    } catch (error) {
      console.error("Error scheduling interview:", error);
      alert("Failed to schedule interview. Please try again.");
    }
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all hover:scale-105"
      >
        <h2 className="text-3xl mb-6 font-bold text-center tracking-wide animate-slide-in">
          Schedule Interview
        </h2>

        <label className="block mb-2 font-medium">Select Student</label>
        <select
          name="email"
          onChange={handleSelectChange}
          required
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
        >
          <option value="">Choose a student</option>
          {students.map((student) => (
            <option key={student._id} value={student.email}>
              {student.name} ({student.email})
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
        />

        <label className="block mb-2 font-medium">Time</label>
        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
          className="w-full mb-6 p-3 border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition transform hover:scale-105"
        >
          Schedule Interview
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl transform transition-all hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 animate-slide-in">
              Interview Scheduled!
            </h3>
            <p className="mb-4 text-green-600 font-semibold">
              🎉 The interview has been successfully scheduled. We will notify
              the student soon.
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

export default InterviewScheduleForm;

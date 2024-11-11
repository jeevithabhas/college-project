import React, { useState, useEffect } from "react";
import { createPlacementDrive, getStudents } from "../services/api";

function PlacementDriveForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await getStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDrive = { name, date, participants: [selectedParticipant] };
    try {
      await createPlacementDrive(newDrive);
      setShowModal(true);
      setName("");
      setDate("");
      setSelectedParticipant("");
    } catch (error) {
      console.error("Error creating placement drive:", error);
      alert("Failed to create placement drive. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all hover:scale-105"
      >
        <h2 className="text-3xl mb-6 font-bold text-center tracking-wide animate-slide-in">
          Create Placement Drive
        </h2>

        <label className="block mb-2 font-medium">Drive Name</label>
        <input
          type="text"
          placeholder="Enter Drive Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />

        <label className="block mb-2 font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        />

        <label className="block mb-2 font-medium">Select Participant</label>
        <select
          value={selectedParticipant}
          onChange={(e) => setSelectedParticipant(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 transition transform hover:scale-105"
          required
        >
          <option value="" disabled>
            Select a participant
          </option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name} ({student.email})
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full p-3 rounded hover:bg-gray-200 transition transform hover:scale-105"
        >
          Create Drive
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-2xl transform transition-all hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 animate-slide-in">
              Placement Drive Created!
            </h3>
            <p className="mb-4">
              The placement drive has been successfully created. We will notify
              the participants soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full p-3 rounded hover:bg-gray-200 transition transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlacementDriveForm;

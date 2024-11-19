import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending signup data:", formData); // Add logging
      await axios.post(
        "https://college-backend-i6yo.onrender.com/api/auth/signup",
        formData
      );
      setErrorMessage(""); // Clear any previous error messages
      setSuccessMessage("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login"); // Navigate to login after successful signup
      }, 2000); // 2-second delay before redirection
    } catch (error) {
      console.error("Signup error:", error); // Log error details
      if (error.response && error.response.status === 400) {
        setErrorMessage("User already exists. Please login.");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md transform transition-transform hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
          Sign Up
        </h2>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">
            {errorMessage}{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </div>
        )}
        {successMessage && (
          <div className="mb-4 text-green-500 text-center">
            {successMessage}
          </div>
        )}
        <div className="mb-4 relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform transform hover:scale-105"
          />
        </div>
        <div className="mb-4 relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform transform hover:scale-105"
          />
        </div>
        <div className="mb-6 relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-transform transform hover:scale-105"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;

import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'error' or 'success'
  const [loading, setLoading] = useState(false); // State to manage loading spinner
  const [emailValid, setEmailValid] = useState(true); // State to track email validity
  const [passwordValid, setPasswordValid] = useState(true); // State to track password validity
  const navigate = useNavigate(); // Use useNavigate hook for redirection

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    if (name === "email") {
      setEmailValid(validateEmail(value));
    }
    if (name === "password") {
      setPasswordValid(value.length >= 6);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner
    try {
      console.log("Sending signup data:", formData); // Add logging
      await axios.post(
        "https://college-backend-i6yo.onrender.com/api/auth/signup",
        formData
      );
      setMessageType("success");
      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login"); // Navigate to login after successful signup
      }, 2000); // 2-second delay before redirection
    } catch (error) {
      console.error("Signup error:", error); // Log error details
      setMessageType("error");
      if (error.response && error.response.status === 400) {
        setMessage("User already exists. Please login.");
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md transform transition-transform hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 animate-pulse">
          Sign Up
        </h2>
        {message && (
          <div
            className={`mb-4 text-center ${
              messageType === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
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
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 transition-transform transform hover:scale-105`}
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
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 transition-transform transform hover:scale-105 ${
              emailValid
                ? "border-gray-300 focus:ring-blue-500"
                : "border-red-500 focus:ring-red-500"
            }`}
          />
          {!emailValid && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="mb-6 relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 transition-transform transform hover:scale-105 ${
              passwordValid
                ? "border-gray-300 focus:ring-blue-500"
                : "border-red-500 focus:ring-red-500"
            }`}
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {!passwordValid && (
            <p className="text-red-500 text-xs mt-1">
              Password must be at least 6 characters long.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          {loading ? <FaSpinner className="animate-spin mx-auto" /> : "Sign Up"}
        </button>
        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;

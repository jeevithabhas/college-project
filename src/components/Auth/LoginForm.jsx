import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'error' or 'success'
  const navigate = useNavigate(); // Use useNavigate hook for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending login data:", formData); // Add logging
      const response = await axios.post(
        "https://college-backend-i6yo.onrender.com/api/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      setMessageType("success");
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to dashboard after login
      }, 2000); // 2-second delay before redirection
    } catch (error) {
      console.error("Login error:", error); // Log error details
      setMessageType("error");
      if (error.response && error.response.status === 404) {
        setMessage(
          "User does not exist. Please signup first. <Link to='/signup' className='text-blue-500 underline'>Signup</Link>"
        );
      } else if (error.response && error.response.status === 401) {
        setMessage("Invalid credentials. Please try again.");
      } else {
        setMessage("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md transform transition-transform hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Login
        </h2>
        {message && (
          <div
            className={`mb-4 text-center ${
              messageType === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            <span dangerouslySetInnerHTML={{ __html: message }}></span>
          </div>
        )}
        <div className="mb-4 relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
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
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
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
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;

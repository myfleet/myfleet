

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../auth/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fleet-node.vercel.app/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { name, companyName } = response.data;
      toast.success(`Welcome back, ${name} from ${companyName}!`, {
        position: "top-right",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      login();
      setTimeout(() => {
        navigate("/dashboard");
      }, 300);
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Something went wrong. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/registration");
  };

  const handleBack = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1565110131394-5be31802b92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-indigo-900/80 z-0"></div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 text-white flex items-center space-x-2 hover:text-yellow-400 transition-transform transform hover:scale-105 z-10"
      >
        <FaArrowLeft className="text-2xl" />
        <span className="text-lg font-semibold">Back</span>
      </button>

      {/* Login Card */}
      <div className="relative bg-white bg-opacity-95 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-md w-full z-10 animate-fade-in">
        <ToastContainer />

        {/* Heading */}
        <h1
  className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-center mb-6 cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
  onClick={handleBack}
>
  🚗 MyFleet
</h1>

        <h2 className="text-lg text-center text-gray-600 mb-8">
          Sign in to <span className="font-semibold text-blue-800">myFleet</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50"
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-600 hover:text-blue-600"
            >
              {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-transform transform hover:scale-105 shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={handleSignUp}
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot your password?{" "}
            <a
              href="/reset-password"
              className="text-blue-600 font-semibold hover:underline"
            >
              Reset Password
            </a>
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
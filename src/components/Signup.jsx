import React from "react";

const SignupPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }} // Replace with your image path
    >
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        {/* Heading */}
        <h1 className="text-xl font-bold text-blue-800 text-center mb-4">
          Sign Up
        </h1>
        <h2 className="text-sm text-center text-gray-600 mb-4">
          Create your account on{" "}
          <span className="font-semibold text-blue-800">MyFleet</span>
        </h2>

        {/* Form */}
        <form>
          {/* Full Name Input */}
          <div className="mb-3">
            <label
              htmlFor="fullname"
              className="block text-sm text-gray-700 font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-3">
            <label
              htmlFor="confirm-password"
              className="block text-sm text-gray-700 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

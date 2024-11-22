// import React from "react";

// const LoginPage = () => {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/login.jpg')" }} // Adjust the image path as necessary
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">
//           Sign In
//         </h1>
//         <h2 className="text-lg text-center text-gray-600 mb-8">
//           Welcome to <span className="font-semibold text-blue-800">MyFleet</span>
//         </h2>

//         {/* Form */}
//         <form>
//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="number"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               User Id
//             </label>
//             <input
//               type="number"
//               id=""
//               placeholder="Enter your user id"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* Additional Links */}
//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a
//               href="#signup"
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               Sign Up
//             </a>
//           </p>
//           <p className="text-sm text-gray-600 mt-2">
//             Forgot your password?{" "}
//             <a
//               href="#reset"
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               Reset Password
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/"); // Redirect to "/home" on successful sign-in
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/registration"); // Redirect to "/registration" on sign-up
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/login.jpg')" }} // Adjust the image path as necessary
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">
          Sign In
        </h1>
        <h2 className="text-lg text-center text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-blue-800">MyFleet</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-gray-700 font-semibold mb-2"
            >
              User Id
            </label>
            <input
              type="number"
              id=""
              placeholder="Enter your user id"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
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
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot your password?{" "}
            <a
              href="#reset"
              className="text-blue-500 font-semibold hover:underline"
            >
              Reset Password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

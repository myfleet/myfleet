// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white">
//       <div className="container mx-auto px-1 py-1 flex justify-between items-center">
//       <div className="flex items-center">
//           <img
//             src="/logo.png" // Replace with your logo's path
//             alt="Logo"
//             className="h-16 w-16 rounded-xl" // Adjust size as needed
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex gap-6">
//           <a href="#home" className="hover:text-blue-400 transition text-xl">
//             Home
//           </a>
//           <a href="#about" className="hover:text-blue-400 text-xl transition">
//             About Us
//           </a>
//           <a href="#services" className="hover:text-blue-400 text-xl transition">
//             Services
//           </a>
//         </nav>

//         {/* Actions */}
//         <div className="flex gap-4">
//           <button className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded text-white transition">
//             Sign In
//           </button>
//           <button className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded text-white transition">
//             Sign Up
//           </button>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button
//             type="button"
//             className="text-white focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden bg-gray-700 text-center py-2">
//         <a
//           href="#home"
//           className="block py-2 hover:bg-gray-600 hover:text-blue-400 transition"
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           className="block py-2 hover:bg-gray-600 hover:text-blue-400 transition"
//         >
//           About Us
//         </a>
//         <a
//           href="#services"
//           className="block py-2 hover:bg-gray-600 hover:text-blue-400 transition"
//         >
//           Services
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-1 py-1 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with your logo's path
            alt="Logo"
            className="h-16 w-16 rounded-xl" // Adjust size as needed
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-400 transition text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 text-xl transition">
            About Us
          </Link>
          <Link to="/services" className="hover:text-blue-400 text-xl transition">
            Services
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded text-white transition"
          >
            Sign In
          </Link>
          <Link
            to="/registration"
            className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded text-white transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-700 text-center py-2">
        <Link
          to="/"
          className="block py-2 hover:bg-gray-600 hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block py-2 hover:bg-gray-600 hover:text-blue-400 transition"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="block py-2 hover:bg-gray-600 hover:text-blue-400 transition"
        >
          Services
        </Link>
      </div>
    </header>
  );
};

export default Header;

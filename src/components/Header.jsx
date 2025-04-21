

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout && onLogout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-gray-800 text-white shadow-md z-30">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold md:text-xl">myFleet</span>
      </div>

      {/* User Info and Logout */}
      <div className="flex items-center space-x-3">
        {/* User Info */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl md:text-3xl" />
          {/* <span className="text-sm md:text-base hidden md:block">{userName || "User"}</span> */}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
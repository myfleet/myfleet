

// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Header = ({ userName, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = (e) => {
//     e.preventDefault();
//     onLogout && onLogout();
//     navigate("/login");
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-gray-800 text-white shadow-md z-30">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <span className="text-lg font-bold md:text-xl">myFleet</span>
//       </div>

//       {/* User Info and Logout */}
//       <div className="flex items-center space-x-3">
//         {/* User Info */}
//         <div className="flex items-center space-x-2">
//           <FaUserCircle className="text-2xl md:text-3xl" />
//           {/* <span className="text-sm md:text-base hidden md:block">{userName || "User"}</span> */}
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes, FaCarAlt, FaUserAlt, FaTruck ,FaReceipt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ userName, onLogout, toggleSidebar }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout && onLogout();
    navigate("/login");
  };

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FaReceipt className="mr-2" /> },
    { path: "/vehical-masterr", name: "Create Vehicle Master", icon: <FaCarAlt className="mr-2" /> },
    { path: "/drivermaster", name: "Create Driver Master", icon: <FaUserAlt className="mr-2" /> },
    { path: "/tripmaster", name: "Trip Master", icon: <FaTruck className="mr-2" /> },
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-gray-800 text-white shadow-md z-30">
      {/* Logo and Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button - Visible only on mobile */}
        <button 
          onClick={toggleSidebar || toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <span className="text-lg font-bold md:text-xl">myFleet</span>
      </div>

      {/* Mobile Menu - Shows when hamburger is clicked */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-700 md:hidden z-40">
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigateTo(item.path)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-600 flex items-center"
                >
                  {item.icon}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* User Info and Logout */}
      <div className="flex items-center space-x-3">
        {/* User Info */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl md:text-3xl" />
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
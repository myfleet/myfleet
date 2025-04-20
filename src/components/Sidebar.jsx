
// import React, { useState } from "react";
// import {
//   FaBars,
//   FaCarAlt,
//   FaUserAlt,
//   FaMapMarkerAlt,
//   FaMoneyBillAlt,
//   FaUserTie,
//   FaTruck,
//   FaReceipt,
//   FaFileInvoiceDollar,
//   FaBook,
//   FaChartLine,
//   FaBuilding,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const toggle = () => setIsOpen(!isOpen);

//   const menuItems = [
//     { path: "/vehical-masterr", name: "Create Vehicle Master", icon: <FaCarAlt /> },
//     { path: "/drivermaster", name: "Create Driver Master", icon: <FaUserAlt /> },
//     { path: "/pin-master", name: "Pin Master", icon: <FaMapMarkerAlt /> },
//     { path: "/expancemanagement", name: "Create Expense Master", icon: <FaMoneyBillAlt /> },
//     { path: "/assign-driver", name: "Assign Driver to Vehicle", icon: <FaUserTie /> },
//     { path: "/create-trip", name: "Create Trip", icon: <FaTruck /> },
//     { path: "/create-trip-expense", name: "Create Trip Wise Expense", icon: <FaReceipt /> },
//     { path: "/create-trip-invoice", name: "Create Trip Wise Invoice", icon: <FaFileInvoiceDollar /> },
//     { path: "/create-trip-payment", name: "Create Trip Wise Payment", icon: <FaMoneyBillAlt /> },
//     { path: "/create-day-book", name: "Create Day Book", icon: <FaBook /> },
//     { path: "/profit-loss", name: "Profit & Loss Account", icon: <FaChartLine /> },
//     { path: "/company-master", name: "Company Master", icon: <FaBuilding /> },
//   ];

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 z-20 ${
//           isOpen ? "w-64" : "w-16"
//         }`}
//       >
//         {/* Top Section */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <NavLink to="/dashboard" className="flex items-center">
//             {isOpen && <h1 className="text-xl font-bold">myFleet</h1>}
//           </NavLink>
//           <button
//             className="text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onClick={toggle}
//           >
//             <FaBars />
//           </button>
//         </div>

//         {/* Scrollable Menu Items */}
//         <div className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden">
//           <style>
//             {`
//               /* Hide scrollbar for Chrome, Safari, and Edge */
//               .scrollbar-hidden::-webkit-scrollbar {
//                 display: none;
//               }
//               /* Hide scrollbar for Firefox */
//               .scrollbar-hidden {
//                 scrollbar-width: none;
//               }
//               /* Hide scrollbar for IE and Edge */
//               .scrollbar-hidden {
//                 -ms-overflow-style: none;
//               }
//             `}
//           </style>
//           <div className="flex flex-col">
//             {menuItems.map((item, index) => (
//               <NavLink
//                 to={item.path}
//                 key={index}
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
//                     isActive ? "bg-gray-700" : ""
//                   }`
//                 }
//               >
//                 <div className="text-lg">{item.icon}</div>
//                 <span className={`ml-3 ${isOpen ? "block" : "hidden"}`}>{item.name}</span>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main
//         className={`flex-grow bg-gray-100 transition-all duration-300 pt-16 ${
//           isOpen ? "ml-64" : "ml-16"
//         }`}
//       >
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  FaBars,
  FaCarAlt,
  FaUserAlt,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaUserTie,
  FaTruck,
  FaReceipt,
  FaFileInvoiceDollar,
  FaBook,
  FaChartLine,
  FaBuilding,
  FaTachometerAlt // Dashboard icon
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { path: "/vehical-masterr", name: "Create Vehicle Master", icon: <FaCarAlt /> },
    { path: "/drivermaster", name: "Create Driver Master", icon: <FaUserAlt /> },
    { path: "/pin-master", name: "Pin Master", icon: <FaMapMarkerAlt /> },
    { path: "/expancemanagement", name: "Create Expense Master", icon: <FaMoneyBillAlt /> },
    { path: "/assign-driver", name: "Assign Driver to Vehicle", icon: <FaUserTie /> },
    { path: "/create-trip", name: "Create Trip", icon: <FaTruck /> },
    { path: "/create-trip-expense", name: "Create Trip Wise Expense", icon: <FaReceipt /> },
    { path: "/create-trip-invoice", name: "Create Trip Wise Invoice", icon: <FaFileInvoiceDollar /> },
    { path: "/create-trip-payment", name: "Create Trip Wise Payment", icon: <FaMoneyBillAlt /> },
    { path: "/create-day-book", name: "Create Day Book", icon: <FaBook /> },
    { path: "/profit-loss", name: "Profit & Loss Account", icon: <FaChartLine /> },
    { path: "/company-master", name: "Company Master", icon: <FaBuilding /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 z-20 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <NavLink to="/dashboard" className="flex items-center">
            {isOpen && <h1 className="text-xl font-bold">myFleet</h1>}
          </NavLink>
          <button
            className="text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggle}
          >
            <FaBars />
          </button>
        </div>

        {/* Scrollable Menu Items */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden">
          <style>
            {`
              .scrollbar-hidden::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hidden {
                scrollbar-width: none;
                -ms-overflow-style: none;
              }
            `}
          </style>
          <div className="flex flex-col">
            {/* Dashboard Link - Always visible */}
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <div className="text-lg"><FaTachometerAlt /></div>
              <span className={`ml-3 ${isOpen ? "block" : "hidden"}`}>Dashboard</span>
              {!isOpen && (
                <div className="absolute left-14 bg-gray-900 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Dashboard
                </div>
              )}
            </NavLink>

            {/* Other Menu Items */}
            {menuItems.map((item, index) => (
              <div key={index} className="group relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
                      isActive ? "bg-gray-700" : ""
                    }`
                  }
                >
                  <div className="text-lg">{item.icon}</div>
                  <span className={`ml-3 ${isOpen ? "block" : "hidden"}`}>{item.name}</span>
                </NavLink>
                {!isOpen && (
                  <div className="absolute left-14 bg-gray-900 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`flex-grow bg-gray-100 transition-all duration-300 pt-16 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
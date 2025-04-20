


// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


// import VehicalMaster from "./pages/VehicalMaster";
// import DriverMaster from "./pages/DriverMaster";
// import ExpanceMaster from "./pages/ExpanceMaster";
// import PinMaster from "./pages/PinMaster";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import LoginPage from "./components/Login";
// import SignupPage from "./components/Signup";
// import { AuthProvider } from "./auth/AuthContext";
// import ProtectedRoute from "./auth/ProtectedRoute";
// import HeroSection from "./components/Landing";
// import AboutUs from "./components/About";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Redirect to /login on first render */}
//           <Route path="/" element= {<HeroSection/>} />

//           {/* Login and Signup Routes */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/registration" element={<SignupPage />} />
//           <Route path="/About-us" element={<AboutUs />} />

//           {/* Protected Routes */}
//           <Route
//             path="/*"
//             element={
//               <ProtectedRoute>
//                 <Sidebar>
//                   <Routes>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/vehical-master" element={<VehicalMaster />} />
//                     <Route path="/driver-master" element={<DriverMaster />} />
//                     <Route path="/expancemanagement" element={<ExpanceMaster />} />
//                     <Route path="/pinmaster" element={<PinMaster />} />
//                     <Route path="/vehical-masterr" element={<VehicalMaster />} />
//                     <Route path="/drivermaster" element={<DriverMaster />} />
//                   </Routes>
//                 </Sidebar>
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VehicalMaster from "./pages/VehicalMaster";
import DriverMaster from "./pages/DriverMaster";
import ExpanceMaster from "./pages/ExpanceMaster";
import PinMaster from "./pages/PinMaster";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import HeroSection from "./components/Landing";
import AboutUs from "./components/About";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Sidebar>
                  <Dashboard />
                </Sidebar>
              </ProtectedRoute>
            }
          />
          <Route
            path="/vehical-master"
            element={
              <ProtectedRoute>
                <Sidebar>
                  <VehicalMaster />
                </Sidebar>
              </ProtectedRoute>
            }
          />
          <Route
            path="/driver-master"
            element={
              <ProtectedRoute>
                <Sidebar>
                  <DriverMaster />
                </Sidebar>
              </ProtectedRoute>
            }
          />
          <Route
            path="/expancemanagement"
            element={
              <ProtectedRoute>
                <Sidebar>
                  <ExpanceMaster />
                </Sidebar>
              </ProtectedRoute>
            }
          />
          <Route
            path="/pinmaster"
            element={
              <ProtectedRoute>
                <Sidebar>
                  <PinMaster />
                </Sidebar>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

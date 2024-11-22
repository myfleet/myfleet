// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LoginPage from "./components/Login";

// import FleetComponent from "./components/Dashboard";
// import Header from "./components/Header";
// import SignupPage from "./components/Signup";



// const App = () => {
//   return (
//     <Router>
    
      
//       <Header/>
      
//       <Routes>
        
//        <Route path="/" element={<FleetComponent/>} />
//         <Route path="/login" element={<LoginPage/>} />
//         <Route path="/registration" element={  <SignupPage/>} />
      
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./components/Login";
import FleetComponent from "./components/Dashboard";
import Header from "./components/Header";
import SignupPage from "./components/Signup";

const App = () => {
  const AppWrapper = () => {
    const location = useLocation();

    // Define routes where Header should not appear
    const hideHeaderRoutes = ["/login", "/registration"];
    const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    return (
      <>
        {/* Conditionally render Header */}
        {!shouldHideHeader && <Header />}
        <Routes>
          <Route path="/" element={<FleetComponent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<SignupPage />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;

// import React, {  useState } from 'react';
// import Navbar from './Navbar';
// import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
// // import LoginPopup from './LoginPopup';



// function Layout() {
//   const [showLogin, setShowLogin] = useState(false);
 

//   return (
//     <div
      
//     >
      
//       {/* {showLogin && <LoginPopup setShowLogin={setShowLogin} />} */}

//       <Navbar setShowLogin={setShowLogin} />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// export default Layout;














// import React, { useState, useContext } from "react";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import { AuthContext } from "../context/AuthContext";

// function Layout() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// export default Layout;
import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthContext";

function Layout() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  
  const hideNavFooter = location.pathname === "/" || location.pathname === "/register" || location.pathname === "/login";

  return (
    <div>
      {!hideNavFooter && <Navbar />}
      <Outlet />
      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default Layout;

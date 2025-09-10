
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

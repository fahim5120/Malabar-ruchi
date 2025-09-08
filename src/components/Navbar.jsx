import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "./StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getTotalCartAmount, cartItems } = useContext(StoreContext);

  return (
    <>
      <nav className="w-full flex items-center justify-between bg-amber-900 text-white px-4 sm:px-6 py-4 shadow-md relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={() => setMenu("home")}>
            <img src={assets.logo} alt="logo" className="h-8 sm:h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`cursor-pointer transition ${
              menu === "home"
                ? "text-amber-300 underline underline-offset-4"
                : "hover:text-amber-300"
            }`}
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={() => setMenu("menu")}
            className={`cursor-pointer transition ${
              menu === "menu"
                ? "text-amber-300 underline underline-offset-4"
                : "hover:text-amber-300"
            }`}
          >
            Menu
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenu("contact")}
            className={`cursor-pointer transition ${
              menu === "contact"
                ? "text-amber-300 underline underline-offset-4"
                : "hover:text-amber-300"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon */}
          <img
            src={assets.searchIcon}
            alt="search-icon"
            className="h-6 w-6 cursor-pointer hover:opacity-80"
          />

          {/* Basket Icon */}
          <div className="relative">
            <Link to="/cart">
              <img
                src={assets.basketIcon}
                alt="basketIcon"
                className="h-7 w-7 cursor-pointer hover:opacity-80"
              />
            </Link>

            {/* Cart notification dot */}
            {getTotalCartAmount() > 0 && (
              <div className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center 
                rounded-full bg-amber-900 text-white text-[10px] font-bold shadow-md">
                {Object.values(cartItems).reduce((a, b) => a + b, 0)}
              </div>
            )}
          </div>

          {/* Sign in Button (hidden on xs) */}
          <button
            className="hidden sm:block bg-white text-amber-900 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-amber-100 transition"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-amber-800 flex flex-col items-center gap-4 py-4 md:hidden z-[999] shadow-lg">
            <Link
              to="/"
              onClick={() => {
                setMenu("home");
                setMobileOpen(false);
              }}
              className={`text-lg ${
                menu === "home"
                  ? "text-amber-300 underline underline-offset-4"
                  : "hover:text-amber-300"
              }`}
            >
              Home
            </Link>

            <Link
              to="/menu"
              onClick={() => {
                setMenu("menu");
                setMobileOpen(false);
              }}
              className={`text-lg ${
                menu === "menu"
                  ? "text-amber-300 underline underline-offset-4"
                  : "hover:text-amber-300"
              }`}
            >
              Menu
            </Link>

            <Link
              to="/contact"
              onClick={() => {
                setMenu("contact");
                setMobileOpen(false);
              }}
              className={`text-lg ${
                menu === "contact"
                  ? "text-amber-300 underline underline-offset-4"
                  : "hover:text-amber-300"
              }`}
            >
              Contact Us
            </Link>

            {/* Sign in inside dropdown */}
            <button
              className="bg-white text-amber-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-100 transition"
              onClick={() => {
                setShowLogin(true);
                setMobileOpen(false);
              }}
            >
              Sign in
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

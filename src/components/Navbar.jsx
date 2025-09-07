import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="w-full flex items-center justify-between bg-amber-900 text-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={assets.logo} alt="logo" className="h-10 w-auto" />
      </div>

    

<div className="hidden md:flex gap-8 text-lg font-medium">
  <Link
    to="/home"
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


      {/* Icons + Button */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          src={assets.searchIcon}
          alt="search-icon"
          className="h-6 w-6 cursor-pointer hover:opacity-80"
        />

        {/* Basket Icon */}
        <div className="relative">
          <img
            src={assets.basketIcon}
            alt="basketIcon"
            className="h-7 w-7 cursor-pointer hover:opacity-80"
          />
          {/* Dot (cart notification) */}
          <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-white border-2 border-amber-900"></div>
        </div>

        {/* Sign in Button */}
        <button className="bg-white text-amber-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-100 transition">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

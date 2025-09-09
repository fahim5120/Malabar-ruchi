import React from "react";
import { assets } from "../assets/assets";

function AdminNavbar() {
  return (
    <div className="w-full bg-white shadow-md px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
        {/* Hide text on very small screens */}
        
      </div>

      {/* Right: Profile */}
      <img
        src={assets.profileImage}
        alt="profile"
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
      />
    </div>
  );
}

export default AdminNavbar;

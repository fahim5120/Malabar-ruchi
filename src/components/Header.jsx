import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div
      className="relative h-[34vw] w-full flex items-center justify-center text-center bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url(${assets.headerImg})` }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 bg-black/40 p-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Order your favourite food here
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
          This menu offers delicious Kerala dishes, from spicy meals to sweet
          desserts and refreshing drinks.
        </p>
        <button className="bg-white text-amber-900 px-6 py-3 font-semibold shadow-md hover:bg-amber-100 transition">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;

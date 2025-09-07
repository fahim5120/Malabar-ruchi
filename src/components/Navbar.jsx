import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "./StoreContext";


function Navbar({setShowLogin}) {
const [menu, setMenu] = useState("home");
const{getTotalCartAmount,cartItems}=useContext(StoreContext)

  return (
    <>
    
    <nav className="w-full flex items-center justify-between bg-amber-900 text-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
       <Link to='home'><img src={assets.logo} alt="logo" className="h-10 w-auto" /></Link> 
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
      {/* Basket Icon */}
<div className="relative">
  <Link to="/cart">
    <img
      src={assets.basketIcon}
      alt="basketIcon"
      className="h-7 w-7 cursor-pointer hover:opacity-80"
    />
  </Link>

  {/* Dot (cart notification) */}
  {getTotalCartAmount() > 0 && (
         <div className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center 
                    rounded-full bg-amber-900 text-white text-[10px] font-bold shadow-md">
        {Object.values(cartItems).reduce((a, b) => a + b, 0)}
      </div>
    )}
  </div>


        {/* Sign in Button */}
        <button className="bg-white text-amber-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-100 transition" onClick={()=>setShowLogin(true)}>
          Sign in
        </button>
      </div>
    </nav>
    </>
  );
}


export default Navbar;

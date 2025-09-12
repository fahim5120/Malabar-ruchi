// src/components/Footer.jsx
import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      id="footer"
      className="bg-[#f9f5f0] text-[#5a4634] pt-10 px-6 md:px-16 lg:px-24"
    >
      {/* footer-content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* LEFT: Logo & About */}
        <div>
          <img src={assets.logo} alt="logo" className="w-28 mb-4" />
          <p className="text-sm leading-6 text-justify">
            <span className="font-semibold">Malabar Ruchi</span> <br />
            At Malabar Ruchi, we bring you the authentic taste of Kerala’s
            Malabar region. From spicy seafood delicacies to soft pathiris and
            traditional desserts, we promise to serve you food that feels like
            home – fresh, flavorful, and unforgettable.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={assets.youtubeIcon}
                alt="youtube"
                className="w-6 cursor-pointer hover:opacity-75 transition"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={assets.facebookIcon}
                alt="facebook"
                className="w-6 cursor-pointer hover:opacity-75 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={assets.instagramIcon}
                alt="instagram"
                className="w-6 cursor-pointer hover:opacity-75 transition"
              />
            </a>
          </div>
        </div>

        {/* CENTER: Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#4b3829]">COMPANY</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/home" className="hover:text-[#a47551] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#a47551] transition">
                About Us
              </Link>
            </li>
           
            <li>
              <Link to="/privacy" className="hover:text-[#a47551] transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: Contact */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#4b3829]">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm">
            <li>
              📞{" "}
              <a href="tel:+918136905120" className="hover:text-[#a47551] transition">
                +91 8136905120
              </a>
            </li>
            <li>
              📧{" "}
              <a href="mailto:malabarRuchi@gmail.com" className="hover:text-[#a47551] transition">
                malabarRuchi@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-[#d4c0a8]" />

      {/* Copyright */}
      <p className="text-center text-xs py-4 text-[#7a5c3d]">
        Copyright 2025 &copy;{" "}
        <span className="font-semibold">malabarRuchi.com</span> - All Rights
        Reserved
      </p>
    </div>
  );
}

export default Footer;

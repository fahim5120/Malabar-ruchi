import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div id='footer' className="bg-[#f9f5f0] text-[#5a4634] pt-10 px-6 md:px-16 lg:px-24">
      
      {/* footer-content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        
        {/* footer-content-left */}
        <div>
          <img src={assets.logo} alt="logo" className="w-28 mb-4" />
          <p className="text-sm leading-6 text-justify">
            <span className="font-semibold">Malabar Ruchi</span> <br />
            At Malabar Ruchi, we bring you the authentic taste of Kerala’s Malabar region.
            From spicy seafood delicacies to soft pathiris and traditional desserts, we
            promise to serve you food that feels like home – fresh, flavorful, and unforgettable.
          </p>

          {/* footer-social-icons */}
          <div className="flex items-center gap-4 mt-4">
            <img src={assets.youtubeIcon} alt="youtube" className="w-6 cursor-pointer hover:opacity-75" />
            <img src={assets.facebookIcon} alt="facebook" className="w-6 cursor-pointer hover:opacity-75" />
            <img src={assets.instagramIcon} alt="instagram" className="w-6 cursor-pointer hover:opacity-75" />
          </div>
        </div>

        {/* footer-content-center */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#4b3829]">COMPANY</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#a47551] cursor-pointer">Home</li>
            <li className="hover:text-[#a47551] cursor-pointer">About Us</li>
            <li className="hover:text-[#a47551] cursor-pointer">Delivery</li>
            <li className="hover:text-[#a47551] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* footer-content-right */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#4b3829]">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 8136905120</li>
            <li>📧 malabarRuchi@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-[#d4c0a8]" />

      {/* copyright */}
      <p className="text-center text-xs py-4 text-[#7a5c3d]">
        Copyright 2025 &copy; <span className="font-semibold">malabarRuchi.com</span> - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer

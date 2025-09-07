import React from 'react'
import { assets } from '../assets/assets'

function AppDownload() {
  return (
    <div className="bg-[#f9f5f0] text-[#5a4634] py-12 px-6 text-center rounded-2xl shadow-md">
      
      {/* Heading */}
      <p className="text-xl md:text-2xl font-semibold mb-6">
        For a Better Experience <br />
        <span className="text-[#a47551]">Download Malabar Ruchi</span>
      </p>

      {/* App Store & Play Store */}
      <div className="flex justify-center items-center gap-6">
        <img 
          src={assets.playStore} 
          alt="playStore" 
          className="w-32 cursor-pointer hover:scale-105 transition-transform duration-300" 
        />
        <img 
          src={assets.appStore} 
          alt="appStore" 
          className="w-32 cursor-pointer hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </div>
  )
}

export default AppDownload

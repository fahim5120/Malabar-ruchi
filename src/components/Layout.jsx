import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import LoginPopup from './LoginPopup'



function Layout() {
  const [showLogin,setShowLogin]=useState(false)
  
  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}

        <Navbar setShowLogin={setShowLogin}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
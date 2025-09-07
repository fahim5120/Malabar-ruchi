import React, { useState } from 'react'
import { assets } from '../assets/assets'

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login")

  return (
    // login-popup-overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* login-popup-container */}
      <form className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative border border-amber-200">
        
        {/* header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-amber-800">{currentState}</h2>
          <img
            src={assets.crossIcon}
            alt="closebtn"
            onClick={() => setShowLogin(false)}
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>

        {/* input fields */}
        <div className="flex flex-col gap-4">
          {currentState === "Login" ? null : (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-amber-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-amber-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border border-amber-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" required className="accent-amber-600" />
          {currentState === "Login" ? (
            <p className="text-sm text-gray-600">Remember me</p>
          ) : (
            <p className="text-sm text-gray-600">
              I agree to the <span className="text-amber-700 font-semibold">Terms & Conditions</span> and{" "}
              <span className="text-amber-700 font-semibold">Privacy Policy</span>.
            </p>
          )}
        </div>

        {/* button */}
        <button
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg mt-6 transition-colors"
        >
          {currentState === "Sign Up" ? "Create an account" : "Login"}
        </button>

        {/* toggle login/signup */}
        <div className="text-center mt-4 text-sm text-gray-700">
          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-amber-700 font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-amber-700 font-semibold cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup

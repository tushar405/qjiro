import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"

export default function Navbar() {
  return (

    <div className="flex justify-between items-center py-2 px-3 sm:px-5 md:px-8 lg:px-14 mb-5">

      <div className="shrink-0">
        <img
          className="w-[120px] sm:w-[140px] md:w-[220px] lg:w-[192px] drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* Language */}
        <div className="bg-[#111112] text-white px-2 sm:px-3 md:px-5 py-1 rounded-md border border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80">

          <select
            className='bg-transparent outline-none text-xs sm:text-sm md:text-base'
          >
            <option value="English">English</option>
            <option value="हिन्दी">हिन्दी</option>
          </select>

        </div>

        {/* Sign In */}
        <Link to={'/Login'}>
          <button
            className='bg-[#e50815] hover:bg-[#d80c1a] text-white px-3 sm:px-4 md:px-5 py-1 rounded-lg font-bold text-xs sm:text-sm md:text-base whitespace-nowrap'>
            Sign In
          </button>
        </Link>

      </div>

    </div>
  )
}
import React from 'react'
import Navbar from './Navbar'
import bg from "./background.jpg"

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-[1px]"
          style={{
            backgroundImage: `url(${bg})`
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          
          <Navbar />

          <div className='container mx-auto flex justify-center items-center flex-grow px-4 pb-0'>
            <div>
              
              <h1 className='text-white text-center mb-5 lg:text-5xl md:text-5xl font-bold text-3xl'>
                Biggest Indian hits. The best Indian stories. All streaming here.
              </h1>

              <p className='text-white text-center lg:text-2xl md:text-2xl text-xl mb-5'>
                Watch anywhere. Cancel anytime.
              </p>

              <p className='text-white mb-5 text-center lg:text-xl md:text-xl text-lg'>
                Ready to watch? Enter your email to <br className='lg:hidden md:hidden sm:hidden'/>
                create or restart your membership.
              </p>

         
              <div className='flex flex-wrap justify-center items-center gap-3 mt-6 mb-16'>
                
                <input
                  type="text"
                  className='bg-[#1d1e1e] text-white py-3 px-4 text-lg lg:w-96 md:w-96 w-80 rounded-md opacity-80 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600'
                  placeholder='Email address'
                />

                <button className='bg-[#e50815] flex gap-2 items-center py-3 px-6 rounded-lg hover:bg-red-700 transition'>
                  <p className='text-white font-bold text-xl'>Get Started</p>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>

      <div className='height-line'></div>
    </>
  )
}

export default Hero
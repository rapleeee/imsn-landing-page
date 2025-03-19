import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

export default function Recruitment() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-35 flex flex-col items-center px-6 md:px-10">
        <div className="max-w-5xl w-full text-left sm:text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-neutral-200"><span className='text-[#C40000]'>WE LOOK FORWARD </span> TO COLLABORATING WITH TALENTED INDIVIDUALS.</h1>
          <p className="text-neutral-400 text-lg sm:text-2xl mt-6">
            Let's level up together and join us during our next recruitment.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

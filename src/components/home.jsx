import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
// import {Link} from 'react-scroll';

const home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1b2223]'>

    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0ef6cc]'>Hi, My Name is</p>
        <h1  className='text-4xl sm: text-7xl font-bold text-[#f4fefd]'>Mohamad Ikhwan</h1>
        <h2 className='text-4xl sm: text-7xl font-bold text-[#557b7c]'>I am an IT Graduate.</h2>
        <p className='text-[#557b7c] py-4 max-[700px]'>I'am a IT Graduate with knowledge in building
        web and mobile development. Currently invested on improving
        and gathering my experinces and skills.
        </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0ef6cc] hover:border-[#0ef6cc]'>View Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className="ml-3"/>
            </span>
            </button>

        </div>
    </div>

    </div>
  )
}

export default home
import React from 'react'

const LandingPage = () => {
  return (
    <div className=''>  
        {/*Welcome to text */}
        <div className='text-white font-light py-2'>WELCOME TO</div>

        {/*Name gradient text */}
        <p className="bg-gradient-to-r from-[#5D59FF] via-[#F19696] to-[#EC54DD] bg-clip-text text-transparent text-7xl font-semibold">
            William Little
        </p>


        {/*Brief bio text */}
        <div className='text-white font-light py-2'>ENGINEERING STUDENT, DEVELOPER, & DESIGNER</div>
    </div>
   
  )
}

export default LandingPage
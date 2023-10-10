import React from 'react';
import LinkedIn from './../assets/linkedin.png'
import Instagram from './../assets/instagram.png';
import GitHub from './../assets/github.png';

const NavBar = () => {
  return (

    <div className='fixed w-full flex items-center p-4'>
        {/*Name fixed on top left*/}
        <div className='fixed top-0 left-0 text-white p-4 pl-16 font-medium'>
            William Little
        </div>

        {/*About, Portfolio, and Contact Menu fixed on top right*/}
        <div className='fixed top-0 right-0 py-4 pr-16'>
            <ul className='flex text-white font-light'>
                <li className='px-16'>About</li>
                <li className='px-16'>Portfolio</li>
                <li className='pl-16'>Contact</li>
            </ul>
        </div>

        {/*Socials bar*/}
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center p-4 pl-16">

            {/*Social Icons*/}
            <div className="flex flex-col items-center">
                <a href="https://www.linkedin.com/in/williamtheadore/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn Logo" className="mb-4 w-4 h-4 transition duration-300 ease-in-out hover:scale-125" />
                </a>
                <img src={GitHub} alt="GitHub Logo" className="mb-4 w-4 h-4 transition duration-300 ease-in-out hover:scale-125" />
                <a href="https://www.instagram.com/willskates" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram Logo" className="mb-4 w-4 h-4 transition duration-300 ease-in-out hover:scale-125" />
                </a>
            </div>
            
            <div className="text-xs -rotate-90 font-light text-white mt-24">SOCIALS</div>
        </div>
    </div>
  )
}



export default NavBar

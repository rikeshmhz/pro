import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]=useState(false)
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-t from-gray-800 to-gray-900 fixed'>
        <div>
            <h1 className='text-4xl ml-2'>Rikesh</h1>
        </div>
        
        <ul className='hidden md:flex'>
            <Link to='home'  smooth offset={-100} duration={500}><li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105'>Home</li></Link>
            <Link to='about' smooth offset={-100} duration={500}><li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105'>About</li></Link> 
            <Link to='portfolio' smooth offset={-100} duration={500}><li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105'>Portfolio</li></Link>
            <Link to='skills' smooth offset={-90} duration={500}><li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105'>Skills</li></Link>
            <Link to='contact' smooth offset={-60} duration={500}><li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105'>Contact</li></Link>
        </ul>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-800 to-gray-900 text-gray-500'>
             <Link to='home'  smooth offset={-100} duration={500} onClick={()=> setNav(!nav)}><li className='py-3 cursor-pointer font-medium text-3xl text-gray-500 hover:scale-105'>Home</li></Link>
             <Link to='about' smooth offset={-100} duration={500} onClick={()=> setNav(!nav)}><li className='py-3 cursor-pointer font-medium text-3xl text-gray-500 hover:scale-105'>About</li></Link>
             <Link to='portfolio' smooth offset={-100} duration={500} onClick={()=> setNav(!nav)}><li className='py-3 cursor-pointer font-medium text-3xl text-gray-500 hover:scale-105'>Portfolio</li></Link>
             <Link to='skills' smooth offset={-90} duration={500} onClick={()=> setNav(!nav)}><li className='py-3 cursor-pointer font-medium text-3xl text-gray-500 hover:scale-105'>Skills</li></Link>
             <Link to='contact' smooth offset={-60} duration={500} onClick={()=> setNav(!nav)}><li className='py-3 cursor-pointer font-medium text-3xl text-gray-500 hover:scale-105'>Contact</li></Link>
            </ul>
        )}
        
    </div>
  )
}

export default Navbar
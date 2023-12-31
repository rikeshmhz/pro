import React from 'react'
import { AiOutlineArrowRight, AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { FaPhoneSquareAlt } from "react-icons/fa";
import rikesh from "../image/rikesh.jpg"
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import cv from '../Documents/RikeshMaharjan_CV.pdf';

const Home1 = () => {
    let currentUrl = window.location.origin
    
    return (
        <div className='h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white' id='home'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-between pt-20 px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                        I am Web Developer
                    </h2>
                    <p className='text-gray-500 py-2 max-w-md text-justify'>
                        Hello there! I'm Rikesh Manarjan, a passionate and dedicated individual with a flair for web development and a deep enthusiasm for technology.
                    </p>
                    <div className='text-3xl flex flex-row my-2'>
                        <Link to='https://www.linkedin.com/in/rikesh-maharjan-1184a3271' target="_blank"><AiFillLinkedin /></Link>
                        <Link to='https://github.com/rikeshmhz' target="_blank" className='mx-5'><AiFillGithub /></Link>
                        <Link to='mailto:rikesh.0014@gmail.com'><AiOutlineMail /></Link>
                        <Link to="tel:9808009911" className='mx-5'><FaPhoneSquareAlt /></Link> 
                    </div>
                    <div className='flex flex-row my2'>
                        <Scroll.Link to='portfolio' smooth offset={-100} duration={500}>
                            <button className='group w-fit px-6 py-1.5 mt-2 flex items-center rounded-md bg-gradient-to-r from-sky-400 to-blue-500'>
                                Portfolio
                                <span className='group-hover:rotate-90 ml-2 duration-200'>
                                    <AiOutlineArrowRight />
                                </span>
                            </button>
                        </Scroll.Link>
                        <Link to = {`${currentUrl}${cv}`} target = "_blank" rel="noopener noreferrer">
                            <button className='group w-fit ms-4 px-6 py-1.5 mt-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-700'>
                                View CV
                            </button>
                        </Link>       
                    </div>
                </div>
                <div className='mt-3 md:mt-16'>
                    <img src={rikesh} alt="" className='rounded-2xl mx-auto w-full md:w-full h-96' />
                </div>
            </div>
        </div>
    )
}

export default Home1
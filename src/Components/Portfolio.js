import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white' id='portfolio'>
        <div className='max-w-screen-lg mx-auto p-4'>
            <div className='mb-16'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <img src="https://github.com/rikeshmhz/Store-Management-System/blob/master/screenshot/main.jpg?raw=true" alt="" className='rounded-md h-40 w-full'/>
                    <div className='flex flex-col items-center justify-center p-3'>
                        <p>STORE MANAGEMENT SYSTEM</p>
                        <Link to='https://github.com/rikeshmhz/Store-Management-System' target="_blank" className='duration-200 hover:text-yellow-500'>View Code</Link>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <img src="https://github.com/rikeshmhz/crud_operation/blob/master/public/screenshot/register.JPG?raw=true" alt="" className='rounded-md h-40 w-full' />
                    <div className='flex flex-col items-center justify-center p-3'>
                        <p>CRUD-OPERATION</p>
                        <Link to='https://github.com/rikeshmhz/crud_operation' target="_blank" className='duration-200 hover:text-yellow-500'>View Code</Link>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <img src="https://github.com/rikeshmhz/Gallery-App/blob/master/public/Screenshot/main%20gallery.JPG?raw=true" alt="" className='rounded-md h-40 w-full'/>
                    <div className='flex flex-col items-center justify-center p-3'>
                        <p>GALLERY-APP</p>
                        <Link to='https://github.com/rikeshmhz/Gallery-App' target="_blank" className='duration-200 hover:text-yellow-500'>View Code</Link>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <img src="https://github.com/rikeshmhz/Todo-App/blob/master/public/todo.JPG?raw=true" alt="" className='rounded-md h-40 w-full'/>
                    <div className='flex flex-col items-center justify-center p-3'>
                        <p>TODO-APP</p>
                        <Link to='https://github.com/rikeshmhz/Todo-App' target="_blank" className='duration-200 hover:text-yellow-500'>View Code</Link>
                    </div>
                </div>

                <div className='shadow-md shadow-gray-500 rounded-lg'>
                    <img src="https://github.com/rikeshmhz/Weather-App/blob/master/public/weather.JPG?raw=true" alt="" className='rounded-md h-40 w-full'/>
                    <div className='flex flex-col items-center justify-center p-3'>
                        <p>WEATHER-APP</p>
                        <Link to='https://github.com/rikeshmhz/Weather-App' target="_blank" className='duration-200 hover:text-yellow-500'>View Code</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
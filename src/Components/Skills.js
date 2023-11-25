import React from 'react'
import html from "../image/html.png"
import css from "../image/css.png"
import javascript from "../image/JS.png"
import php from "../image/php.png"
import mysql from "../image/mysql.png"
import bootstrap from "../image/bootstrap.png"
import taliwind from "../image/tailwind.png"
import mongodb from "../image/mongodb.png"
import express from "../image/express.png"
import react from "../image/react.png"
import node from "../image/node.png"
import vue from "../image/vue.png"

const Skills = () => {
  return (
    <div className='w-full bg-gradient-to-t from-gray-800 to-gray-900 text-white' id='skills'>
      <div className='max-w-screen-lg m-auto p-4 pt-16'>
        <div className='mb-16'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0'>

          <div className='shadow-md shadow-orange-500 rounded-lg'>
            <img src={html} alt="" className='rounded-md w-20 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>HTML</p>
            </div>
          </div>

          <div className='shadow-md shadow-blue-500 rounded-lg'>
            <img src={css} alt="" className='rounded-md w-20 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>CSS</p>
            </div>
          </div>

          <div className='shadow-md shadow-yellow-500 rounded-lg'>
            <img src={javascript} alt="" className='rounded-md w-32 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>JavaScript</p>
            </div>
          </div>

          <div className='shadow-md shadow-purple-500 rounded-lg'>
            <img src={php} alt="" className='rounded-md w-36 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>PHP</p>
            </div>
          </div>

          <div className='shadow-md shadow-orange-300 rounded-lg'>
            <img src={mysql} alt="" className='rounded-md w-28 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>MySQL</p>
            </div>
          </div>

          <div className='shadow-md shadow-purple-800 rounded-lg'>
            <img src={bootstrap} alt="" className='rounded-md w-28 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>Bootstrap</p>
            </div>
          </div>

          <div className='shadow-md shadow-blue-300 rounded-lg'>
            <img src={taliwind} alt="" className='rounded-md w-16 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>Tailwind CSS</p>
            </div>
          </div>

          <div className='shadow-md shadow-green-400 rounded-lg'>
            <img src={vue} alt="" className='rounded-md w-20 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>Vue JS</p>
            </div>
          </div>

          <div className='shadow-md shadow-blue-400 rounded-lg'>
            <img src={react} alt="" className='rounded-md w-20 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>React JS</p>
            </div>
          </div>

          <div className='shadow-md shadow-green-500 rounded-lg'>
            <img src={node} alt="" className='rounded-md w-16 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>Node JS</p>
            </div>
          </div>

          <div className='shadow-md shadow-gray-100 rounded-lg'>
            <img src={express} alt="" className='rounded-md w-20 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>Express</p>
            </div>
          </div>

          <div className='shadow-md shadow-green-300 rounded-lg'>
            <img src={mongodb} alt="" className='rounded-md w-20 mx-auto' />
            <div className='flex flex-col items-center justify-center p-3'>
              <p>MongoDB</p>
            </div>
          </div>

        </div>
      </div>
    </div>
      )
}

      export default Skills
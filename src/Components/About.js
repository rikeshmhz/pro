import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-t from-gray-800 to-gray-900 text-white' id='about'>
            <div className='max-w-screen-lg p-4 mx-auto pt-28'>
                <div className='mb-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-justify'>
                    My educational journey started at <b>Whitefield Higher Secondary School</b>, where I laid the foundation of my curiosity and thirst for knowledge. I joined <b>Prime College</b> for my +2 education, where I began exploring the fascinating world of programming. Fast forward I continued my bachelor's degree at <b>Prime College</b> where I further honed my skills and expanded my horizons. Armed with a degree and an insatiable appetite for coding, I embarked on a journey that led me to become proficient in an array of programming languages.
                </p>
                <br />
                <p className='text-justify'>
                    I've explored HTML, CSS, JavaScript, PHP, MySQL, and frameworks like Bootstrap and Tailwind CSS. I've also ventured into back-end technologies like Node.js, Express.js, MongoDB, and MySQL. I'm not just a developer, I'm a problem solver. I enjoy the thrill of overcoming challenges and finding innovative solutions to complex issues.
                </p>
            </div>
        </div>
    )
}

export default About
import React from 'react'
import Navbar from '../Components/Navbar'
import Home1 from '../Components/Home1'
import About from '../Components/About'
import Portfolio from '../Components/Portfolio'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Home1/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default HomePage
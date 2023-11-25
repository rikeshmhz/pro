import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

const MyRoutes = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </HashRouter>
  )
}

export default MyRoutes
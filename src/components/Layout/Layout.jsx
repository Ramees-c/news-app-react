import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
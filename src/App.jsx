import { useState } from 'react'
import viteLogo from '/vite.svg'

import {  Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import Service from './pages/service.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
function App() {
  

  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}
 
export default App

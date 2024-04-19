import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Pages/Portfolio'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;

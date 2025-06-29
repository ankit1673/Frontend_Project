import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Registration from './pages/Reg';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Registration from './pages/Reg';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import Categories from './pages/Categories';

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
        <Route path="/Categories" element={<Categories />}/>
      </Routes>
    <Footer/>
    </div>
  )
}

export default App
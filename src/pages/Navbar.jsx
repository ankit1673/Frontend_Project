import React from 'react'
import Logo from '../assets/blinkit.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md px-4 py-3 sticky top-0 z-50'>
    <div className='max-w-7xl mx-auto flex items-center justify-between'>
    {/* Logo */}
    <div className='flex items-center gap-2'>
      <img src={Logo} alt="Blinkit logo" className='w-10 rounded-lg object-contain'/>
    </div>
    {/* Navbar */}
    <div className='hidden md:flex items-center gap-6 font-semibold
     text-gray-700'>
      <Link to="/" className='hover:text-green-600'>Home</Link>
      <Link className='hover:text-green-600'>Categories</Link>
      <Link className='hover:text-green-600'>Offers</Link>
      <Link className='hover:text-green-600'>Contact</Link>
    </div>

    {/* Login & Cart */}
    <div className='flex items-center gap-4'>
      <Link className='relative text-gray-700 font-semibold hover:text-green-600'>🛒 Cart (3)</Link>
      <Link to="/login" className='px-4 py-2 bg-green-500 text-white rounded-lg
      font-bold hover:bg-green-700'>Login</Link>
    </div>

    </div>
    </nav>
  )
}

export default Navbar

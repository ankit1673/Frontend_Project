import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/blinkit.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Blinkit Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Navigations */}
        <div className="flex items-center gap-6 font-semibold text-gray-700">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/categories" className="hover:text-green-600">Categories</Link>
          <Link to="/offers" className="hover:text-green-600">Offers</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

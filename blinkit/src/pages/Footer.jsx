import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-4 mt-10 ">
      <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Col-1 */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-700">
            Company Name
          </h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>T&C</li>
          </ul>
        </div>
        {/* Col-2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Help</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Returns</li>
          </ul>
        </div>
        {/* Col-3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-700">
            Categories
          </h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>Fruits</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>
        {/* Col-4 */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-700">
            Follow Us
          </h3>
          <ul className="text-blue-900 space-y-2 text-sm">
            <li>
              <Link>Facebook</Link>
            </li>
            <li>
              <Link>Instagram</Link>
            </li>
            <li>
              <Link>Twitter</Link>
            </li>
            <li>
              <Link>Threads</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-sm text-gray-600 ">
        @ 2025 Blinkit 😍
      </div>
    </footer>
  );
};

export default Footer;

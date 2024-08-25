import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <nav className="bg-gray-900 text-white">
      <div className="container px-5 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to='/' className="hover:text-red-500">
            SupercarHub
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to='/' className="hover:text-red-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to='/cars' className="hover:text-red-500 transition duration-300">
              Inventory
            </Link>
          </li>
          <li>
            <Link to='/showroom' className="hover:text-red-500 transition duration-300">
              Showrooms
            </Link>
          </li>
          <li>
            <a href="/about" className="hover:text-red-500 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/help" className="hover:text-red-500 transition duration-300">
              Help
            </a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="/new-arrivals"
            className="bg-red-500 hover:bg-red-800 text-white px-6 py-2 rounded-full transition duration-300"
          >
           Order cars
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar

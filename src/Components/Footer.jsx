import React from 'react'

const Footer = () => {
  return (
    <>
          <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">SupercarHub</h3>
            <p className="text-gray-400 mb-4">
              Experience the world’s finest luxury and performance vehicles. Your journey to automotive excellence starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/inventory" className="text-gray-400 hover:text-white transition duration-300">
                  Inventory
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <p className="text-gray-400">
              123 Luxury Ave, New York, NY 10001<br />
              Email: <a href="mailto:info@supercarhub.com" className="text-red-500 hover:text-red-600">info@supercarhub.com</a><br />
              Phone: +1 234 567 890
            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on new arrivals and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
              />
              <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-lg text-white transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} SupercarHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to SupercarHub
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            The ultimate destination for luxury and supercars, where passion meets performance.
          </p>
          <Link
            to="/cars"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Discover the Pinnacle of Automotive Excellence
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            At SupercarHub, we curate an exclusive collection of the world's most sought-after supercars and luxury vehicles. 
            Whether you're looking for a brand new hypercar or a meticulously maintained pre-owned exotic, our inventory is crafted to 
            meet the needs of the most discerning automotive enthusiasts.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#152039]">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          </div>
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3 p-4 text-center">
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Unmatched Selection</h3>
                <p className="leading-relaxed">
                  Our inventory includes the latest models from top brands like Ferrari, Lamborghini, and Bugatti, as well as rare, 
                  collector-worthy classics.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center">
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Exceptional Service</h3>
                <p className="leading-relaxed">
                  We offer a personalized buying experience, ensuring that every detail is tailored to your specific needs and preferences.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center">
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Trusted Expertise</h3>
                <p className="leading-relaxed">
                  With years of experience in the luxury automotive market, our team is dedicated to providing knowledgeable guidance 
                  and advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home

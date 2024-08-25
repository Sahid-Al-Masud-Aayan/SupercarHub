import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            About SupercarHub
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">
            Our Passion, Your Drive
          </h2>
          <p className="text-lg leading-relaxed mb-12">
            At SupercarHub, we share your passion for the extraordinary. We are a dedicated team of automotive enthusiasts with a deep love 
            for the finest automobiles on the planet. Our mission is to bring you the most exclusive, high-performance vehicles, offering 
            both new and meticulously curated pre-owned supercars that stand out from the crowd.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-800 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://www.tomhartley.com/img/content/about.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:pl-8">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to provide an unparalleled automotive experience. From sourcing the rarest vehicles to offering a seamless buying 
              process, we are committed to exceeding your expectations. We believe that every car should be as unique as its owner, which is why 
              we go above and beyond to find the perfect match for you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img
                src="https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fstatic%2FCEO-Image.jpg&w=828&q=75"
                alt="Team Member"
                className="rounded-full w-40 h-40 mx-auto mb-4"
              />
              <h4 className="text-2xl font-bold">John Doe</h4>
              <p className="text-lg">Founder & CEO</p>
            </div>
            <div className="p-4">
              <img
                src="https://www.hec.ca/en/profs/guy.pare.jpg"
                alt="Team Member"
                className="rounded-full w-40 h-40 mx-auto mb-4"
              />
              <h4 className="text-2xl font-bold">Jane Smith</h4>
              <p className="text-lg">Head of Sales</p>
            </div>
            <div className="p-4">
              <img
                src="https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg"
                alt="Team Member"
                className="rounded-full w-40 h-40 mx-auto mb-4"
              />
              <h4 className="text-2xl font-bold">Michael Johnson</h4>
              <p className="text-lg">Lead Mechanic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Car?
          </h3>
          <p className="text-lg mb-8">
            Explore our collection of new and used supercars, or contact us to learn more about how we can help you find the perfect vehicle.
          </p>
          <Link
            to="/cars"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition duration-300"
          >
            View Inventory
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}

export default About

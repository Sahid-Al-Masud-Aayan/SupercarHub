import React from 'react'

const Help = () => {
  return (
    <>
          <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/images/help-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            We're Here to Help
          </h1>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4">How do I purchase a vehicle from your website?</h3>
              <p className="text-lg leading-relaxed">
                You can browse our inventory online and contact us directly through the website to start the purchase process. Our team will guide you through every step.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Do you offer financing options?</h3>
              <p className="text-lg leading-relaxed">
                Yes, we offer various financing options to suit your needs. Please contact our sales team for more details.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">What is your return policy?</h3>
              <p className="text-lg leading-relaxed">
                We strive to ensure customer satisfaction. Please refer to our return policy page or contact us directly for more information.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">How do I schedule a test drive?</h3>
              <p className="text-lg leading-relaxed">
                You can schedule a test drive by contacting us through the website or visiting one of our showrooms. We’ll arrange a time that suits you best.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Do you offer international shipping?</h3>
              <p className="text-lg leading-relaxed">
                Yes, we offer international shipping for our vehicles. Please get in touch with our sales team to discuss shipping options and costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-800 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Still Have Questions?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            If you have any other questions or need further assistance, please don't hesitate to reach out to our support team. We’re here to help you with anything you need.
          </p>
          <a
            href="/contact"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              
              <h4 className="text-2xl font-bold mb-2">Email Support</h4>
              <p className="text-lg">support@supercarhub.com</p>
            </div>
            <div className="p-4">
        
              <h4 className="text-2xl font-bold mb-2">Phone Support</h4>
              <p className="text-lg">+1 234 567 890</p>
            </div>
            <div className="p-4">
              
              <h4 className="text-2xl font-bold mb-2">Live Chat</h4>
              <p className="text-lg">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Help

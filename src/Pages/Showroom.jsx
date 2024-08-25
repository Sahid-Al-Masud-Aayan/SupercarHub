import React from 'react'

const Showroom = () => {
    const locations = [
        {
          name: 'New York Showroom',
          address: '123 Luxury Ave, New York, NY 10001',
          image: 'https://i.ytimg.com/vi/wQ10i_j1rKg/sddefault.jpg',
        },
        {
          name: 'Los Angeles Showroom',
          address: '456 Sunset Blvd, Los Angeles, CA 90028',
          image: 'https://0a411afb0c598242cc95-1df470064133d6bc5c471837468f475c.ssl.cf3.rackcdn.com/publish/wp-content/uploads/2020/08/3C2A2568-1140x570.jpg',
        },
        {
          name: 'Miami Showroom',
          address: '789 Ocean Drive, Miami, FL 33139',
          image: 'https://gtspirit.com/wp-content/uploads/2015/06/slider6.jpg',
        },
        {
          name: 'Dubai Showroom',
          address: '101 Luxury St, Dubai, UAE',
          image: 'https://i.ytimg.com/vi/O_5goaab_1Q/maxresdefault.jpg',
        }
      ];
  return (
    <div>
          <div className="bg-gray-700 text-white py-16">
      <div className="container">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Our Showrooms</h1>
          <p className="text-xl mt-4">
            Visit our luxury showrooms located around the world to experience the pinnacle of automotive excellence.
          </p>
        </div>

        {/* Showroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-3xl font-bold mb-2">{location.name}</h2>
                <p className="text-lg">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Showroom

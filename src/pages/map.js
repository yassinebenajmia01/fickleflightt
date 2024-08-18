import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

function Maps() {
  const hotels = [
    {
      name: 'Holiday Inn Express',
      rating: 4.7,
      reviews: 1136,
      price: 286,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy@2x.png',
    },
    {
      name: 'Freehand Los Angeles',
      rating: 4.2,
      reviews: 1941,
      price: 198,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy1@2x.png',
    },
    {
      name: 'The Westin Bonaventure',
      rating: 4.1,
      reviews: 1002,
      price: 289,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy2@2x.png',
    },
    {
      name: 'The Ritz-Carlton',
      rating: 4.7,
      reviews: 136,
      price: 286,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy3@2x.png',
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Left Side: List of Hotels */}
      <div className="w-1/3 p-4 overflow-y-auto bg-white">
        <h2 className="text-xl font-semibold mb-4">200+ RESULTS</h2>
        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-100 rounded-lg shadow">
              <img
                src={hotel.imgUrl}
                alt={hotel.name}
                className="w-24 h-24 rounded-lg object-cover mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-medium">{hotel.name}</h3>
                <div className="flex items-center text-yellow-500 mt-1">
                  {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="ml-2 text-sm text-black">
                    {hotel.rating} <span className='text-blue-500'>({hotel.reviews } reviews</span>)
                  </span>
                </div>
                <p className="text-lg font-semibold mt-2 ">$S {hotel.price}/night</p>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Map */}
      <div className="w-2/3 p-4">
        <div className="h-full bg-gray-300 rounded-lg">
          {/* Replace this with an actual map component */}
          <img
            src="https://via.placeholder.com/600x400"
            alt="Map"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Maps;

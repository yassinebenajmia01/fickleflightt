import React from 'react';
import { Link } from 'react-router-dom';

function Popular() {
  const destinations = [
    {
      image: 'paaris.png',
    },
    {
      image: 'greece.png',
    },
    {
      image: 'norway.png',
    },
    {
      image: 'tsc.png',
    },
  ];

  return (
    <div className="p-6">
      <span className="text-blue-500 text-sm mt-4 inline-block ">PLAN YOUR NEXT TRIP</span>
      <h2 className="text-2xl font-bold text-gray-800">
        Most Popular Destinations
        {/* Use Link for navigation */}
        <Link to="/viewmore">
          <button className="text-blue-500 text-lg mt-4 inline-block ml-[68%] font-bold">
            View all destinations ➔
          </button>
        </Link>
      </h2>

      <div className="space-x-2 mt-4 grid grid-cols-4 gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative w-70 h-52 rounded-lg overflow-hidden" 
            style={{
              backgroundImage: `url(${destination.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;

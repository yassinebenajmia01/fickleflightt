import React from 'react';

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
      <a className="text-blue-500 text-sm mt-4 inline-block font-bold">PLAN YOUR NEXT TRIP</a>
      <h2 className="text-2xl font-bold text-gray-800">
        Most Popular Destinations
        <span className="text-blue-500 text-sm mt-4 inline-block ml-[68%]">
          View all destinations ➔
        </span>
      </h2>

      <div className="space-x-2 mt-4 grid grid-cols-4 gap-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative w-70 h-52 rounded-lg overflow-hidden " 
            style={{
              backgroundImage: `url(${destination.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            
              
              
        
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;

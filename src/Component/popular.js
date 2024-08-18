import React from 'react';
import { useNavigate } from 'react-router-dom';

function Popular() {
  const navigate = useNavigate();

  const destinations = [
    {
      image: 'https://i.im.ge/2024/08/17/fLgiTY.paaris.png',
    },
    {
      image: 'https://i.im.ge/2024/08/17/fLgmsq.greece.png',
    },
    {
      image: 'https://i.im.ge/2024/08/17/fLgEUW.norway.png',
    },
    {
      image: 'https://i.im.ge/2024/08/17/fLg3BT.tsc.png',
    },
  ];

  return (
    <div className="p-6">
      <span className="text-blue-500 text-lg mt-4 inline-block font-bold">PLAN YOUR NEXT TRIP</span>
      <h2 className="text-2xl font-bold text-gray-800">
        Most Popular Destinations
        {/* Button to navigate to ViewMore page */}
        <button
          className="text-blue-500 text-lg mt-4 inline-block ml-[68%] font-bold"
          onClick={() => navigate("/viewmore")}
        >
          View all destinations ➔
        </button>
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

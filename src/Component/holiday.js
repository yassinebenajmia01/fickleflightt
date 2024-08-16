import React from 'react';

function Holiday() {
  const holidays = [
    {
      name: 'Bali',
      duration: '4D3N',
      price: '$899',
      image: 'bali.png', 
    },
    {
      name: 'Swiss',
      duration: '6D5N',
      price: '$900',
      image: 'switzerland.png', 
    },
    {
      name: 'Boracay',
      duration: '5D4N',
      price: '$699',
      image: 'boracay.png', 
    },
    {
      name: 'Palawan',
      duration: '4D3N',
      price: '$789',
      image: 'palawan.png', 
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Recommended Holidays
        <span className="text-blue-500 text-sm mt-4 inline-block ml-[72%]">
          View all holidays ➔
        </span>
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {holidays.map((holiday, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={holiday.image}
              alt={holiday.name}
              className="w-full h-45 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 absolute top-72 mt-4 ">{holiday.name}</h3>
              <p className="text-sm text-gray-500 absolute top-80 mt-3">{holiday.duration}</p>
              <p className="text-2xl font-extrabold text-blue-600  ml-64">{holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Holiday;

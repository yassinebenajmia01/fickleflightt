import React from 'react';

function AllHolidays() {
  const allHolidays = [
    
    {
        name: 'Barcelona',
        duration: '7C8L',
        price: '$1211',
        image: 'https://i.im.ge/2024/08/17/fL8Y0M.brc.jpeg', 
      },
      {
        name: 'Greece',
        duration: '9M5F',
        price: '$1639',
        image: 'https://i.ibb.co/ypW57CX/grc.jpg', 
      },
      {
        name: 'New York',
        duration: '1K3W',
        price: '$539',
        image: 'https://i.im.ge/2024/08/17/fL8bcY.new-york.jpeg', 
      },
      {
        name: 'Marrakech',
        duration: 'X7I5',
        price: '$500',
        image: 'https://i.ibb.co/KNkByx3/mr.jpg', 
      },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Holidays</h2>
      <div className="grid grid-cols-4 gap-4">
        {allHolidays.map((holiday, index) => (
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
              <p className="text-2xl font-extrabold text-blue-600  ml-72">{holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllHolidays;

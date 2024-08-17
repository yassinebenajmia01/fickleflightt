import React from 'react';
import { Link } from 'react-router-dom';


function ViewMore() {
  const moreDestinations = [
    {
      image: 'https://i.im.ge/2024/08/17/fL8D7T.spain.png',
    },
    {
      image: 'https://i.im.ge/2024/08/17/fL8LpL.italyy.png',
    },
    {
      image: 'https://i.im.ge/2024/08/17/fL8h1G.jpn.png',
    },
    {
      image: 'https://i.im.ge/2024/08/17/fL8N76.brazil.png',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">More Destinations</h2>
      <Link to="/popular">
          <button className="text-blue-500 text-lg absolute top-[134%] inline-block ml-[90%] font-bold">
            Go Back ➔
          </button>
        </Link>
      <div className="space-x-2 mt-4 grid grid-cols-4 gap-4">
      
      
        {moreDestinations.map((destination, index) => (
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

export default ViewMore;

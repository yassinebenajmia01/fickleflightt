import React from 'react';

function Prepare() {
  return (
    <div className="relative p-6">
      <h1 className="absolute top-0 left-0 text-gray-300 text-xl font-semibold mb-4 ml-6">PREPARE FOR YOUR TRIP</h1>
      <div className="flex flex-wrap justify-center gap-48 mt-10">
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="hotel.png" alt="Hotel" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="attractions.png" alt="Attractions" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="eats.png" alt="Eats" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="commute.png" alt="Commute" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="taxi.png" alt="Taxi" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="Movies.png" alt="Movies" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
      </div>
    </div>
  );
}

export default Prepare;

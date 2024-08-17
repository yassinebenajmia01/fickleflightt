import React from 'react';

function Prepare() {
  return (
    <div className="relative p-6">
      <h1 className="absolute top-0 left-0 text-gray-300 text-xl font-semibold mb-4 ml-6">PREPARE FOR YOUR TRIP</h1>
      <div className="flex flex-wrap justify-center gap-48 mt-10">
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="https://i.im.ge/2024/08/17/fLgBm8.Hotel.png" alt="Hotel" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="https://i.im.ge/2024/08/17/fL8TbD.Attractions.png" alt="Attractions" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="https://i.im.ge/2024/08/17/fL8oB4.Eats.png" alt="Eats" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="https://i.im.ge/2024/08/17/fLgGZh.Commute.png" alt="Commute" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="https://i.im.ge/2024/08/17/fL8uHp.Taxi.png" alt="Taxi" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="prepare-icon">
            <img src="https://i.im.ge/2024/08/17/fL8sbW.Movies.png" alt="Movies" className="h-[75px] w-[65px]" />
          </div>
          <div className="prepare-text"></div>
        </div>
      </div>
    </div>
  );
}

export default Prepare;

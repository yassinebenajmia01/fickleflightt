import React from 'react';
import { FaPlane } from 'react-icons/fa';

function Recent() {
  return (
    <div className="p-6 mt-24">
      <h2 className="text-xl font-bold mb-4 text-gray-800">RECENT SEARCHES</h2>
      <div className="flex space-x-4">
        {/* First Search */}
        <div className="flex flex-col items-center justify-center p-4 w-56">
          <div className="flex items-center justify-center">
            <span className="text-blue-600 text-lg font-bold size-[44px] mr-10 mb-14">SIN</span>
            <FaPlane size={30} className="mx-2 absolute ml-[35%] mb-14" color="#007bff" />
            <span className="text-blue-600 text-lg font-bold absolute ml-[60%] size-[44px] mb-14">LAX</span>
          </div>
          <p className="text-center text-black font-bold text-lg absolute left-0 ml-80 mt-4">Depart On: <span className="font-semibold">7 Sep 2021</span></p>
        </div>
        {/* Second Search */}
        <div className="flex flex-col items-center justify-center  p-4 w-56">
          <div className="flex items-center justify-center">
            <span className="text-blue-600 text-lg font-bold absolute ml-[70%] size-[44px] mb-14">MY</span>
            <FaPlane size={30} className="mx-2 absolute ml-[100%] mb-14"  color="#007bff"/>
            <span className="text-blue-600 text-lg font-bold absolute ml-[140%] size-[44px] mb-14">DUB</span>
          </div>
          <p className="text-center text-black font-bold text-lg absolute right-1 mr-96 mt-4">Depart On: <span className="font-semibold ">9 Sep 2021</span></p>
        </div>
      </div>
    </div>
  );
}

export default Recent;
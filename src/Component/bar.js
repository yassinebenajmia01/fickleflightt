import React from 'react';

function Bar() {
  return (
    <div className="relative w-full h-[500px]">
      
      <img src="https://i.im.ge/2024/08/17/fLgWma.pic3.png" alt="background" className="w-full h-[120%] object-cover" />

      
      <div className="absolute top-28 w-full text-center text-white">
        <h1 className="text-5xl font-extrabold">Let's explore & travel the world</h1>
        <p className="text-2xl mt-5">Find the best destinations and the most popular stays!</p>
      </div>

      
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md max-w-5xl w-full">
        
        
        <div className="flex justify-between items-center mb-4">
          <h1 className='text-xl font-bold text-gray-700'>SEARCH FLIGHTS</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="return" 
                name="tripType" 
                className="form-radio h-4 w-4 text-blue-600"
              />
              <label htmlFor="return" className="text-gray-700">Return</label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id="one-way" 
                name="tripType" 
                className="form-radio h-4 w-4 text-blue-600" 
                defaultChecked
              />
              <label htmlFor="one-way" className="text-gray-700">One-way</label>
            </div>
          </div>
        </div>

        
        <div className="flex space-x-4 items-end">
          <div className="flex flex-col flex-grow">
            <label htmlFor="departure" className="text-gray-500 text-sm">Departure</label>
            <select 
              id="departure" 
              className="border border-gray-300 rounded-md p-2 flex-grow"
              readOnly
            >
              <option>Singapore - Changi (SIN)</option>
              <option>New York - JFK (NYC)</option>
              <option>London - Heathrow (LHR)</option>
              <option>Tokyo - Haneda (HND)</option>
              <option>Paris - Charles de Gaulle (CDG)</option>
              <option>Dubai - DXB (DXB)</option>
              <option>Hong Kong - HKG (HKG)</option>
              <option>Shanghai - PVG (PVG)</option>
              <option>Sydney - SYD (SYD)</option>
              <option>Los Angeles - LAX (LAX)</option>
            </select>
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="arrival" className="text-gray-500 text-sm">Arrival</label>
            <select 
              id="departure" 
              className="border border-gray-300 rounded-md p-2 flex-grow"
              readOnly
            >
              <option>LOS ANGELES (LA)</option>
              <option>New York - JFK (NYC)</option>
              <option>London - Heathrow (LHR)</option>
              <option>Tokyo - Haneda (HND)</option>
              <option>Paris - Charles de Gaulle (CDG)</option>
              <option>Dubai - DXB (DXB)</option>
              <option>Hong Kong - HKG (HKG)</option>
              <option>Shanghai - PVG (PVG)</option>
              <option>Sydney - SYD (SYD)</option>
              <option>Los Angeles - LAX (LAX)</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-500 text-sm">Date</label>
            <input 
              type="date" 
              id="date" 
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          
          <button className="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600">
            SEARCH FLIGHTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bar;

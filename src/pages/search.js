import React from 'react';

function Search() {
  return (
    <div className="relative w-full h-[500px]">
      
      <img src="https://i.im.ge/2024/08/17/fLgWma.pic3.png" alt="background" className="w-full h-[120%] object-cover" />

      
      <div className="absolute top-60 w-full text-center text-white">
        <h1 className="text-6xl font-extrabold mr-[22%]">Where are you off too</h1>
      </div>

      
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-md shadow-md max-w-5xl w-full">
        
        
        

        
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

export default Search;

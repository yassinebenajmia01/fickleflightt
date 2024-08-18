import React from 'react'

function Hotels() {
  return (
    <div className="relative w-full h-[500px]">
      
    <img src="https://i.im.ge/2024/08/17/fLgWma.pic3.png" alt="background" className="w-full h-[100%] object-cover" />

    
    <div className="absolute top-44 w-full text-center text-white ">
      <h1 className="text-6xl font-extrabold mr-[55%] ">Stays in Los Angeles</h1>
      <button className="bg-transparent text-white border border-white hover:bg-white hover:text-blue-500 py-2 px-4 rounded-full w-36 absolute top-[140%] right-[86%]">Recommended</button>
      <button className="bg-transparent text-white border border-white hover:bg-white hover:text-blue-500 py-2 px-4 rounded-full w-28 absolute top-[140%] right-[79%] ">Price</button>
      <button className="bg-transparent text-white border border-white hover:bg-white hover:text-blue-500 py-2 px-4 rounded-full w-28 absolute top-[140%] right-[72%]">Rating</button>

    </div>
    </div>

    
      
  )
}

export default Hotels;
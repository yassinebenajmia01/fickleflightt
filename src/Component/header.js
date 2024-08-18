import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
      <img 
          src="https://i.ibb.co/hBFZWCr/pic2.png" 
          alt="User Avatarr" 
          className="w- h-8 ml-10"
        />
      </div>
      <nav className="flex items-center space-x-6 ml-auto mr-16">
        <button className="text-gray-700 hover:text-blue-600" onClick={() => { navigate("/explore") }}>Explore</button>
        <button className="text-gray-700 hover:text-blue-600" onClick={() => { navigate("/search") }}>Search</button>
        <Link to="/hotels" className="text-gray-700 hover:text-blue-600">Hotels</Link>
        <Link to="/offers" className="text-gray-700 hover:text-blue-600">Offers</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500  "></span>
          <svg className="w-6 h-6 text-gray-700 hover:text-blue-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
        <img 
          src="https://i.ibb.co/jrYkrL7/pic1.png" 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;

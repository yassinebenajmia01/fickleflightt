import React from 'react';

function Footerr() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0 ">
        <img 
            src="https://i.ibb.co/hBFZWCr/pic2.png" 
            alt="FickleFlight Logo" 
            className="w-auto h-8 ml-10 brightness-0 invert opacity-100"

          />
          <p className="mt-2 ml-7">
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight 
            <span> and hotel bookings. We also have all your flight needs in you online shop.</span>
          </p>
          <div className="flex mt-4 space-x-4 ml-10">
            <a href="https://www.facebook.com/profile.php?id=100083937234291" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 bg-white text-blue-600 rounded-full w-6 h-6" >
              <i className="fab fa-facebook-f ml-2"></i> 
            </a>
            <a href="https://www.instagram.com/ficklefly/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 bg-white text-blue-600 rounded-full w-6 h-6">
              <i className="fab fa-instagram ml-1"></i> 
            </a>
            <a href="https://x.com/FlyFickle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 bg-white text-blue-600 rounded-full w-6 h-6">
              <i className="fab fa-twitter ml-1"></i> 
            </a>
          </div>
        </div>

        
        <div className="hidden md:block border-l border-white mx-8"></div>

        <div className="flex justify-between w-full md:w-auto space-x-28 mr-80">
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">How we work</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Support Center</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">More</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Covid Advisory</a></li>
              <li><a href="#" className="hover:underline">Airline Fees</a></li>
              <li><a href="#" className="hover:underline">Tips</a></li>
              <li><a href="#" className="hover:underline">Quarantine Rules</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerr;
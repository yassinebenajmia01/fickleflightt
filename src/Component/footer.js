import React from 'react';

function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('bg.png')" }}
    >
      <div className="max-w-screen-md mx-auto text-center p-36">
        <h2 className="text-blue-600 font-bold text-lg">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="text-gray-700 text-2xl font-bold mb-6">Get weekly updates</p>

        <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
          <p className="text-gray-700 mb-4">Fill in your details to join the party!</p>
          <form className="text-left">
            <input
              type="text"
              placeholder="Your name"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-52 bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 ml-0"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

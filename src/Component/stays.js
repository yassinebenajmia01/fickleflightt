import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Stays() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const stays = [
    {
      type: 'Entire bungalow',
      name: 'Matterhorn Suites',
      price: '$575/night',
      rating: '4.9',
      reviews: '60 reviews',
      image: 'https://fickleflight-locofy-hasura.netlify.app/unsplashrlwe8f8anoc@2x.png',
      videoLink: 'https://www.youtube.com/watch?v=vj9ett3Igwk', 
    },
    {
      type: '2-Story beachfront',
      name: 'Discovery Shores',
      price: '$360/night',
      rating: '4.8',
      reviews: '116 reviews',
      image: 'https://fickleflight-locofy-hasura.netlify.app/unsplashtsn8bpopveo@2x.png',
      videoLink: 'https://www.youtube.com/embed/T9ShLWKOxFk',
    },
    {
      type: 'Single deluxe hut',
      name: 'Arctic Hut',
      price: '$420/night',
      rating: '4.7',
      reviews: '78 reviews',
      image: 'https://fickleflight-locofy-hasura.netlify.app/unsplashrlwe8f8anoc1@2x.png',
      videoLink: 'https://www.youtube.com/embed/chpwLUiGQbQ',
    },
    {
      type: 'Deluxe King Room',
      name: 'Lake Louise Inn',
      price: '$244/night',
      rating: '4.6',
      reviews: '63 reviews',
      image: 'https://fickleflight-locofy-hasura.netlify.app/unsplashyqrybvxug5q@2x.png',
      videoLink: 'https://www.youtube.com/embed/WteZwxsvICc',
    },
  ];

  const handleVideoClick = (videoLink) => {
    const embeddableLink = videoLink.replace('watch?v=', 'embed/');
    setSelectedVideo(embeddableLink);
  };
  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Popular Stays
        <Link to="/allstays">
          <button className="text-blue-500 text-lg mt-4 inline-block ml-[80%] font-bold">
            View all stays ➔
          </button>
        </Link>
        
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {stays.map((stay, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md bg-white p-4"
          >
            <img
              src={stay.image}
              alt={stay.name}
              className="w-full h-50 object-cover rounded-md"
            />
            <div className="mt-4 flex items-center">
              <p className="text-sm text-gray-500">{stay.type}</p>
              <button
                className="bg-transparent py-2 px-2 border border-sky-700 rounded-full ml-52"
                onClick={() => handleVideoClick(stay.videoLink)}
              >
                ▶
              </button>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-2">{stay.name}</h3>
            <p className="text-lg font-semibold text-gray-800 mt-2">{stay.price}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-sm">★ {stay.rating}</span>
              <a href="#" className="text-blue-500 text-sm ml-2">
                ({stay.reviews})
              </a>
            </div>
            <Link to={`/stay/${stay.name}`}>
  <button className="mt-4 bg-white text-blue-700 text-sm font-semibold py-2 px-28 rounded border border-sky-700">
    MORE DETAILS
  </button>
</Link>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800">Video</h3>
          <div className="mt-4">
            <iframe
              width="560"
              height="315"
              src={selectedVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Stays;

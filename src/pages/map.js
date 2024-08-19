import React, { useState } from 'react';
import { FaStar, FaSlidersH } from 'react-icons/fa'; // Import the filter icon
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Maps() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 34.0522,
    lng: -118.2437,
  };

  const hotels = [
    {
      name: 'Holiday Inn Express',
      rating: 4.7,
      reviews: 1136,
      price: 286,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy@2x.png',
      videoLink: 'https://www.youtube.com/watch?v=jWeum8tk4MI',
    },
    {
      name: 'Freehand Los Angeles',
      rating: 4.2,
      reviews: 1941,
      price: 198,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy1@2x.png',
    },
    {
      name: 'The Westin Bonaventure',
      rating: 4.1,
      reviews: 1002,
      price: 289,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy2@2x.png',
    },
    {
      name: 'The Ritz-Carlton',
      rating: 4.7,
      reviews: 136,
      price: 286,
      imgUrl: 'https://fickleflight-locofy-hasura.netlify.app/unsplashs6ch7n3eoqy3@2x.png',
      videoLink: 'https://www.youtube.com/watch?v=Vo5gTqDPgrA',
    },
  ];

  const handleVideoClick = (videoLink) => {
    const embeddableLink = videoLink.replace('watch?v=', 'embed/');
    setSelectedVideo(embeddableLink);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: List of Hotels */}
      <div className="w-1/3 p-4 overflow-y-auto bg-white">
        <h2 className="text-xl font-semibold mb-4">200+ RESULTS</h2>
        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-100 rounded-lg shadow">
              <img
                src={hotel.imgUrl}
                alt={hotel.name}
                className="w-36 h-36 rounded-lg object-cover mr-6"  // Updated size
              />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{hotel.name}</h3>
                  {hotel.videoLink && (
                    <button
                      className="bg-transparent py-2 px-2 border border-sky-700 rounded-full"
                      onClick={() => handleVideoClick(hotel.videoLink)}
                    >
                      ▶
                    </button>
                  )}
                </div>
                <div className="flex items-center text-yellow-500 mt-1">
                  {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="ml-2 text-sm text-black">
                    {hotel.rating} <span className="text-blue-500">({hotel.reviews} reviews</span>)
                  </span>
                </div>
                <p className="text-lg font-semibold mt-2">$S {hotel.price}/night</p>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button>
              </div>
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

      {/* Right Side: Map */}
      <div className="w-2/3 p-4">
        {/* Filter Button */}
        <div className="flex items-center justify-end mb-4">
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <FaSlidersH className="mr-2" />
            Filters
          </button>
        </div>
        <div className="h-full bg-gray-300 rounded-lg">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default function WrappedMaps() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <Maps />
    </LoadScript>
  );
}

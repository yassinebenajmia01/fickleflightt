import React from 'react';

export default function Recent() {
  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold mb-4">Recent Searches</h2>

      <div className="flex space-x-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
          <span className="text-blue-600 font-bold">SIN</span>
          <div className="flex items-center space-x-1">
            <span className="text-gray-500">○</span>
            <span className="text-gray-500">○</span>
            <span className="text-blue-600">✈️</span>
            <span className="text-gray-500">○</span>
            <span className="text-gray-500">○</span>
          </div>
          <span className="text-blue-600 font-bold">LAX</span>
          <div className="ml-6 text-sm text-gray-600">
            <span className="font-semibold">Depart On:</span> 7 Sep 2021
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-4">
          <span className="text-blue-600 font-bold">MY</span>
          <div className="flex items-center space-x-1">
            <span className="text-gray-500">○</span>
            <span className="text-gray-500">○</span>
            <span className="text-blue-600">✈️</span>
            <span className="text-gray-500">○</span>
            <span className="text-gray-500">○</span>
          </div>
          <span className="text-blue-600 font-bold">DUB</span>
          <div className="ml-6 text-sm text-gray-600">
            <span className="font-semibold">Depart On:</span> 9 Sep 2021
          </div>
        </div>
      </div>
    </div>
  );
}

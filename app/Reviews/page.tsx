import React from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons

const Reviews = () => {
  return (
    <div className="max-w-full min-h-screen p-8 text-white bg-black">
      <h2 className="text-3xl font-bold text-center mb-8">Here is what our customers have to say</h2>
      
      <div className="flex justify-center mb-4">
        {/* Displaying 5 star icons */}
        {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-500 text-7xl"  />)}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        {/* Buttons/Links to Google Reviews */}
        <a href="https://link-to-google-reviews-for-fairview" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fairview Studio Reviews</a>
        <a href="https://link-to-google-reviews-for-beaumont" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Beaumont Studio Reviews</a>
      </div>
    </div>
  );
};

export default Reviews;

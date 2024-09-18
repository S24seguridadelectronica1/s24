import React from 'react';

const GymImage = () => {
  return (
    <div className="my-8">
      <img 
        src={process.env.PUBLIC_URL + '/logo192.png'} 
        alt="FBT Functional Body Training Gym Logo" 
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default GymImage;
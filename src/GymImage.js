import React from 'react';
import ReusableButton from './ReusableButton'; // Asegúrate de que la ruta es correcta

const GymImage = ({ onClick }) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <img 
        src={`${process.env.PUBLIC_URL}/logo192.png`} // Ruta adecuada para GitHub Pages
        alt="FBT Functional Body Training Gym Logo" 
        className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
        onClick={onClick} // Maneja el clic en la imagen
      />
      <ReusableButton onClick={onClick} className="mt-4">
        ¡Empieza ahora!
      </ReusableButton>
    </div>
  );
};

export default GymImage;

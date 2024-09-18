import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Transforma tu cuerpo, mejora tu vida</h2>
        <p className="text-xl mb-8">Únete a FBT Functional Body Training y descubre tu verdadero potencial</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ¡Empieza ahora!
        </button>
      </div>
    </div>
  );
};

export default Banner;
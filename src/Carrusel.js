import React from 'react';
import './Carrusel.css'; // Asegúrate de importar tu archivo CSS

const Carrusel = ({ images }) => {
  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {images.map((img, index) => (
          <img
            key={index}
            className="carousel-image"
            src={img}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;

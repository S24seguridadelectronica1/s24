import React, { useState } from 'react';
import './Carrusel.css'; // Asegúrate de importar tu archivo CSS

const Carrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel" style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            className="carousel-image"
            src={img}
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      {/* Controles del carrusel */}
      <button className="carousel-control prev" onClick={prevSlide}>
        &lt; {/* Icono o texto para el botón "Anterior" */}
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &gt; {/* Icono o texto para el botón "Siguiente" */}
      </button>
    </div>
  );
};

export default Carrusel;

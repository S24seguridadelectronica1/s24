import React, { useState, useEffect, useCallback } from 'react';
import './Carrusel.css';

const Carrusel = ({ images, secondaryImages, titles, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const intervalTime = 3000;  // Tiempo entre slides automáticos
  const pauseTime = 5000;     // Tiempo de pausa al hacer clic en un punto

  // Cambiar slide en el carrusel principal (de 3 en 3)
  const changeSlideMain = useCallback(
    (direction) => {
      setCurrentIndex((prevIndex) => (prevIndex + direction + images.length) % images.length);
    },
    [images.length]
  );

  // Auto deslizamiento
  useEffect(() => {
    let autoSlideInterval;
    if (isAutoSliding) {
      autoSlideInterval = setInterval(() => changeSlideMain(1), intervalTime);
    }
    return () => clearInterval(autoSlideInterval);
  }, [changeSlideMain, intervalTime, isAutoSliding]);

  // Función para cambiar el slide al hacer clic en los puntos
  const changeSlideFromDot = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);  // Detener el deslizamiento

    // Programar la reanudación después de 5 segundos
    setTimeout(() => {
      setIsAutoSliding(true);
    }, pauseTime);
  };

  // Abrir el modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setModalImageIndex(0);
    setIsModalOpen(true);
    setIsAutoSliding(false);  // Detener el deslizamiento cuando el modal está abierto
  };

  // Cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAutoSliding(true);   // Reanudar el deslizamiento al cerrar el modal
  };

  // Cambiar imagen en el modal
  const changeSlideModal = useCallback(
    (direction) => {
      setModalImageIndex((prevIndex) => 
        (prevIndex + direction + secondaryImages[currentIndex].length) % secondaryImages[currentIndex].length
      );
    },
    [currentIndex, secondaryImages]
  );

  return (
    <div className="carrusel-container">
      <div
        className="carrusel"
        style={{
          display: 'flex',
          width: `${images.length * 33.33}%`, // Ajuste para mostrar tres imágenes a la vez
          transform: `translateX(-${(currentIndex * 33.33)}%)`, // Mover 33.33% en cada cambio
          transition: 'transform 0.5s ease',
        }}
      >
        {images.map((img, index) => (
          <div 
            key={index} 
            className="carousel-slide"
            style={{ width: '33.33%' }} // Ajuste para mostrar tres imágenes a la vez
          >
            <img
              className="carousel-image"
              src={img}
              alt={`Slide ${index}`}
              onClick={() => openModal(index)}
            />
            <div className="image-caption">
              <h2>{titles[index]}</h2>
              <p>{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Puntos de control */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => changeSlideFromDot(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={secondaryImages[currentIndex][modalImageIndex]}
              alt={`Modal Slide ${modalImageIndex}`}
              className="modal-image"
            />
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <button className="modal-control prev" onClick={() => changeSlideModal(-1)}>
              &lt;
            </button>
            <button className="modal-control next" onClick={() => changeSlideModal(1)}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;

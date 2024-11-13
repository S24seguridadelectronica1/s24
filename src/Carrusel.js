import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carrusel.css';

const Carrusel = ({ images, secondaryImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const autoSlideInterval = useRef(null);
  const intervalTime = 3000;

  const changeSlide = useCallback(
    (direction) => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + direction + images.length) % images.length
      );
    },
    [images.length]
  );

  const startAutoSlide = useCallback(() => {
    if (!autoSlideInterval.current) {
      autoSlideInterval.current = setInterval(() => changeSlide(1), intervalTime);
    }
  }, [changeSlide, intervalTime]);

  const stopAutoSlide = useCallback(() => {
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = null;
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const openModal = (index) => {
    setCurrentIndex(index); // Establece el índice de la imagen principal seleccionada
    setModalImageIndex(0); // Restablece el índice del modal a la primera imagen del grupo correspondiente
    setIsModalOpen(true);
    stopAutoSlide();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    startAutoSlide();
  };

  const changeModalSlide = (direction) => {
    setModalImageIndex(
      (prevIndex) =>
        (prevIndex + direction + secondaryImages[currentIndex].length) %
        secondaryImages[currentIndex].length
    );
  };

  return (
    <div
      className="carrusel-container"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className="carrusel"
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            className="carousel-image"
            src={img}
            alt={`Slide ${index}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <button className="carousel-control prev" onClick={() => changeSlide(-1)}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={() => changeSlide(1)}>
        &gt;
      </button>

      {/* Modal con el segundo carrusel */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={secondaryImages[currentIndex][modalImageIndex]}
              alt={`Modal Slide ${modalImageIndex}`}
              className="modal-image"
            />
            <button className="close-button" onClick={closeModal}>X</button>
            <button className="modal-control prev" onClick={() => changeModalSlide(-1)}>
              &lt;
            </button>
            <button className="modal-control next" onClick={() => changeModalSlide(1)}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;

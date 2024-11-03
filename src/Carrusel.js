import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carrusel.css';

const Carrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const autoSlideInterval = useRef(null);
  const intervalTime = 3000; // Tiempo en milisegundos para cambiar de imagen automáticamente

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      console.log('Next Slide Index:', newIndex); // Para depuración
      return newIndex;
    });
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      console.log('Previous Slide Index:', newIndex); // Para depuración
      return newIndex;
    });
  }, [images.length]);

  const startAutoSlide = useCallback(() => {
    if (!autoSlideInterval.current) {
      autoSlideInterval.current = setInterval(nextSlide, intervalTime);
    }
  }, [nextSlide, intervalTime]);

  const stopAutoSlide = useCallback(() => {
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = null;
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Limpia el intervalo al desmontar el componente
  }, [startAutoSlide, stopAutoSlide]);

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
    stopAutoSlide(); // Detén el desplazamiento automático al abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    startAutoSlide(); // Reinicia el desplazamiento automático al cerrar el modal
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
          transition: 'transform 0.5s ease', // Asegura una transición suave
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            className="carousel-image"
            src={img}
            alt={`Slide ${index}`}
            onClick={() => openModal(img)}
          />
        ))}
      </div>

      {/* Controles del carrusel */}
      <button className="carousel-control prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &gt;
      </button>

      {/* Modal para ver imagen en grande */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Imagen ampliada" className="modal-image" />
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel;

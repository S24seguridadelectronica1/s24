import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Modal from "react-modal"; // Asegúrate de tener react-modal instalado
import './Carrusel.css';

const defaultSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const Carrusel = ({ images, secondaryImages, titles, descriptions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSecondaryImages, setSelectedSecondaryImages] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedDescriptions, setSelectedDescriptions] = useState([]);
  const [sliderSettings, setSliderSettings] = useState(defaultSettings);
  const [isExpanded, setIsExpanded] = useState(false);
  const sliderRef = useRef(null);

  const updateSliderSettings = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    setSliderSettings({
      ...defaultSettings,
      slidesToShow: isLandscape ? 3 : 1,
      slidesToScroll: 1,
    });
  };

  const openModal = (index) => {
    if (secondaryImages[index]) {
      setSelectedSecondaryImages(secondaryImages[index].images || []);
      setSelectedTitles(secondaryImages[index].titles || []);
      setSelectedDescriptions(secondaryImages[index].descriptions || []);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFullScreen = () => {
    setIsExpanded((prevState) => !prevState); // Cambiar el estado de expansión
  };

  useEffect(() => {
    updateSliderSettings();
    const handleResize = () => {
      updateSliderSettings();
    };
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          autoplay: true,
        }));
      } else {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          autoplay: false,
        }));
      }
    }, { threshold: 0.5 });

    const currentSlider = sliderRef.current;
    if (currentSlider) {
      observer.observe(currentSlider);
    }

    return () => {
      if (currentSlider) {
        observer.unobserve(currentSlider);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Carrusel principal */}
      <div
        className="slider-container"
        ref={sliderRef}
        style={{ opacity: sliderSettings.autoplay ? 1 : 0.5 }}
      >
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <img src={image} alt={`Imagen Principal ${index + 1}`} />
              <h3>{titles[index]}</h3>
              <p>{descriptions[index]}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal para mostrar imágenes secundarias */}
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Modal de Imágenes Secundarias"
  style={{
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: 0,
      width: isExpanded ? "100vw" : "95vw",
      height: isExpanded ? "100vh" : "92vh",
      transition: "width 0.3s ease, height 0.3s ease",
      zIndex: 1000,
      overflow: "hidden",
    },
  }}
>
  {/* Botones para cerrar o expandir el modal */}
  <div
    style={{
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 1001,
    }}
  >
  
    <button
      onClick={closeModal}
      style={{
        background: "transparent",
        border: "none",
        color: "black",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: 1002,
      }}
    >
      ❌ Cerrar
    </button>
  </div>

  <Slider {...defaultSettings}>
  {selectedSecondaryImages.length === 0 ? (
    <p>Cargando...</p>
  ) : (
    selectedSecondaryImages.map((secondaryImage, index) => (
      <div key={index} className="modal-slide">
        {/* Imagen a la izquierda, clic para expandir */}
        <div className="modal-image" onClick={() => toggleFullScreen(index)}>
          <img
            src={secondaryImage}
            alt={`Imagen Secundaria ${index + 1}`}
            style={{
              cursor: "pointer",
              width: isExpanded ? "100vw" : "auto", // Si está expandido, ocupará toda la pantalla
              height: isExpanded ? "100vh" : "auto", // Lo mismo para la altura
              transition: "width 0.3s ease, height 0.3s ease", // Para animar el cambio de tamaño
            }}
          />
          
        </div>
        {/* Texto a la derecha */}
        <div className="modal-text">
          <h3>{selectedTitles[index]}</h3>
          <p>{selectedDescriptions[index]}</p>
        </div>
      </div>
    ))
  )}
</Slider>


  {/* Botón de WhatsApp dentro del modal */}
  <a
    href="https://wa.me/573046615865"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#25d366",
      color: "white",
      padding: "1px 2px",
      borderRadius: "10px",
      textDecoration: "none",
      position: "absolute",
      bottom: "20px",
      left: "10%",
      transform: "translateX(-50%)",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      zIndex: 1001,
      width: "150px",
    }}
  >
    <img
    />
    Precio al WhatsApp
  </a>
</Modal>

    </div>
  );
};

export default Carrusel;

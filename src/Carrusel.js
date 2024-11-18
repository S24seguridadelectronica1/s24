import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Modal from "react-modal"; // Asegúrate de tener react-modal instalado

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
    // Verificar que los datos existen antes de abrir el modal
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
    setIsExpanded(!isExpanded);
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
            onClick={toggleFullScreen}
            style={{
              marginRight: "10px",
              background: "transparent",
              border: "none",
              color: "black",
              fontSize: "20px",
              cursor: "pointer",
              zIndex: 1002,
            }}
          >
            {isExpanded ? "Reducir" : "Expandir"} 🎥
          </button>
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

        {/* Desplegar imágenes secundarias */}
      {/* Desplegar imágenes secundarias */}
{/* Desplegar imágenes secundarias */}
<Slider {...defaultSettings}>
  {selectedSecondaryImages.length === 0 ? (
    <p>Cargando...</p> // Mostrar un mensaje mientras se cargan las imágenes
  ) : (
    selectedSecondaryImages.map((secondaryImage, index) => (
      <div
      key={index}
      className="modal-slide"
      style={{
        display: "flex", // Usamos flexbox para distribuir los elementos en una fila horizontal
        flexDirection: "row", // Alineación horizontal de los elementos
        height: "100%", // Asegura que el contenedor ocupe toda la altura disponible
        overflowY: "auto", // Permite desplazamiento si el contenido es largo
      }}
    >
      {/* Texto (Título y Descripción) - A la izquierda */}
      <div
        className="modal-text"
        style={{
          width: "50%", // La mitad del modal (izquierda)
          padding: "10px",
          boxSizing: "border-box", // Incluye el padding en el cálculo del ancho
          textAlign: "left", // Alinea el texto a la izquierda
          marginRight: "10px", // Espacio entre el texto y la imagen
        }}
      >
        <h3>{selectedTitles[index]}</h3>
        <p>{selectedDescriptions[index]}</p>
      </div>
    
      {/* Imagen a la derecha */}
     {/* Imagen a la derecha */}
<div
  className="modal-image"
  style={{
    width: "50%", // La otra mitad del modal (derecha)
    display: "flex", // Usamos flexbox para asegurar que la imagen ocupe todo el espacio disponible
    alignSelf: "flex-end", // Alinea la imagen al final (a la derecha) del contenedor
    marginLeft: "10px", // Espacio entre el texto y la imagen
  }}
>
  <img
    src={secondaryImage}
    alt={`Imagen Secundaria ${index + 1}`}
    style={{
      maxWidth: "100%", // La imagen ocupa el 100% del ancho del contenedor
      height: "auto", // Mantiene la proporción de la imagen
      objectFit: "contain", // Asegura que la imagen no se distorsione
    }}
  />
</div>
    </div>
    

    
    ))
  )}
</Slider>




        {/* Botón para redirigir al WhatsApp */}
        <a
          href="https://wa.me/573046615865"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#25D366",
            color: "white",
            textAlign: "center",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Precio al WhatsApp
        </a>
      </Modal>
    </div>
  );
};

export default Carrusel;

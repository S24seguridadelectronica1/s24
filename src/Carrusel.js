import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Modal from "react-modal"; // Asegúrate de tener react-modal instalado

// Configuración inicial del carrusel
const defaultSettings = {
  dots: true,
  infinite: true,
  autoplay: true,  // Autoplay activado por defecto
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const Carrusel = ({ images, secondaryImages, titles, descriptions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSecondaryImages, setSelectedSecondaryImages] = useState([]);
  const [sliderSettings, setSliderSettings] = useState(defaultSettings);
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar si el modal está expandido
  const sliderRef = useRef(null);

  // Detectar el tamaño de la pantalla y ajustar el número de imágenes mostradas
  const updateSliderSettings = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    setSliderSettings({
      ...defaultSettings,
      slidesToShow: isLandscape ? 3 : 1, // Mostrar 3 imágenes en landscape, 1 en portrait
      slidesToScroll: 1,
    });
  };

  // Función para abrir el modal con las imágenes secundarias correspondientes
  const openModal = (index) => {
    setSelectedSecondaryImages(secondaryImages[index]);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para expandir el modal (inicialmente no hace nada)
  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Cambia el estado de expansión
  };

  // Detectar cuando el carrusel entra en la vista del usuario
  useEffect(() => {
    updateSliderSettings(); // Llamar al principio para ajustar las configuraciones de inicio

    const handleResize = () => {
      updateSliderSettings(); // Actualizar las configuraciones cada vez que cambie el tamaño de la pantalla
    };

    // Listener para cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // Si el carrusel está visible, asegurar que autoplay esté activado
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          autoplay: true,
        }));
      } else {
        // Si el carrusel no está visible, desactivar autoplay (opcional)
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          autoplay: false,
        }));
      }
    }, { threshold: 0.5 }); // Cuando el 50% del carrusel esté visible en la pantalla

    // Guardamos el valor de sliderRef.current en una variable dentro del efecto
    const currentSlider = sliderRef.current;

    // Solo observamos el slider si la referencia es válida
    if (currentSlider) {
      observer.observe(currentSlider);
    }

    // Función de limpieza que usa la referencia guardada
    return () => {
      if (currentSlider) {
        observer.unobserve(currentSlider);
      }
      window.removeEventListener("resize", handleResize); // Limpiar el listener cuando se desmonte el componente
    };
  }, []);  // Este efecto se ejecuta una sola vez al cargar el componente

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
            backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo oscuro con opacidad
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centrar la ventana modal
            backgroundColor: "white",
            padding: 0,
            width: isExpanded ? "100vw" : "95vw", // 70% de ancho por defecto, 100% cuando se expanda
            height: isExpanded ? "100vh" : "92vh", // 70% de altura por defecto, 100% cuando se expanda
            transition: "width 0.3s ease, height 0.3s ease", // Transición suave para expandir
          },
        }}
      >
        <Slider {...defaultSettings}>
          {selectedSecondaryImages.map((secondaryImage, index) => (
            <div key={index} className="modal-slide">
              <div className="modal-text">
                <h3>{titles[index]}</h3>
                <p>{descriptions[index]}</p>
              </div>
              <div className="modal-image">
                <img src={secondaryImage} alt={`Imagen Secundaria ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>

        {/* Botón para expandir el modal */}
        <button onClick={toggleExpand} style={{ marginTop: "20px" }}>
          {isExpanded ? "Reducir" : "Expandir"}
        </button>

        <button onClick={closeModal} style={{ marginTop: "20px" }}>
          Cerrar Modal
        </button>
      </Modal>
    </div>
  );
};

export default Carrusel;

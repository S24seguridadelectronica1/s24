import React, { useState } from 'react';
import { Image, Button, Modal } from 'react-bootstrap'; // Importar Button y Modal de React Bootstrap
import './Maps.css'; // Importa el archivo CSS para los estilos

const Maps = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const whatsappLink = "https://wa.me/573046615865"; // Enlace de WhatsApp

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="map-container">
        <Image
          src={`${process.env.PUBLIC_URL}/showroms.png`} // Reemplaza con la ruta de tu imagen de pin
          alt="Marcador de mapa"
          className="map-image"
          onClick={handleShow} // Abre el modal al hacer clic en la imagen
          style={{ cursor: 'pointer' }} // Cambia el cursor al pasar sobre la imagen
        />
      </div>

      {/* Modal para el video */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Showrooms en Bucaramanga!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video de Showrooms"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-3">¡Conoce todos los equipos en las salas de ventas que nuestros distribuidores tienen preparados para ti!</p>
          <p>
            Pregunta la dirección de nuestros showrooms al WhatsApp o llama directamente para más información:{' '}
            <a href="tel:+573046615865" style={{ color: 'inherit', textDecoration: 'underline' }}>
              3046615865
            </a>.
          </p>
          <Button variant="success" onClick={() => window.open("tel:+573046615865", "_self")}>
            Llamar
          </Button>
          <Button variant="success" onClick={() => window.open(whatsappLink, "_blank")}>
            Dirección al WhatsApp
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Maps;

import React, { useState } from 'react';
import { Image, Button, Modal } from 'react-bootstrap';
import './Maps.css';

const Maps = () => {
  const [showModal, setShowModal] = useState(false);
  const whatsappLink = "https://wa.me/573046615865";

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="map-container">
        <Image
          src={`${process.env.PUBLIC_URL}/showroms.png`}
          alt="Marcador de mapa"
          className="map-image"
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Showrooms en Bucaramanga!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="image-container">
            <Image
              src={`${process.env.PUBLIC_URL}/123.png`} // Cambia esta ruta por la de tu imagen
              alt="Showroom"
              fluid // Hace que la imagen sea responsive
              className="w-100" // Asegura que la imagen ocupe todo el ancho disponible
            />
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
          </Button>{' '}
          <Button variant="success" onClick={() => window.open(whatsappLink, "_blank")}>
            Dirección al WhatsApp
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Maps;
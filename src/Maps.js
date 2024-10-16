import React, { useState } from 'react';
import { Image, Button, Modal } from 'react-bootstrap'; // Importar Button y Modal de React Bootstrap
import './Maps.css'; // Importa el archivo CSS para los estilos

const Maps = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=7.075000,-73.127389"; // Enlace a Google Maps

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="map-container">
        <Image
          src={`${process.env.PUBLIC_URL}/globo.jpg`} // Reemplaza con la ruta de tu imagen de pin
          alt="Marcador de mapa"
          className="map-image"
          onClick={handleShow} // Abre el modal al hacer clic en la imagen
          style={{ cursor: 'pointer' }} // Cambia el cursor al pasar sobre la imagen
        />
      </div>

      {/* Modal para mostrar la ubicación */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ubicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Oficina:</strong><br />
          Transversal 6D #109-58<br />
          Marianela, Girón, Santander, Colombia</p>
          <p><strong>Consultas en la oficina bajo llamada previa</strong></p>
          <p>
            <a href="tel:+573046615865" style={{ color: 'blue', textDecoration: 'none' }}>
              <strong>llámanos!: 📞 3046615865</strong>
            </a>
          </p>
          <iframe
            title="Mapa de Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.540896414341!2d-73.127389!3d7.075000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnMzAuMCJOIDczwrAwnzM4LjYiVw!5e0!3m2!1ses!2sco!4v1696100366541!5m2!1ses!2sco"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={googleMapsLink} target="_blank">
            Ir al Lugar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Maps;

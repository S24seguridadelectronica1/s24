import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';  // Importa los componentes necesarios de React Bootstrap
import './Showrooms.css';  // Importa el archivo de estilos CSS

// Componente Modal
const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={closeModal} className="closeButton">X</button>
        {/* Título principal antes de la imagen */}
        <h2 className="modalTitle">Salas de Exposición de Equipos de Seguridad!</h2>
        <img src="/123.png" alt="Imagen" className="image" />
        {/* Título secundario después de la imagen */}
        <h3>¡Ven ahora y descubre lo mejor en tecnología para su hogar o negocio!</h3>
        <p>
          Visítanos en nuestros showrooms ubicados en Bucaramanga, donde encontrarás
          la mejor exposición de equipos de seguridad en Santander. Ofrecemos una
          amplia gama de productos diseñados para proteger lo que más te importa.
        </p>
        {/* Nuevo título secundario debajo del párrafo */}
        <h3>
          ¡Pregunta la <strong>DIRECCIÓN</strong> al
          <a
            href="https://wa.me/30466150865"
            className="button whatsappButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          o llámanos:
          <a href="tel:30466150865" className="button callButton">
            30466150865
          </a>
        </h3>
      </div>
    </div>
  );  
};

// Componente Showrooms
const Showrooms = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            {/* Imagen flotante que funciona como botón */}
            <img 
              src="/showroms.png"  // Ruta de tu imagen
              alt="Abrir showroom" 
              className="floatingImage"
              onClick={openModal} 
              aria-label="Abrir showroom"  // Para accesibilidad
            />
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Showrooms;

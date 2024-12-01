import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal'; // Importa el componente Modal
import './Showrooms.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Showrooms = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const modalContent = {
    title: "Sala de Ventas en Bucaramanga!",
    imageSrc: "/123.png", // Ruta de la imagen del showroom
    description:
      "Visítanos en nuestros showrooms ubicados en Bucaramanga, encontrarás la mejor exposición de equipos de seguridad en Santander. Ofrecemos una amplia gama en productos de seguridad electrónica.",
    contactInfo: {
      whatsapp: "30466150865",
      phone: "30466150865",
    },
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="auto">
            <img
              src="/showroms.png" // Ruta de la imagen para abrir el showroom
              alt="Abrir showroom"
              className="floatingImage"
              onClick={openModal}
              aria-label="Abrir showroom"
            />
          </Col>
        </Row>
      </Container>

      {showModal && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          title={modalContent.title}
          imageSrc={modalContent.imageSrc}
          description={modalContent.description}
          contactInfo={modalContent.contactInfo}
        />
      )}
    </div>
  );
};

export default Showrooms;

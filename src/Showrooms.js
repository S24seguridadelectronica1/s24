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
    title: "Salas de Exposición de Equipos de Seguridad!",
    imageSrc: "/123.png",
    description:
      "Visítanos en nuestros showrooms ubicados en Bucaramanga, donde encontrarás la mejor exposición de equipos de seguridad en Santander. Ofrecemos una amplia gama de productos diseñados para proteger lo que más te importa.",
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
              src="/showroms.png" // Ruta de tu imagen
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

import React, { useState } from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import './VisionNocturna.css';
import Visitas from './Visitas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal'; // Importar tu modal personalizado

const VisionNocturna = ({ logoSrc, imageSrc, description, title }) => {
  const [showModal, setShowModal] = useState(false);

  // Funciones para mostrar/ocultar el modal de la imagen del showroom
  const showModalImage = () => setShowModal(true);
  const hideModalImage = () => setShowModal(false);

  return (
    <Container fluid className="my-3 vision-container">
      <Card className="shadow-sm mx-0 vision-card">
        <Card.Body className="vision-body">
          {/* Logo centrado en la parte superior */}
          <Col xs={12} className="text-center">
            <img src={logoSrc} alt="Logo" className="img-fluid mb-3 vision-logo" />
          </Col>

          {/* Fila principal para el contenido */}
          <Row className="g-0 align-items-center w-100 vision-row">
            {/* Columna de descripción y botón */}
            <Col xs={12} md={4} className="text-center text-md-left vision-description">
              <Card.Title className="display-4 custom-title">{title}</Card.Title>
              <Card.Text className="fs-5 custom-description">{description}</Card.Text>
              <div className="desktop-showroom-message">
                <Button variant="link" onClick={showModalImage}>
                  ¡Ven a nuestros Showrooms en Bucaramanga!
                </Button>
              </div>
            </Col>

            {/* Columna de la imagen con el contenedor superpuesto */}
            <Col xs={12} md={8} className="text-center vision-image-col">
              <img src={imageSrc} alt={title} className="img-fluid vision-image" />
              <div className="overlay-content">
                <Visitas />
                <div className="mt-2 small-text">
                  Visitas sin costo de lunes a viernes de 8 am a 2 pm. Para visitas fuera del horario gratuito, por favor{' '}
                  <span
                    className="link-text"
                    onClick={() => window.open("https://wa.me/573046615865", "_blank")}
                    style={{ color: 'yellow', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    preguntar precios!
                  </span>.
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal personalizado */}
      <Modal
        showModal={showModal}
        closeModal={hideModalImage}
        title="Sala de Ventas en Bucaramanga"
        imageSrc="/123.png"
        description="¡Conoce todos los equipos en nuestros showrooms. Todas las marcas!"
        contactInfo={{
          whatsapp: '3046615865',
          phone: '+573046615865',
        }}
        showForm={false} // Aquí controlas si mostrar el formulario o no
      />
    </Container>
  );
};

export default VisionNocturna;

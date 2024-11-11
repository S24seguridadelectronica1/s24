import React, { useState } from 'react';
import { Row, Col, Card, Container, Button, Modal } from 'react-bootstrap';
import './VisionNocturna.css';
import FormularioContrate from './FormularioContrate';

const VisionNocturna = ({ logoSrc, imageSrc, description, title }) => {
  const [showForm, setShowForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleForm = () => setShowForm(!showForm);
  const showVideoModal = () => setShowVideo(true);
  const hideVideoModal = () => setShowVideo(false);

  const whatsappMessage = "Estoy interesado en el exposhow en Bucaramanga, por favor necesito más información";
  const whatsappLink = `https://wa.me/3046615865?text=${encodeURIComponent(whatsappMessage)}`;

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
            <Col xs={12} md={5} className="text-center text-md-left vision-description">
              <Card.Title className="display-4 custom-title">{title}</Card.Title>
              <Card.Text className="fs-5 custom-description">{description}</Card.Text>
              <p className="desktop-showroom-message">
                <Button variant="link" onClick={showVideoModal}>
                  ¡Ven a nuestros Showrooms en Bucaramanga!
                </Button>
              </p>
            </Col>

            {/* Columna de la imagen con el contenedor superpuesto */}
            <Col xs={12} md={7} className="text-center vision-image-col">
              <img src={imageSrc} alt={title} className="img-fluid vision-image" />
              <div className="overlay-content">
                <Button variant="primary" className="mt-3 custom-button" onClick={toggleForm}>
                  Visita sin Costo!
                </Button>
                <p className="mt-2 small-text">
                  Visitas sin costo de lunes a viernes de 8 am a 2 pm. Para visitas fuera del horario gratuito, por favor{' '}
                  <span
                    className="link-text"
                    onClick={() => window.open("https://wa.me/573046615865", "_blank")}
                    style={{ color: 'yellow', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    preguntar precios!
                  </span>.
                </p>
              </div>
              <p className="showroom-message">
                <Button variant="link" onClick={showVideoModal}>
                  ¡Ven a nuestros Showrooms en Bucaramanga!
                </Button>
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal para el formulario */}
      <Modal show={showForm} onHide={toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>¡Visita sin costo de lunes a viernes de 8am a 2pm!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioContrate />
        </Modal.Body>
      </Modal>

      {/* Modal para el video */}
      <Modal show={showVideo} onHide={hideVideoModal}>
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
            Pregunta la dirección de nuestros showrooms al whatsapp o llama directamente para mas informacion!:{' '}
            <a href="tel:+573046615865" style={{ color: 'inherit', textDecoration: 'underline' }}>
            </a>.
          </p>
          <Button variant="success" onClick={() => window.open("tel:+573046615865", "_self")}>
            Llamar!
          </Button>
          <Button variant="success" onClick={() => window.open(whatsappLink, "_blank")}>
            direccion al WhatsApp
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default VisionNocturna;

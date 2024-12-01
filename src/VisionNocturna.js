import React, { useState } from 'react';
import { Row, Col, Card, Container, Button, Modal } from 'react-bootstrap';
import './VisionNocturna.css';
import Visitas from './Visitas';
import FormularioContrate from './FormularioContrate';
import 'bootstrap/dist/css/bootstrap.min.css';


const VisionNocturna = ({ logoSrc, imageSrc, description, title }) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Función para alternar la visibilidad del formulario en el modal
  const toggleForm = () => setShowForm(!showForm);

  // Funciones para mostrar/ocultar el modal de la imagen del showroom
  const showModalImage = () => setShowModal(true);
  const hideModalImage = () => setShowModal(false);

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

      {/* Modal para el formulario */}
      <Modal show={showForm} onHide={toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>¡Visita sin costo de lunes a viernes de 8am a 2pm!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioContrate />
        </Modal.Body>
      </Modal>

      {/* Modal para la imagen del showroom */}
      <Modal show={showModal} onHide={hideModalImage}>
        <Modal.Header closeButton>
          <Modal.Title>Sala de Ventas en Bucaramanga!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Ruta correcta a la imagen en la carpeta public */}
          <img src="/123.png" alt="Showroom" className="img-fluid" />
          <p className="mt-3">
            ¡Conoce todos los equipos en nuestros show rooms. Todas las marcas!
          </p>
          <p>
            Pregunte por la dirección de los showrooms al whatsapp o llame directamente para más información:{' '}
            <a href="tel:+573046615865" style={{ color: 'inherit', textDecoration: 'underline' }}>
              +573046615865
            </a>.
          </p>
          <div className="d-flex justify-content-between">
            <Button variant="success" onClick={() => window.open("tel:+573046615865", "_self")}>
              Llamar
            </Button>
            <Button variant="success" onClick={() => window.open(whatsappLink, "_blank")}>
              Dirección al WhatsApp
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default VisionNocturna;

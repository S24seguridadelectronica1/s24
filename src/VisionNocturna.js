import React, { useState } from 'react';
import { Row, Col, Card, Container, Button, Modal } from 'react-bootstrap';
import './VisionNocturna.css';
import FormularioContrate from './FormularioContrate';


const VisionNocturna = ({ logoSrc, imageSrc, description, title }) => {
  const [showForm, setShowForm] = useState(false);
  const [showPlans, setShowPlans] = useState(false);

  const toggleForm = () => setShowForm(!showForm);
  const togglePlans = () => setShowPlans(!showPlans);

  return (
    <Container fluid className="my-3" style={{ width: '99vw' }}>
      <Card className="shadow-sm mx-0 vision-card">
        <Card.Body className="vision-body">
          {/* Logo centrado */}
          <Col xs={12} className="text-center">
            <img 
              src={logoSrc} 
              alt="Logo" 
              className="img-fluid mb-3 vision-logo" 
              style={{ maxWidth: '150px', height: 'auto' }}
            />
          </Col>

          {/* Fila para el contenido principal */}
          <Row className="g-0 align-items-start w-100 vision-row">
            {/* Columna para la descripción */}
            <Col xs={12} md={5} className="text-center text-md-left">
              <div className="vision-description">
                <Card.Title className="display-4 custom-title">{title}</Card.Title>
                <Card.Text className="fs-5 custom-description">{description}</Card.Text>
                <Button 
                  variant="primary" 
                  className="mt-3 custom-button" // Aplicando la clase personalizada
                  onClick={toggleForm}
                >
                  visita gratis!
                </Button>

                {/* Mensaje debajo del botón */}
                <p className="mt-2 small-text">
                  Visitas gratis de lunes a viernes de 8 am a 4 pm, para visitas fuera del horario gratuito por favor{' '}
                  <span className="link-text" onClick={togglePlans} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                    ver los planes de precios!
                  </span>.
                </p>
              </div>
            </Col>
          
            {/* Columna para la imagen */}
            <Col xs={12} md={7} className="text-center text-md-left d-flex justify-content-center align-items-start">
              <div className="w-100">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="img-fluid vision-image" 
                  style={{ height: 'auto' }}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

     {/* Modal para el formulario */}
<Modal show={showForm} onHide={toggleForm}>
  <Modal.Header closeButton>
    <Modal.Title>¡Vamos hasta donde estés!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <FormularioContrate />
  </Modal.Body>
</Modal>


      {/* Modal estilizado para los planes */}
      <Modal show={showPlans} onHide={togglePlans} centered size="lg">
  <Modal.Header closeButton className="bg-primary text-white">
    <Modal.Title>Planes de Visita</Modal.Title>
  </Modal.Header>
  <Modal.Body className="text-center">
    <h5 className="mb-4" style={{ fontWeight: 'bold', color: '#555' }}>
      Valor de la visita fuera del horario gratuito!
    </h5>
    <ul className="list-unstyled">
      <li className="my-3">
        <strong>Diurno:</strong> $30,000
      </li>
      <li className="my-3">
        <strong>Nocturno de lunes a viernes de 6 pm a 8pm:</strong> $60,000
      </li>
      <li className="my-3">
        <strong>Sábados de 8 am a 1 pm:</strong> $60,000
      </li>
      <li className="my-3" style={{ color: '#555' }}>
        <strong>Domingos y festivos de 8 am a 1 pm:</strong> $80,000
      </li>
    </ul>
    <p className="mt-4" style={{ fontWeight: 'bold', color: '#007bff' }}>
      * sigue adelante con tu proyecto, ¡te descontaremos el valor de esta visita del costo total!
    </p>
  </Modal.Body>
  <Modal.Footer className="d-flex justify-content-center">
    <Button variant="secondary" onClick={togglePlans} className="btn-lg">
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>



    </Container>
  );
};

export default VisionNocturna;

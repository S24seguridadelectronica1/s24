import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './VisionNocturna.css'; // Asegúrate de importar el CSS

const VisionNocturna = ({ logoSrc, imageSrc, description, title }) => {
  return (
    <Container fluid className="my-3" style={{ width: '99vw' }}>
      <Card className="shadow-sm mx-0 vision-card">
        <Card.Body className="vision-body">
          {/* Logo posicionado de manera absoluta */}
          <Col xs={12} className="text-center">
            <img 
              src={logoSrc} 
              alt="Logo" 
              className="img-fluid mb-3 vision-logo" 
            />
          </Col>

          {/* Fila para el contenido principal */}
          <Row className="g-0 align-items-start w-100 vision-row">
            {/* Columna para la descripción (Texto a la izquierda) */}
            <Col xs={12} md={5} className="text-center text-md-left">
              <div className="vision-description">
                <Card.Title className="display-4">{title}</Card.Title>
                <Card.Text className="fs-4">{description}</Card.Text>
              </div>
            </Col>
           
            {/* Columna para la imagen (Imagen a la derecha) */}
            <Col xs={12} md={7} className="text-center text-md-left d-flex justify-content-center align-items-start">
              <div className="w-100">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="img-fluid vision-image" 
                  style={{ height: 'auto' }} // Mantiene la proporción
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VisionNocturna;

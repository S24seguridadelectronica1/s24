import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const CameraDescription = ({ imageSrc, description }) => {
  return (
    <Container className="my-3"> {/* Agregar Container para ocupar todo el ancho */}
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={6}>
            <img src={imageSrc} alt="Descripción de la cámara" className="img-fluid rounded-start" />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fw-bold">Descripción de la Cámara de Seguridad</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CameraDescription;

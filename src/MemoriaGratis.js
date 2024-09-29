import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const MemoriaGratis = ({ title, imageSrc, description }) => {
  return (
    <Container fluid className="my-3">
      <Card className="shadow-sm mx-0 wide-card">
        <Card.Body>
          <Row className="g-0 align-items-center">
            {/* Columna del texto a la izquierda */}
            <Col xs={12} md={8} className="text-center text-md-left">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <h2 className="mt-4">Solo con el registro!</h2>
              <p>Obtén una memoria gratis al comprar este producto. ¡No te lo pierdas!</p>
            </Col>
            {/* Columna de la imagen a la derecha */}
            <Col xs={12} md={4} className="text-center text-md-right">
              <img src={imageSrc} alt={title} className="img-fluid" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MemoriaGratis;

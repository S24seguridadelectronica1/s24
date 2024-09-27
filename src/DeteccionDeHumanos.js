import React from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';

const DeteccionDeHumanos = ({ imageSrc, description, title, scrollToRegister }) => {
  return (
    <Container className="my-3">
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          {/* Columna para la imagen */}
          <Col md={6}>
            <img src={imageSrc} alt={title} className="img-fluid rounded-start" />
          </Col>
          {/* Columna para la descripción */}
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fw-bold">{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              {/* Botón para ir al registro */}
              <Button onClick={scrollToRegister} className="btn btn-primary mt-3">
                Ir al Registro
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DeteccionDeHumanos;

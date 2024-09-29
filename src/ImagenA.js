import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const ImagenA = ({ imagenSrc, altTexto, scrollToRegister }) => {
  return (
    <Container fluid className="my-4" style={{ height: 'auto', width: '99vw' }}>
      <Row className="align-items-center">
        {/* Columna para el texto */}
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <h2 className="display-1 display-md-2 fw-bold bg-dark text-center p-3 rounded">
            <span className="text-warning">envío</span>
            <span className="text-light"> gratis </span>
            <span className="text-warning">+ pago</span>
            <span className="text-light"> contra entrega </span>
            <span className="text-warning">en Bucaramanga y área metropolitana</span>
          </h2>
        </Col>

        {/* Columna para la imagen */}
        <Col xs={12} md={6} className="text-center">
          <img
            src={imagenSrc}
            alt={altTexto}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '60%', objectFit: 'cover', width: '100%' }}
          />
        </Col>
      </Row>
      
      {/* Subtítulo */}
      <div className="fs-4 fs-md-3 text-primary text-center mt-3">
        kit de 4 cámaras robóticas de 3 mpx.
      </div>

      {/* Botón Ir al Registro */}
      <div className="text-center">
        <button onClick={scrollToRegister} className="btn btn-primary mt-3">
          Ir al Registro
        </button>
      </div>
    </Container>
  );
};

export default ImagenA;

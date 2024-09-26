import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ImagenA.css'; // Asegúrate de importar el archivo CSS

const ImagenA = ({ imagenSrc, altTexto }) => {
  return (
    <Row className="my-4">
      <Col md={6} className="text-center"> {/* Añadido className="text-center" */}
        <h2 className="custom-header">
          <span className="text-yellow">envío</span> 
          <span className="text-white"> gratis </span> 
          <span className="text-yellow">+ pago</span> 
          <span className="text-white"> contra entrega </span> 
          <span className="text-yellow">en Bucaramanga y área metropolitana</span>
        </h2>
      </Col>
      <Col md={6}>
        <img src={imagenSrc} alt={altTexto} className="img-fluid" />
      </Col>
    </Row>
  );
};

export default ImagenA;

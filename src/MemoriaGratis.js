import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const MemoriaGratis = ({ title, imageSrc, description }) => {
  return (
    <Container fluid className="my-0" style={{ height: 'auto', width: '99vw' }}>
      <Card 
        className="shadow-sm mx-0 wide-card" 
        style={{ 
          width: '100%',    
          height: '100%', 
          minHeight: '800px' // Altura mínima para que sea consistente
        }}
      >
        <Card.Body 
          className="d-flex align-items-center"
          style={{ height: '100%' }} 
        >
          <Row className="g-0 align-items-center w-100">
            {/* Columna del texto a la izquierda */}
            <Col xs={12} md={8} className="text-center text-md-left d-flex flex-column justify-content-center">
              <Card.Title className="display-1 display-md-2">{title}</Card.Title> {/* Aumentar tamaño del título */}
              <Card.Text className="fs-4">{description}</Card.Text> {/* Aumentar tamaño del texto de descripción */}
              <h2 className="mt-4 display-1">Solo con el registro!</h2> {/* Aumentar tamaño del encabezado */}
              <p className="fs-4">Obtén una memoria gratis al comprar este producto. ¡No te lo pierdas!</p> {/* Aumentar tamaño del texto */}
            </Col>
            {/* Columna de la imagen a la derecha */}
            <Col xs={12} md={4} className="text-center text-md-right">
              <img 
                src={imageSrc} 
                alt={title} 
                className="img-fluid" 
                style={{ 
                  height: 'auto', 
                  maxHeight: '60%', // Ajustar la altura para que sea consistente
                  objectFit: 'cover', // Usar cover para que la imagen se ajuste bien
                  width: '98%' // Asegurar que la imagen ocupe casi todo el ancho
                }} 
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MemoriaGratis;

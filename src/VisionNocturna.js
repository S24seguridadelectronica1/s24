import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const VisionNocturna = ({ logoSrc, imageSrc, description, title }) => {
  return (
    <Container fluid className="my-3" style={{ height: 'auto', width: '99vw' }}>
      <Card 
        className="shadow-sm mx-0 wide-card" 
        style={{ 
          width: '100%',    
          height: 'auto', 
          minHeight: '300px',
          position: 'relative' 
        }}
      >
        <Card.Body style={{ height: 'auto', padding: '10px' }}> {/* Ajustar aquí */}
          {/* Logo posicionado de manera absoluta */}
            <Col xs={12} className="text-center">
              <img 
                src={logoSrc} 
                alt="Logo" 
                className="img-fluid mb-3"
                style={{ 
                  position: 'absolute', 
                  top: '2px', 
                  left: '1%', 
                  maxWidth: '80px', // Ajuste responsivo
                  zIndex: 10 
                }} 
              />
            </Col>

          {/* Fila para el contenido principal */}
          <Row className="g-0 align-items-start w-100" style={{ marginTop: '80px' }}>
            {/* Columna para la descripción (Texto a la izquierda) */}
            <Col xs={12} md={5} className="text-center text-md-left">
              <div 
                style={{ 
                  position: 'relative',
                  padding: '2px', // Puedes ajustar el padding aquí también
                  marginTop: '10px', // Elevar el texto
                }}
              >
                <Card.Title className="display-4">{title}</Card.Title>
                <Card.Text className="fs-4">{description}</Card.Text>
              </div>
            </Col>
           
            {/* Columna para la imagen (Imagen a la derecha) */}
            <Col xs={12} md={7} className="text-center text-md-left d-flex justify-content-center">
              <div className="w-100">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="img-fluid" 
                  style={{ 
                    maxHeight: '600px', // Ajuste de altura para pantallas pequeñas
                    width: '100%',
                    marginTop: '-80px' 
                  }}
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
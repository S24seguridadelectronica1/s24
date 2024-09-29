import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Price = ({ title, amount, imageSrc, productDetails }) => {
  return (
    <Container fluid className="my-0" style={{ height: 'auto', width: '99vw' }}>
      <Card 
        className="shadow-sm mx-0 wide-card" 
        style={{ 
          width: '100%',    
          height: '100%', 
          minHeight: '800px'
        }}
      >
        <Card.Body 
          className="d-flex align-items-center"
          style={{ height: '100%' }} 
        >
          <Row className="g-0 align-items-center w-100">
            <Col xs={12} md={6} className="text-center text-md-left">
              <img
                src={imageSrc} 
                alt={title} 
                className="img-fluid" 
                style={{ 
                  height: 'auto',
                  maxHeight: '60%',
                  objectFit: 'cover',
                  width: '98%'
                }}
              />
            </Col>
            <Col xs={12} md={6} className="text-center text-md-left">
              {/* Título del producto */}
              <Card.Title className="display-1 display-md-2">{title}</Card.Title> {/* Aumentar tamaño del título */}
              
              {/* Precio del producto */}
              <Card.Text className="display-1">${amount.toLocaleString()} COP</Card.Text> {/* Aumentar tamaño del precio */}
              
              {/* Encabezado para la sección de contenido del producto */}
              <h2 className="mt-4 display-1">Contenido del Producto</h2> {/* Aumentar tamaño del encabezado */}
              
              {/* Lista de detalles del producto */}
              <ul className="list-unstyled">
                {productDetails.map((detail, index) => (
                  <li key={index} className="mb-2 fs-3">• {detail}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Price;

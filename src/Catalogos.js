import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Catalogos = () => {
  // Número de teléfono de WhatsApp
  const telefono = "3046615865";

  // URLs para enviar mensajes personalizados a WhatsApp
  const catalogoServiciosUrl = `https://wa.me/${telefono}?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20ver%20el%20catálogo%20de%20servicios`;
  const catalogoProductosUrl = `https://wa.me/${telefono}?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20ver%20el%20catálogo%20de%20productos`;

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Imagen y botón para el catálogo de servicios */}
        <Col md={6} className="d-flex flex-column align-items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/2.png`} 
            alt="Catálogo de Servicios" 
            style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover' }}
          />
          <Button 
            variant="primary" 
            href={catalogoServiciosUrl} 
            target="_blank" 
            className="mt-3"
          >
            Catálogo de Servicios
          </Button>
        </Col>

        {/* Imagen y botón para el catálogo de productos */}
        <Col md={6} className="d-flex flex-column align-items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/1.png`} 
            alt="Catálogo de Productos" 
            style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover' }}
          />
          <Button 
            variant="success" 
            href={catalogoProductosUrl} 
            target="_blank" 
            className="mt-3"
          >
            Catálogo de Productos
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Catalogos;

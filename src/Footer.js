import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importa Row y Col de Bootstrap

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col>
            <p className="mb-1">S24 Seguridad Electrónica</p>
            <p className="mb-1">Bucaramanga, Colombia</p>
            <p className="mb-0">
              Tel: 
              <a href="tel:3046615865" className="text-primary ms-1"> {/* Clase ms-1 para margen a la izquierda */}
                📞 3046615865
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

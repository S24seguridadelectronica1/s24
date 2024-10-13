import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import S24Logo from './S24Logo'; // Asegúrate de que la ruta de importación sea correcta

const SeguridadElectronica = () => {
  return (
    <Container className="my-5">
      {/* Espacio para el logo */}
      <Row className="mb-4 justify-content-center">
        <Col md={12} className="d-flex justify-content-center align-items-center">
          <S24Logo 
            textX={150}
            textY={110}
            fontSize={120}
            textColor="#003366"
            circleStrokeWidth={2} // Círculos más gruesos
          />
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row>
        <Col md={12} className="text-center mb-4">
          <p className="lead">
            Somos una empresa de Bucaramanga dedicada a la venta e instalación de cámaras de seguridad, alarmas, video porteros y sistemas de monitoreo. Ofrecemos soluciones personalizadas para proteger tu hogar y negocio, asegurando la tranquilidad que mereces.
          </p>
          <p>
            Nuestros productos están diseñados con la más alta tecnología y calidad, garantizando durabilidad y eficiencia. Contamos con un equipo de expertos en seguridad electrónica que te asesorarán en la elección de los sistemas que mejor se adapten a tus necesidades.
          </p>
          <p>
            Ofrecemos instalación profesional y soporte técnico para asegurar un funcionamiento óptimo de todos nuestros equipos. Además, trabajamos con precios competitivos para brindar la mejor relación calidad-precio en el mercado.
          </p>
         
          <p>
            <strong>realizamos Showrooms en Bucaramanga!:</strong><br />
          </p>
        </Col>
        <Col md={12} className="text-center">
          <Button variant="primary" href={`tel:3046615865`} size="lg">
            llamanos!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SeguridadElectronica;
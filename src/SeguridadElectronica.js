import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import S24Logo from './S24Logo'; // Asegúrate de que la ruta de importación sea correcta

const SeguridadElectronica = () => {
  const whatsappMessage = "Estoy interesado en el exposhow en Bucaramanga, por favor necesito más información";
  const whatsappLink = `https://wa.me/3046615865?text=${encodeURIComponent(whatsappMessage)}`;

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
            Somos una empresa en Bucaramanga dedicada a la venta e instalación de cámaras de seguridad, alarmas y videoporteros. Llegamos a todo Santander. Ofrecemos soluciones personalizadas para proteger tu hogar y negocio, asegurando la tranquilidad que mereces.
          </p>
          <p>
            Contamos con productos de la mejor tecnología y calidad, garantizando durabilidad y eficiencia. Tenemos un equipo de integradores de seguridad electrónica que te asesorará en la elección de los sistemas que mejor se adapten a tus necesidades.
          </p>
          <p>
            Ofrecemos instalación y soporte técnico para asegurar el buen funcionamiento de todos nuestros equipos. Además, trabajamos con precios competitivos para brindar la mejor relación calidad-precio en el mercado.
          </p>
          <p>
            <strong>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                ¡Realizamos Showrooms en Bucaramanga!
              </a>
            </strong>
          </p>
        </Col>
        <Col md={12} className="text-center">
          <Button variant="primary" href={`tel:3046615865`} size="lg">
            ¡Llámanos!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SeguridadElectronica;

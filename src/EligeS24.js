import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './EligeS24.css'; // Importa el archivo CSS

const EligeS24 = ({ title, description, phone, imageSrc }) => {
  return (
    <Container fluid className="my-5">
      <Row className="align-items-center g-0">
        {/* Sección de texto a la izquierda */}
        <Col md={6} className="p-5 full-width-text"> {/* Aplica la clase full-width-text */}
          <h2 className="display-1">{title}</h2>
          <p className="lead">{description}</p>
          <p className="fs-5">
          Ofrecemos garantía en todos nuestros trabajos y llevamos un registro detallado de cada producto y servicio que adquiere con nosotros. Respondemos rápidamente a cualquier solicitud de garantía, cubriendo todos los costos de operación y transporte de los equipos que requieren revisión. Además, reemplazamos inmediatamente el equipo que entra garantia por uno equivalente mientras el original está en proceso de garantía. Este respaldo incluye sistemas centrales como videograbadores y su disco duro, paneles de alarma y controladores de acceso.  .
          </p>
          <p className="fs-5">
          Ofrecemos una amplia gama de sistemas de seguridad de alta calidad. Todos nuestros productos son seleccionados directo en distribucion, sin pasar por almacenamiento, lo que nos permite mantener tu equipo siempre actualizado con lo último en tecnología y brindar el mayor nivel de protección.
          </p>
          
          <p className="fs-5">
            Garantizamos una instalación segura y discreta si lo requiere. 
             Si ya compro sus equipos de seguridad cuente con nosotros para 
            la instalación, aseguramos que todo funcione de manera óptima.
          </p>
          <p className="fs-5">
          <strong>¡Somos expertos en ángulos de visión y movimiento!</strong>
          </p>
          <p className="fs-5">
          Personalizamos nuestras soluciones de seguridad a su medida, Formulamos sus equipos de seguridad, 
            <strong style={{ color: 'blue' }}>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                ¡Llámanos al {phone}!
              </a>
            </strong> 
             para una cotización!
          </p>
        </Col>

        {/* Sección de imagen a la derecha */}
        <Col md={6} className="p-0">
          <img 
            src={imageSrc} 
            alt="Sistemas de seguridad" 
            className="img-fluid" 
            style={{ 
              borderRadius: '8px',
              height: 'auto',
              objectFit: 'cover',
              width: '100%',
            }} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default EligeS24;

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
            La seguridad de tu hogar o negocio empieza con quienes realizan la instalación.
            En S24 Seguridad Electrónica, sabemos que proteger tu propiedad no solo depende 
            de la tecnología, sino también de la confianza que tienes en los instaladores 
            que entran a tu espacio. Por eso, nuestros técnicos están altamente capacitados 
            y son de total confianza, garantizando que la seguridad comience desde el primer 
            momento de la instalación.
          </p>
          <p className="fs-5">
            Ofrecemos una amplia gama de sistemas de seguridad de alta calidad, desde cámaras 
            IP y sistemas de vigilancia con visión nocturna hasta soluciones de monitoreo 
            remoto y grabación avanzada. Todos nuestros productos están diseñados con la 
            última tecnología para asegurar el mayor nivel de protección.
          </p>
          <p className="fs-5">
            Personalizamos nuestras soluciones para satisfacer las necesidades específicas de 
            cada cliente, ya sea para proteger una residencia, negocio o espacio comercial. 
            Además, nuestros precios son competitivos, ofreciendo opciones tanto para pequeños 
            negocios como para grandes corporaciones.
          </p>
          <p className="fs-5">
            En S24 Seguridad Electrónica, no solo vendemos cámaras de seguridad, también 
            garantizamos que el proceso de instalación sea seguro, profesional y discreto. 
            Nuestro equipo de expertos está listo para asesorarte y ofrecerte el mejor sistema 
            de protección adaptado a tus necesidades.
          </p>
          <p className="fs-5">
            Protege lo que más te importa con nosotros. ¡Llámanos al 
            <strong>
              <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {phone}
              </a>
            </strong> 
            para una cotización personalizada y empieza a cuidar tu seguridad desde la instalación!
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

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Visitas from './VisitasForm'; // Asegúrate de que la ruta sea correcta

const UbicacionVisita = () => {
  const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=7.075000,-73.127389";
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm); // Alterna la visibilidad del formulario
  };

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Columna para el mapa */}
        <Col md={6} className="position-relative">
          <div className="recuadro-info p-4 bg-light border rounded shadow-sm">
            <strong className="d-block mb-2">Oficina:</strong>
            <strong className="d-block mb-2">Transversal 6D #109-58</strong>
            <span>Marianela, Girón, Santander, Colombia</span>
            <p className="mt-2">
              <strong>llamada previa para Consultas en la oficina.</strong>
            </p>
            <a href="tel:+573046615865" className="text-primary text-decoration-none">
              <strong>¡Llámanos!: 📞 3046615865</strong>
            </a>
          </div>
          
          <iframe
            title="Mapa de Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.540896414341!2d-73.127389!3d7.075000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnMzAuMCJOIDczwrAwnzM4LjYiVw!5e0!3m2!1ses!2sco!4v1696100366541!5m2!1ses!2sco"
            width="100%"
            height="450"
            style={{ border: '1px solid #ddd', borderRadius: '8px', marginTop: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Botón centrado en el mapa */}
          <Button
            variant="primary"
            href={googleMapsLink}
            target="_blank"
            className="position-absolute"
            style={{
              top: '75%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              padding: '2px 4px', // Ajustado para menor padding
              fontSize: '1.7rem', // Aumentar el tamaño de la letra
              transition: 'background-color 0.3s, transform 0.3s', // Efecto de hover
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} // Color en hover
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''} // Vuelve al color original
            aria-label="Cómo llegar" // Atributo para accesibilidad
          >
            Cómo llegar
          </Button>
        </Col>

        {/* Columna para la imagen y el botón */}
        <Col md={6} className="d-flex flex-column align-items-center position-relative">
          <img 
            src={`${process.env.PUBLIC_URL}/visita.png`} 
            alt="Visita técnica" 
            className="img-fluid" 
            style={{ 
              borderRadius: '8px', 
              height: 'auto', 
              objectFit: 'cover', 
              width: '100%', 
              maxHeight: '509px', 
            }} 
          />
          {/* Botón para pedir una visita */}
          <Button
            variant="success"
            className="position-absolute"
            style={{
              top: '50%', // Centrado vertical
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              padding: '2px 4px', // Ajustado para menor padding
              fontSize: '1.6rem', // Aumentar el tamaño de la letra
            }}
            onClick={toggleForm} // Cambia la visibilidad del formulario
            aria-label="Pide una visita" // Atributo para accesibilidad
          >
            Pide una visita
          </Button>
        </Col>
      </Row>

      {/* Mensaje debajo del mapa y la imagen */}
      <div
        style={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '1.2rem',
        }}
      >
        Visitas sin costo únicamente con el registro
      </div>

      {/* Modal para el formulario */}
      <Modal show={showForm} onHide={toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>¡Pide tu visita!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Visitas /> {/* Aquí se renderiza el formulario */}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UbicacionVisita;

import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Visitas from './VisitasForm'; // Asegúrate de que la ruta sea correcta

const UbicacionVisita = () => {
  const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=7.075000,-73.127389";
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Container fluid className="my-5">
      <Row>
        {/* Mapa de Google a la izquierda */}
        <Col md={6} className="d-flex flex-column align-items-center position-relative">
          {/* Recuadro de la dirección en la esquina superior izquierda */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              zIndex: 1,
            }}
          >
            <strong>Oficina:</strong><br />
            <strong>Transversal 6D #109-58</strong><br />
            Marianela, Girón, Santander, Colombia<br />
            <p><strong>Consultas en la oficina bajo llamada previa</strong></p>
            <a href="tel:+573046615865" style={{ color: 'blue', textDecoration: 'none' }}>
              <strong>llámanos!: 📞 3046615865</strong>
            </a>
          </div>

          {/* Mapa de Google */}
          <iframe
            title="Mapa de Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.540896414341!2d-73.127389!3d7.075000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDQnMzAuMCJOIDczwrAwnzM4LjYiVw!5e0!3m2!1ses!2sco!4v1696100366541!5m2!1ses!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Botón centrado y agrandado en el mapa */}
          <Button
            variant="primary"
            href={googleMapsLink}
            target="_blank"
            className="position-absolute btn-large"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          >
            Cómo llegar
          </Button>
        </Col>

        {/* Imagen y botón a la derecha */}
        <Col md={6} className="d-flex flex-column align-items-center position-relative">
          <img 
            src={`${process.env.PUBLIC_URL}/visita.png`} 
            alt="Visita técnica" 
            className="img-fluid" // Usar clase de Bootstrap para imágenes fluidas
            style={{ 
              borderRadius: '8px', 
              height: 'auto', // Mantiene la proporción de la imagen
              objectFit: 'cover', // Asegura que la imagen mantenga su proporción
              width: '100%', // Asegúrate de que ocupe todo el ancho
              maxHeight: '450px', // Limitar altura máxima
            }} 
          />
          {/* Botón para pedir una visita */}
          <Button
            variant="success"
            className="position-absolute btn-large"
            style={{
              top: '50%', // Centrado vertical
              left: '50%',
              transform: 'translate(-50%, -50%)', // Centrado horizontal y vertical
              zIndex: 2,
            }}
            onClick={toggleForm} // Cambia la visibilidad del formulario
          >
            Pide una visita
          </Button>
        </Col>
      </Row>

      {/* Mensaje debajo del mapa y la imagen */}
      <div
        style={{
          marginTop: '20px', // Espacio entre el contenido y el mensaje
          textAlign: 'center',
          fontSize: '1.2rem', // Tamaño de fuente del mensaje
        }}
      >
        Visitas sin costo solo con el registro
      </div>

      {/* Modal para el formulario */}
      <Modal show={showForm} onHide={toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Visita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Visitas /> {/* Aquí se renderiza el formulario */}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UbicacionVisita;

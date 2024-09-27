import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import ReusableButton from './ReusableButton'; // Asegúrate de que la ruta sea correcta

const CameraDescription = ({ imageSrc, scrollToRegister }) => {
  return (
    <Container className="my-4">
      <Card className="shadow-sm border-0" style={{ maxWidth: '1500px' }}>
        <Row className="g-0">
          <Col md={6} className="d-flex align-items-center">
            <img 
              src={imageSrc} 
              alt="Cámara de seguridad Tenda CP3 Pro" 
              className="img-fluid rounded-start" 
              style={{ maxHeight: '600px', objectFit: 'contain' }} 
            />
          </Col>
          <Col md={6}>
            <Card.Body className="p-4">
              <div style={{ backgroundColor: '#d3d3d3' }} className="p-2 rounded mb-3">
                <Card.Title className="fw-bold fs-5 mb-0">
                  Cámara de Seguridad Panorámica de 3 MP - Tenda CP3 Pro
                </Card.Title>
              </div>
              <Card.Text as="div" className="mb-3">
                <ul className="list-unstyled">
                  <li className="fs-5"><strong>Visión integral:</strong> 360° horizontal y 155° vertical</li>
                  <li className="fs-5"><strong>Wi-Fi 6:</strong> Menor latencia y señal mejorada</li>
                  <li className="fs-5"><strong>Detección con IA:</strong> Humanos, mascotas y llanto</li>
                  <li className="fs-5"><strong>Seguimiento inteligente:</strong> Rastreo automático de movimiento</li>
                  <li className="fs-5"><strong>Alarmas activas:</strong> Luz y sonido para defensa</li>
                  <li className="fs-5"><strong>Audio bidireccional:</strong> Con llamada de un toque</li>
                  <li className="fs-5"><strong>Seguridad:</strong> Cifrado AES de 128 bits</li>
                  <li className="fs-5"><strong>Almacenamiento:</strong> MicroSD, nube y NVR</li>
                  <li className="fs-5"><strong>Montaje:</strong> Escritorio, techo y pared</li>
                </ul>
              </Card.Text>
              <Card.Text className="fw-bold text-secondary fs-5">
                Protege cada rincón de tu hogar con una rotación flexible, cubriendo todas las zonas sin puntos ciegos.
              </Card.Text>
              <ReusableButton onClick={scrollToRegister}>
                Ir al Registro
              </ReusableButton>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CameraDescription;

import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import ReusableButton from './ReusableButton'; // Asegúrate de que la ruta sea correcta

const CameraDescription = ({ imageSrc, scrollToRegister }) => {
  return (
    <Container fluid className="my-0" style={{ height: 'auto', width: '99vw' }}>
      <Card 
        className="shadow-sm mx-0 wide-card" 
        style={{ 
          width: '100%',    
          height: '100%', 
          minHeight: '800px' // Altura mínima similar a Price
        }}
      >
        <Card.Body 
          className="d-flex align-items-center"
          style={{ height: '100%' }} 
        >
          <Row className="g-0 align-items-center w-100">
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
              <img 
                src={imageSrc} 
                alt="Cámara de seguridad Tenda CP3 Pro" 
                className="img-fluid" 
                style={{ 
                  height: 'auto',
                  maxHeight: '60%', // Ajustar para que sea similar a Price
                  objectFit: 'cover', // Usar cover para que la imagen se ajuste bien
                  width: '98%' // Asegurar que la imagen ocupe casi todo el ancho
                }} 
              />
            </Col>
            <Col xs={12} md={6} className="text-center text-md-left">
              {/* Título de la cámara */}
              <Card.Title className="display-1 display-md-2"> {/* Tamaño de título aumentado */}
                Cámara de Seguridad Panorámica de 3 MP - Tenda CP3 Pro
              </Card.Title>
              
              {/* Detalles de la cámara */}
              <Card.Text className="fs-4"> {/* Aumentar tamaño del texto */}
                <ul className="list-unstyled">
                  <li className="mb-2">• <strong>Visión integral:</strong> 360° horizontal y 155° vertical</li>
                  <li className="mb-2">• <strong>Wi-Fi 6:</strong> Menor latencia y señal mejorada</li>
                  <li className="mb-2">• <strong>Detección con IA:</strong> Humanos, mascotas y llanto</li>
                  <li className="mb-2">• <strong>Seguimiento inteligente:</strong> Rastreo automático de movimiento</li>
                  <li className="mb-2">• <strong>Alarmas activas:</strong> Luz y sonido para defensa</li>
                  <li className="mb-2">• <strong>Audio bidireccional:</strong> Con llamada de un toque</li>
                  <li className="mb-2">• <strong>Seguridad:</strong> Cifrado AES de 128 bits</li>
                  <li className="mb-2">• <strong>Almacenamiento:</strong> MicroSD, nube y NVR</li>
                  <li className="mb-2">• <strong>Montaje:</strong> Escritorio, techo y pared</li>
                </ul>
              </Card.Text>
              
              {/* Texto descriptivo */}
              <Card.Text className="fw-bold text-secondary fs-4">
                Protege cada rincón de tu hogar con una rotación flexible, cubriendo todas las zonas sin puntos ciegos.
              </Card.Text>
              
              {/* Botón reutilizable */}
              <ReusableButton onClick={scrollToRegister}>
                Ir al Registro
              </ReusableButton>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CameraDescription;

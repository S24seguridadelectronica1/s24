import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Beneficios = ({ title, description, buttonText, scrollToRegister }) => {
  const beneficios = [
    "✅ Visión panorámica de 360°: La cámara ofrece una cobertura total sin zonas ciegas, rotando en todas direcciones (horizontal y vertical) para máxima vigilancia.",
    "✅ Resolución de 3 MP: Captura imágenes y videos en alta definición, brindando detalles nítidos y claros para una mejor seguridad.",
    "✅ Wi-Fi 6 integrado: Mejora la velocidad y estabilidad de la conexión inalámbrica, permitiendo una transmisión fluida incluso a través de paredes.",
    "✅ Detección inteligente de movimiento: La cámara utiliza inteligencia artificial para identificar movimientos humanos y enviar alertas en tiempo real.",
    "✅ Detección de humanos, mascotas y llanto: Gracias a la IA avanzada, puede reconocer y enviar notificaciones específicas para actividades humanas, de mascotas y llanto de bebés.",
    "✅ Seguimiento automático inteligente: La cámara sigue de manera automática cualquier objeto en movimiento, asegurando que no se pierda ningún detalle.",
    "✅ Audio bidireccional: Permite la comunicación en tiempo real con las personas en el área vigilada a través de micrófono y altavoz integrados.",
    "✅ Alarma de luz y sonido: La cámara activa una alarma y una luz blanca intermitente para disuadir a intrusos cuando se detecta movimiento sospechoso.",
    "✅ Almacenamiento flexible: Opción de guardar videos en una tarjeta Micro SD, en la nube o en un NVR para mayor seguridad y acceso remoto.",
    "✅ Protección de privacidad: Incluye un obturador de privacidad y encriptación de datos AES de 128 bits para asegurar la transmisión de información."
  ];

  return (
    <div className="bg-dark text-white py-5" style={{ width: '100%', margin: 0 }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} className="mx-auto">
          <h2 className="display-5 fw-bold mb-4">{title}</h2>
          <p className="lead mb-4 fs-6">{description}</p>
          <h3 className="mt-5 display-6">Principales Beneficios:</h3>
          <ul className="list-unstyled mt-3">
            {beneficios.map((beneficio, index) => (
              <li key={index} className="mt-3 fs-6">
                {beneficio}
              </li>
            ))}
          </ul>
          <button 
            onClick={scrollToRegister} 
            className="btn btn-primary mt-4 w-100 fs-5"
          >
            {buttonText}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Beneficios;

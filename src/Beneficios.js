import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Beneficios = ({ title, description, buttonText, scrollToRegister }) => {
  const beneficios = [
    "✅ Alta resolución de imagen: Captura videos y fotos con calidad nítida y detallada para una mejor vigilancia.",
    "✅ Visión nocturna: Permite monitorear en condiciones de baja luz, asegurando la seguridad las 24 horas.",
    "✅ Conectividad Wi-Fi: Facilita el acceso remoto a las imágenes en tiempo real desde tu smartphone o computadora.",
    "✅ Detección de movimiento: Recibe alertas instantáneas cuando se detecta movimiento en el área vigilada.",
    "✅ Audio bidireccional: Comunica con personas en el área de vigilancia a través de un micrófono y altavoz integrados.",
    "✅ Instalación sencilla: Diseñada para una fácil instalación y configuración sin necesidad de herramientas especializadas.",
    "✅ Resistente a la intemperie: Adecuada para uso en interiores y exteriores, resistente a la lluvia y condiciones climáticas adversas.",
    "✅ Almacenamiento en la nube: Opción de almacenamiento de video en la nube para acceso y reproducción fácil de grabaciones pasadas.",
    "✅ Compatibilidad con dispositivos inteligentes: Funciona con sistemas de automatización del hogar y otros dispositivos inteligentes.",
    "✅ Garantía de 1 año: Cobertura de 1 año contra defectos de fabricación, brindando tranquilidad al usuario."
  ];

  return (
    <div className="bg-dark text-white py-5" style={{ width: '100%', margin: 0 }}>
      <Row className="w-100">
        <Col xs={12} sm={10} md={10} lg={8} style={{ marginLeft: '-20' }}>
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

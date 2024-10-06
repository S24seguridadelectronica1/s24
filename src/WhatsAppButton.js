import React from 'react';
import './WhatsAppButton.css'; // Archivo CSS para los estilos

const WhatsAppButton = () => {
  const phoneNumber = "3046615865"; // Número de WhatsApp
  const message = "Hola, me gustaría obtener más información sobre sus servicios."; // Mensaje inicial

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;

import React, { useState } from 'react';
import './Showrooms.css'; // Asegúrate de incluir los estilos necesarios

const Modal = ({
  showModal,
  closeModal,
  title,
  imageSrc,
  description,
  contactInfo,
  showForm, // Recibimos la propiedad showForm
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, almacenarlo o enviarlo a un backend.
    console.log('Nombre:', name, 'Teléfono:', phone);
    closeModal(); // Cerrar el modal después de enviar.
  };

  if (!showModal) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={closeModal} className="closeButton">
          X
        </button>
        <h2 className="modalTitle">{title}</h2>
        <img src={imageSrc} alt="Imagen" className="image" />
        <p>{description}</p>

        {/* Mostrar el formulario solo si showForm es true */}
        {showForm && (
          <>
            <h3>¡Regístrate para más información!</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Número de teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="button submitButton">Registrar</button>
            </form>
          </>
        )}

        <h3>
          <strong>DIRECCIÓN</strong> del showrooms al{' '}
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            className="button whatsappButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{' '}
          llámanos:{' '}
          <a href={`tel:${contactInfo.phone}`} className="button callButton">
            {contactInfo.phone}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Modal;

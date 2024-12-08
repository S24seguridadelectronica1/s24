import React, { useState } from "react";
import "./ComprarButton.css"; // Archivo CSS para estilos (opcional)

const ComprarButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false); // Nuevo estado para el modal de agradecimiento
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    barrio: "",
    ciudad: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirm = () => {
    console.log("Compra confirmada con los datos:", formData);
    setIsModalOpen(false); // Cerrar el modal de confirmación
    setIsThankYouModalOpen(true); // Abrir el modal de agradecimiento
  };

  const handleCloseThankYouModal = () => {
    setIsThankYouModalOpen(false); // Cerrar el modal de agradecimiento
  };

  return (
    <div>
      <button className="comprar-button" onClick={() => setIsModalOpen(true)}>
        Comprar
      </button>

      {/* Modal de confirmación */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ❌
            </button>
            <div className="modal-bacground">
  <h2>Confirmar Compra</h2>
  <h3>
    Por favor ingrese sus datos correctamente para hacer llegar su pedido. El pago se realizará cuando tenga el kit de cámaras en sus manos. Realizamos una llamada de confirmación antes de enviar el pedido.
  </h3>
  <h2>Domicilio gratis!</h2>
  <img
    className="componenteA-img"
    src={`${process.env.PUBLIC_URL}/showroms.png`}
    alt="Imagen de la cámara DS-2CE56D0T-IRPFocho"
  />
</div>

            <form>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Teléfono:
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Dirección:
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Barrio:
                <input
                  type="text"
                  name="barrio"
                  value={formData.barrio}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Ciudad:
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button
                type="button"
                className="confirm-button"
                onClick={handleConfirm}
              >
                Confirmar Compra
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de agradecimiento */}
      {isThankYouModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={handleCloseThankYouModal}
            >
              ❌
            </button>
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu compra ha sido confirmada correctamente.</p>
            <button onClick={handleCloseThankYouModal} className="confirm-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComprarButton;

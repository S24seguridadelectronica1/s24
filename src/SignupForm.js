import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    telefono: '',
    direccionBarrio: '',
    ciudadDepartamento: '',
    correoElectronico: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwQXyFm646LQhmTAi8naxUmJKGqs7lqgB0bpXqBdtK4O_FGpggOcz9O9R9nfrRI51Ro/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const result = await response.text(); // Usa text() si el servidor responde en texto

      alert(result); // Mostrar mensaje de respuesta

      // Limpiar el formulario
      setFormData({
        nombreCompleto: '',
        telefono: '',
        direccionBarrio: '',
        ciudadDepartamento: '',
        correoElectronico: '',
      });
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Ocurrió un error al enviar el formulario');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombreCompleto" className="block text-sm font-medium text-gray-700">
          Nombre Completo
        </label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
          Número de Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="direccionBarrio" className="block text-sm font-medium text-gray-700">
          Dirección / Barrio
        </label>
        <input
          type="text"
          id="direccionBarrio"
          name="direccionBarrio"
          value={formData.direccionBarrio}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="ciudadDepartamento" className="block text-sm font-medium text-gray-700">
          Ciudad / Departamento
        </label>
        <input
          type="text"
          id="ciudadDepartamento"
          name="ciudadDepartamento"
          value={formData.ciudadDepartamento}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="correoElectronico" className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="correoElectronico"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default SignupForm;

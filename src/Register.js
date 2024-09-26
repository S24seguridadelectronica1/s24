import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from './supabase/supabaseClient';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(''); // Reiniciar el mensaje de éxito

    const { name, phone, email } = formData;

    // Validar que todos los campos estén llenos
    if (!name || !phone || !email) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar que el teléfono tenga al menos 10 caracteres
    if (phone.length < 10) {
      setError('El teléfono debe tener al menos 10 caracteres.');
      return;
    }

    setLoading(true);

    try {
      // Insertar los datos en la tabla "registro"
      const { error: dbError } = await supabase
        .from('registro')
        .insert([{ name, phone, email }]); // Ajusta los campos según tu tabla

      if (dbError) {
        console.error('Error al guardar los datos:', dbError); // Captura más detalles del error
        setError('Error al guardar los datos en la tabla: ' + dbError.message);
        throw dbError;
      }

      // Establecer el mensaje de éxito
      setSuccessMessage('¡Registro exitoso! Puedes iniciar sesión ahora.');

      // Limpiar los datos del formulario
      setFormData({
        name: '',
        phone: '',
        email: '',
      });

      // Redirigir al usuario después de un tiempo (opcional)
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Espera 2 segundos antes de redirigir
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Registrarse</h2>
      <p className="mb-4 text-gray-600">Por favor, completa el formulario para crear una cuenta.</p>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
      {successMessage && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{successMessage}</div>} {/* Mensaje de éxito */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default Register;

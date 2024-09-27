import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import supabase from './supabase/supabaseClient';
import './Register.css'; // Importa el archivo CSS

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    const { name, phone, email } = formData;

    // Validación de campos
    if (!name || !phone || !email) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (phone.length < 10) {
      setError('El teléfono debe tener al menos 10 caracteres.');
      return;
    }

    setLoading(true);

    try {
      // Insertar datos en la tabla "registro"
      const { error: dbError } = await supabase
        .from('registro')
        .insert([{ name, phone, email }]);

      if (dbError) {
        console.error('Error al guardar los datos:', dbError);
        setError(`Error al guardar los datos: ${dbError.message}`);
        return;
      }

      setSuccessMessage('¡Registro exitoso! Puedes iniciar sesión ahora.');
      setFormData({ name: '', phone: '', email: '' });

      // Redirigir después de un tiempo
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      setError('Ha ocurrido un error, por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Registrarse</h2>
      <p className="text-center mb-4">Completa el formulario para crear una cuenta.</p>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre"
          />
        </Form.Group>
        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Ingresa tu número de teléfono"
          />
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Ingresa tu correo electrónico"
          />
        </Form.Group>
        <Button
          type="submit"
          disabled={loading}
          className="w-100"
          variant="primary"
        >
          {loading ? 'Registrando...' : 'Registrarse'}
        </Button>
      </Form>
    </Container>
  );
};

export default Register;

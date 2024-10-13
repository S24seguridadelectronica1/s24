import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import supabase from './supabase/supabaseClient';

const FormularioContrate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja la presentación del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    const { name, phone } = formData;

    // Validación de campos
    if (!name || !phone) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (phone.length < 10) {
      setError('El teléfono debe tener al menos 10 caracteres.');
      return;
    }

    setLoading(true);

    try {
      // Insertar datos en la tabla "contrate"
      const { error: dbError } = await supabase
        .from('contrate')
        .insert([{ name, phone }]);

      if (dbError) {
        console.error('Error al guardar los datos:', dbError);
        setError(`Error al guardar los datos: ${dbError.message}`);
        return;
      }

      // Mensaje de éxito y reiniciar el formulario
      setSuccessMessage('¡Registro exitoso! te contactaremos en la menor brevedad posible.');
      setFormData({ name: '', phone: '' });

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
    <Container fluid className="my-5" style={{ maxWidth: '90vw' }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h2 className="text-center mb-4 display-4">¡Regístra tu numero!</h2>
          <p className="text-center mb-4 fs-5">Te llamamos en el menor tiempo posible.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label className="fs-5">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ingresa tu nombre"
                className="fs-5"
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label className="fs-5">Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Ingresa tu número de teléfono"
                className="fs-5"
              />
            </Form.Group>
            <Button
              type="submit"
              disabled={loading}
              className="w-100 btn-lg fs-5"
              variant="primary"
            >
              {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioContrate;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import supabase from './supabase/supabaseClient';

const VisitasForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    fecha: '',
    hora: '',
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

    const { nombre, telefono, direccion, fecha, hora } = formData;

    if (!nombre || !telefono || !direccion || !fecha || !hora) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (telefono.length < 10) {
      setError('El teléfono debe tener al menos 10 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const { error: dbError } = await supabase
        .from('visitas')
        .insert([{ name: nombre, phone: telefono, direccion, fecha, hora }]);

      if (dbError) {
        console.error('Error al guardar los datos:', dbError);
        setError(`Error al guardar los datos: ${dbError.message}`);
        return;
      }

      setSuccessMessage('¡Registro exitoso! Te contactaremos en la menor brevedad posible.');
      setFormData({ nombre: '', telefono: '', direccion: '', fecha: '', hora: '' });

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
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4 display-4">Registrar Visita</h2>
          <p className="text-center mb-4 fs-5">Completa el formulario para registrar tu visita.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            {/* Campo para el nombre */}
            <Form.Group controlId="nombre" className="mb-3">
              <Form.Label className="fs-5">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ingresa tu nombre"
                className="fs-5"
              />
            </Form.Group>

            {/* Campo para el teléfono */}
            <Form.Group controlId="telefono" className="mb-3">
              <Form.Label className="fs-5">Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="Ingresa tu número de teléfono"
                className="fs-5"
              />
            </Form.Group>

            {/* Campo para la dirección */}
            <Form.Group controlId="direccion" className="mb-3">
              <Form.Label className="fs-5">Dirección</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
                placeholder="Ingresa tu dirección"
                className="fs-5"
              />
            </Form.Group>

            {/* Campo para la fecha */}
            <Form.Group controlId="fecha" className="mb-3">
              <Form.Label className="fs-5">Fecha</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="fs-5"
              />
            </Form.Group>

            {/* Campo para la hora */}
            <Form.Group controlId="hora" className="mb-3">
              <Form.Label className="fs-5">Hora</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="fs-5"
              />
            </Form.Group>

            <Button
              type="submit"
              disabled={loading}
              className="w-100 btn-lg fs-5"
              variant="primary"
            >
              {loading ? 'Registrando...' : 'Registrar Visita'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VisitasForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Row, Col, Modal } from 'react-bootstrap';
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
  const [showPlans, setShowPlans] = useState(false); // Estado para controlar la visibilidad del modal de planes

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
      setSuccessMessage('¡Registro exitoso! Te contactaremos en la menor brevedad posible.');
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

  // Alternar la visibilidad del modal de planes
  const togglePlans = () => {
    setShowPlans((prev) => !prev);
  };

  return (
    <Container fluid className="my-5" style={{ maxWidth: '90vw' }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <h2 className="text-center mb-4 display-4">¡Apunta tu número!</h2>
          
          <p className="text-center mb-4 fs-5">Te llamamos en el menor tiempo posible para confirmar su direccion y hora de la visita</p>

          <p className="mt-2 small-text">
         para visitas fuera del horario gratuito por favor{' '}
            <span className="link-text" onClick={togglePlans} style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
              ver los precios!
            </span>.
          </p>

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
              {loading ? 'Registrando...' : 'Enviar!'}
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Modal para los planes */}
     {/* Modal para planes */}
     <Modal show={showPlans} onHide={togglePlans} centered size="lg">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Precios de Visitas</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5 className="mb-4" style={{ fontWeight: 'bold', color: '#555' }}>Valor de la visita fuera del horario gratuito!</h5>
          <ul className="list-unstyled">
            <li className="my-3"><strong>Diurno:</strong> $30,000</li>
            <li className="my-3"><strong>Nocturno de lunes a viernes de 6 pm a 8pm:</strong> $60,000</li>
            <li className="my-3"><strong>Sábados de 8 am a 1 pm:</strong> $60,000</li>
            <li className="my-3"><strong>Domingos y festivos de 8 am a 1 pm:</strong> $80,000</li>
          </ul>
          <p className="mt-4" style={{ fontWeight: 'bold', color: '#007bff' }}>
            * el valor de esta visita se descuenta del costo total en caso de concluirse el proyecto   
            !
          </p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={togglePlans}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FormularioContrate;


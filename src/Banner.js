import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css'; // Asegúrate de importar el archivo CSS

const Banner = ({ title, description, buttonText, scrollToRegister }) => {
  return (
    <div className="bg-dark text-white py-5">
      <Container className="custom-banner-container">
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <h2 className="display-4 fw-bold mb-4">
              {title}
            </h2>
            <p className="lead mb-4">
              {description}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

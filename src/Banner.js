import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = ({ title, description, buttonText, scrollToRegister }) => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={8}>
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

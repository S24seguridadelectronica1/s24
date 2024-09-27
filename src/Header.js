import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="py-4 bg-primary text-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} lg={8}>
            {/* Encabezado responsivo utilizando Bootstrap */}
            <h1 className="display-6 fw-bold">
              ¡Page en la puerta de tu casa!
            </h1>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

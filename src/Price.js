import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Price = ({ title, amount, imageSrc, productDetails }) => {
  return (
    <Container fluid className="my-3"> 
      <Card className="shadow-sm mx-0 wide-card"> 
        <Card.Body>
          <Row className="g-0 align-items-center">
            <Col xs={12} md={4} className="text-center text-md-left">
              <img src={imageSrc} alt={title} className="img-fluid" />
            </Col>
            <Col xs={12} md={8} className="text-center text-md-left">
              <Card.Title>{title}</Card.Title>
              <Card.Text>${amount.toLocaleString()} COP</Card.Text>
              <h2 className="mt-4">Contenido del Producto</h2>
              <ul className="list-unstyled">
                {productDetails.map((detail, index) => (
                  <li key={index} className="mb-2">• {detail}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Price;

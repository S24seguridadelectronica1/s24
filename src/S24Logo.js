import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const S24Logo = ({ 
  textX = 150, 
  textY = 125, 
  fontSize = 80, 
  textColor = '#8A2BE2'
}) => {
  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center align-items-center" style={{ height: '200px', background: 'linear-gradient(to bottom right, #f0f0f0, #e0e0e0)' }}>
        <Col xs="auto" className="position-relative">
          <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <g stroke="#d0d0d0" strokeWidth="0.5">
              <line x1="0" y1="40" x2="300" y2="40" />
              <line x1="0" y1="80" x2="300" y2="80" />
              <line x1="0" y1="120" x2="300" y2="120" />
              <line x1="0" y1="160" x2="300" y2="160" />
              <line x1="60" y1="0" x2="60" y2="200" />
              <line x1="120" y1="0" x2="120" y2="200" />
              <line x1="180" y1="0" x2="180" y2="200" />
              <line x1="240" y1="0" x2="240" y2="200" />
            </g>
            
            {/* Circles */}
            <circle cx="150" cy="100" r="80" fill="none" stroke="#c0c0c0" strokeWidth="1" />
            <circle cx="150" cy="100" r="60" fill="none" stroke="#c0c0c0" strokeWidth="1" />
            <circle cx="150" cy="100" r="40" fill="none" stroke="#c0c0c0" strokeWidth="1" />
            
            {/* S24 text */}
            <text 
              x={textX} 
              y={textY} 
              fontSize={fontSize} 
              fontWeight="bold" 
              fill={textColor} 
              textAnchor="middle" 
              dominantBaseline="middle"
            >
              S24
            </text>
          </svg>
          <div className="position-absolute" style={{ bottom: '10px', left: '0', right: '0', textAlign: 'center' }}>
            <span className="text-muted">seguridad electronica</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default S24Logo;

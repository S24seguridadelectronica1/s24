import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'; // Importa el componente Button de react-bootstrap
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom

const ReusableButton = ({ children, variant = "primary", className = "", to, ...props }) => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleClick = () => {
    if (to) {
      navigate(to); // Redirige a la ruta especificada si se proporciona 'to'
    }
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

ReusableButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default ReusableButton;

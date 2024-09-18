import React from 'react';
import { Button } from 'react-bootstrap';

const ReusableButton = ({ onClick, children, className }) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;

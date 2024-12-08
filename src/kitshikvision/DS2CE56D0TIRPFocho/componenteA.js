import React from 'react';
import './ComponenteA.css'; // Importa el archivo CSS

const ComponenteA = ({ children }) => {
  return (
    <div className="componenteA-container">
      {children}
    </div>
  );
};

export default ComponenteA;

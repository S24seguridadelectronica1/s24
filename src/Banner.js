import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import ReusableButton from './ReusableButton'; // Asegúrate de que la ruta es correcta

const Banner = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleButtonClick = () => {
    navigate('/register'); // Redirige al formulario de registro
  };

  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Transforma tu cuerpo, mejora tu vida</h2>
        <p className="text-xl mb-8">Únete a FBT Functional Body Training y descubre tu verdadero potencial</p>
        <ReusableButton onClick={handleButtonClick}>
          ¡Empieza ahora!
        </ReusableButton>
      </div>
    </div>
  );
};

export default Banner;

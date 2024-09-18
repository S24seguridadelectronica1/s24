import React, { useState } from 'react';
import ReusableButton from './ReusableButton'; // Asegúrate de que la ruta es correcta
import SignupForm from './SignupForm'; // Asegúrate de que la ruta es correcta

const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Transforma tu cuerpo, mejora tu vida</h2>
        <p className="text-xl mb-8">Únete a FBT Functional Body Training y descubre tu verdadero potencial</p>
        <ReusableButton onClick={handleShowForm}>
          ¡Empieza ahora!
        </ReusableButton>
        {showForm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <SignupForm />
              <button
                onClick={handleCloseForm}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;

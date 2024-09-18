import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import GymImage from './GymImage';
import SignupForm from './SignupForm'; // Asegúrate de que la ruta es correcta

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <GymImage onClick={handleShowForm} />
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Bienvenido a FBT Functional Body Training</h2>
        <p className="mb-4">Transforma tu cuerpo y mejora tu salud con nuestro entrenamiento funcional personalizado.</p>
      </main>
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
  );
};

export default App;

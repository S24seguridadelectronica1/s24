import React from 'react';
import Header from './Header';
import Banner from './Banner';
import GymImage from './GymImage';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Bienvenido a FBT Functional Body Training</h2>
        <p className="mb-4">Transforma tu cuerpo y mejora tu salud con nuestro entrenamiento funcional personalizado.</p>
        <GymImage />
      </main>
    </div>
  );
};

export default App;
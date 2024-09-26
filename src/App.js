import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Banner from './Banner';
import Register from './Register';
import ImagenA from './ImagenA'; // Importa el nuevo componente
import supabase from './supabase/supabaseClient';
import ReusableButton from './ReusableButton';
import Footer from './Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      }
    };

    checkSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <ImagenA 
  texto="pago contraentrega ." 
  imagenSrc={`${process.env.PUBLIC_URL}/1.png`}
  altTexto="Descripción de la imagen"
/>
      <Banner />
      
      <nav className="container mx-auto px-4 py-4">
        {isAuthenticated ? (
          <ReusableButton onClick={handleLogout} className="ml-4 text-red-600">
            Cerrar Sesión
          </ReusableButton>
        ) : null /* El botón "Registrarse" ha sido eliminado */}
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Register /> {/* El formulario de registro siempre está visible */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

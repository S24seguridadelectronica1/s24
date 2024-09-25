import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import GymImage from './GymImage';
import Register from './Register';
import supabase from './supabase/supabaseClient';
import ReusableButton from './ReusableButton';

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
      <GymImage />
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
    </div>
  );
};

export default App;

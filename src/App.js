import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import supabase from './supabase/supabaseClient';
import Banner from './Banner';
import Footer from './Footer';
import VisionNocturna from './VisionNocturna'; 
import UbicacionVisita from './UbicacionVisita';
import Catalogos from './Catalogos';
import Carrusel from './Carrusel';
import EligeS24 from './EligeS24';
import Contrate from './Contrate';
import SeguridadElectronica from './SeguridadElectronica';
import WhatsAppButton from './WhatsAppButton';
import Maps from './Maps';

const App = () => {
  const registerRef = useRef(null);

  const scrollToRegister = () => {
    if (registerRef.current) {
      registerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Agregar useEffect para registrar cada visita
  useEffect(() => {
    const logVisit = async () => {
      const { error } = await supabase
        .from('user_activity')
        .insert([{ section: 'home', timestamp: new Date() }]); // Registro de visita

      if (error) console.error('Error registrando la visita:', error);
    };

    logVisit(); // Llama a la función cuando se carga la página
  }, []);

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <VisionNocturna 
        logoSrc={`${process.env.PUBLIC_URL}/s24.png`} 
        imageSrc={`${process.env.PUBLIC_URL}/111.png`} 
        description={
          <div className="custom-description">
            <p>mantenimiento e instalaciones de todo tipo de equipos de seguridad electrónica: video porteros, controles de acceso, alarmas y cámaras de seguridad en general.</p>
          </div>
        }
        title="¡empresa de integradores de seguridad electrónica en bucaramanga y santander!"
      />

      <Catalogos />

      <EligeS24
        title="¿Por qué elegir a S24 Seguridad Electrónica?"
        phone="304 661 5865"
        imageSrc={`${process.env.PUBLIC_URL}/elije.png`}
      />

      {/* Banner */}
      <Banner 
        title="¡lo último en tecnología!"
        description=""
        buttonText="Ir al Registro"
        scrollToRegister={scrollToRegister}
      />

      <Carrusel 
        images={[
          `${process.env.PUBLIC_URL}/1.png`, 
          `${process.env.PUBLIC_URL}/2.png`, 
          `${process.env.PUBLIC_URL}/3.png`, 
          `${process.env.PUBLIC_URL}/4.png`, 
          `${process.env.PUBLIC_URL}/5.png`, 
          `${process.env.PUBLIC_URL}/6.png`, 
          `${process.env.PUBLIC_URL}/7.png`, 
          `${process.env.PUBLIC_URL}/8.png`, 
          `${process.env.PUBLIC_URL}/9.png`, 
          `${process.env.PUBLIC_URL}/10.png`, 
          `${process.env.PUBLIC_URL}/11.png`, 
          `${process.env.PUBLIC_URL}/12.png`
        ]} 
      />

      <Contrate 
        title="¿Estás pensando en contratar nuestros servicios?"
        description="¡Déjanos tu nombre y número de teléfono, te contactamos hoy mismo!"
        phone="1234567890"
        imageSrc={`${process.env.PUBLIC_URL}/15.png`}
      />

      <UbicacionVisita />
      <SeguridadElectronica />
      <WhatsAppButton />
      <Maps />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

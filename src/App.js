import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';  // No es necesario importar Router aquí
import supabase from './supabase/supabaseClient';
import Banner from './Banner';
import Footer from './Footer';
import VisionNocturna from './VisionNocturna'; 
import Catalogos from './Catalogos';
import Carrusel from './Carrusel';
import EligeS24 from './EligeS24';
import Contrate from './Contrate';
import SeguridadElectronica from './SeguridadElectronica';
import WhatsAppButton from './WhatsAppButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import Showrooms from './Showrooms';
import DS2CE56D0TIRPFochoPrincipal from './kitshikvision/DS2CE56D0TIRPFocho/DS2CE56D0TIRPFochoPrincipal';

// Configura el contenedor del modal
Modal.setAppElement('#root');

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
      <Routes>
        <Route path="/" element={
          <>
            {/* Header */}
            <VisionNocturna 
              logoSrc={`${process.env.PUBLIC_URL}/s24.png`} 
              imageSrc={`${process.env.PUBLIC_URL}/111.png`} 
              description="Venta e instalación"
              title="¡Camaras De Seguridad en Bucaramanga y Santander!" 
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
                `${process.env.PUBLIC_URL}/portadalxts.png`,
                `${process.env.PUBLIC_URL}/2.png`,
                `${process.env.PUBLIC_URL}/3.png`,
                // más imágenes principales...
              ]}
              titles={['Lo último de Hikvision', 'Cámara con botón de llamada de emergencia', 'Título 3', 'Título 4']}
              descriptions={['Cámaras analógicas con audio doble vía + visión nocturna a todo color', 'Reconocimiento de humanos + detección de llanto', 'Descripción 3', 'Descripción 4']}
              secondaryImages={[
                {
                  images: [
                    `${process.env.PUBLIC_URL}/ds-2ce16dot-lxts-1.png`, 
                    `${process.env.PUBLIC_URL}/3.png`,
                    `${process.env.PUBLIC_URL}/3.png`,
                    `${process.env.PUBLIC_URL}/3.png`,
                  ],
                  titles: [
                    'Cámaras Hikvision de Última Generación: Seguridad Avanzada con Audio Bidireccional, Visión a Todo Color y Funciones Inteligentes!',
                    'Título Secundario 2',
                    'Título Secundario 3',
                    'Título Secundario 4'
                  ],
                  descriptions: [
                    'Las nuevas cámaras Hikvision DS-2CE70D0T-PTLXTS y modelos relacionados ofrecen un salto significativo en tecnología de seguridad...',
                    'Una de sus características...',
                    'La cámara también incluye funciones de alarma sonora y luz estroboscópica activa...',
                    'Ideal para hogares, oficinas y negocios que buscan una seguridad eficiente...'
                  ]
                },
              ]}
            />

            <Contrate 
              title="¿Estás pensando en contratar nuestros servicios?"
              description="¡Déjanos tu nombre y número de teléfono, te contactamos hoy mismo!"
              phone="1234567890"
              imageSrc={`${process.env.PUBLIC_URL}/15.png`}
            />

            <SeguridadElectronica />
            <WhatsAppButton />
            <Showrooms />

            {/* Footer */}
            <Footer />
          </>
        }/>

        {/* Ruta adicional */}
        <Route path="/DS2CE56D0TIRPF-kit-ocho-camaras" element={<DS2CE56D0TIRPFochoPrincipal />} />
      </Routes>
    </div>
  );
};

export default App;

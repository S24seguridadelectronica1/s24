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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';

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
      {/* Header */}
      <VisionNocturna 
        logoSrc={`${process.env.PUBLIC_URL}/s24.png`} 
        imageSrc={`${process.env.PUBLIC_URL}/111.png`} 
        description={
          <div className="custom-description">
            <p>mantenimiento e instalaciones de todo tipo de equipos de seguridad electrónica: video porteros, controles de acceso, alarmas y cámaras de seguridad en general.</p>
          </div>
        }
        title="¡Integradores de seguridad electrónica en bucaramanga y santander!"
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
    `${process.env.PUBLIC_URL}/3.png`,
    `${process.env.PUBLIC_URL}/3.png`,
    // más imágenes principales...
  ]}
  titles={['Lo ultimo de Hikvision', 'camara con boton de llamada de emergencia', 'Título 3', 'Título 4']}
  descriptions={['camaras analogas con audio doble via + vision nocturna a todo color', 'reconocimiento de humanos + detecion de llanto ', 'Descripción 3', 'Descripción 4']}

  secondaryImages={[ 
    {
      images: [
        `${process.env.PUBLIC_URL}/ds- 2ce16dot-lxts-1.png`,
        `${process.env.PUBLIC_URL}/3.png`,
        `${process.env.PUBLIC_URL}/3.png`,
        `${process.env.PUBLIC_URL}/3.png`,
      ],
      titles: ['Cámaras Hikvision de Última Generación: Seguridad Avanzada con Audio Bidireccional, Visión a Todo Color y Funciones Inteligentes!', 'Título Secundario 2', 'Título Secundario 3', 'Título Secundario 4'],
      descriptions: [
        'Las nuevas cámaras Hikvision DS-2CE70D0T-PTLXTS y modelos relacionados ofrecen un salto significativo en tecnología de seguridad. Equipadas con una resolución de 2 MP (1920x1080) y lente focal fija de 2.8 mm y 3.6 mm, estas cámaras garantizan imágenes de alta calidad en todo momento. Con una distancia de visión nocturna de hasta 25 metros, gracias a su tecnología IR y luz blanca, ofrecen una visibilidad brillante en condiciones de baja luz.',
        
        'Una de sus características destacadas es el audio bidireccional, permitiendo comunicación en tiempo real a través de micrófono y altavoz incorporados. Además, la tecnología Smart-Hybrid Light optimiza la iluminación para mejorar la seguridad durante el día y la noche.',
        
        'La cámara también incluye funciones de alarma sonora y luz estroboscópica activa, lo que proporciona una capa adicional de protección y disuasión frente a posibles intrusos. Con su diseño robusto y funcionalidad avanzada, estas cámaras son ideales para quienes buscan una solución integral de videovigilancia, con opciones de conectividad mediante cable coaxial para una transmisión de audio y video de alta calidad.',
        
        'Ideal para hogares, oficinas y negocios que buscan una seguridad eficiente y fácil de instalar, las cámaras Hikvision ofrecen una solución perfecta tanto para quienes buscan protección como para quienes desean optimizar su sistema de CCTV con lo último en tecnología de seguridad.', 'Descripción Secundaria 2', 'Descripción Secundaria 3', 'Descripción Secundaria 4'],
    },
    {
      images: [
        `${process.env.PUBLIC_URL}/21.png`,
        `${process.env.PUBLIC_URL}/22.png`,
        `${process.env.PUBLIC_URL}/23.png`,
        `${process.env.PUBLIC_URL}/24.png`,
      ],
      titles: ['Título Secundario 1', 'Título Secundario 2', 'Título Secundario 3', 'Título Secundario 4'],
      descriptions: ['Descripción Secundaria 1', 'Descripción Secundaria 2', 'Descripción Secundaria 3', 'Descripción Secundaria 4'],
    },
    {
      images: [
        `${process.env.PUBLIC_URL}/31.png`,
        `${process.env.PUBLIC_URL}/32.png`,
        `${process.env.PUBLIC_URL}/33.png`,
        `${process.env.PUBLIC_URL}/34.png`,
      ],
      titles: ['Título Secundario 1', 'Título Secundario 2', 'Título Secundario 3', 'Título Secundario 4'],
      descriptions: ['Descripción Secundaria 1', 'Descripción Secundaria 2', 'Descripción Secundaria 3', 'Descripción Secundaria 4'],
    },
    // más objetos con imágenes secundarias...
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

import React from 'react';
import ComponenteA from './componenteA';
import './ComponenteA.css'; // Asegúrate de importar el archivo CSS
import ComprarButton from './ComprarButton';



const DS2CE56D0TIRPFochoPrincipal = () => {
  return (
    <div>
      <ComponenteA>
        <h1 className="componenteA-title">¡Page en la puerta de su casa!</h1>
        <h2 className="componenteA-subtitle">Envío gratis + pago contraentrega solo para Bucaramanga y su área metropolitana</h2>
        <div className="componenteA-layout">
          <img 
            className="componenteA-img"
            src={`${process.env.PUBLIC_URL}/showroms.png`} 
            alt="Imagen de la cámara DS-2CE56D0T-IRPFocho" 
          />
          <ul className="componenteA-list">
            <li><strong>Kit de 8 cámaras Turbo HD 1080p de Hikvision:</strong></li>
            <li>8 cámaras de 2MPx</li>
            <li>1 DVR de 8 canales de 4MPx Lite</li>
            <li>1 disco duro de 1 terabyte</li>
            <li>8 fuentes de energía</li>
            <li>8 video baluns</li>
            <li>160 mts de cable UTP</li>
            <li className="componenteA-price"><strong>Precio Final: $700,000</strong></li>
          </ul>
        </div>
        <ComprarButton />

      </ComponenteA>

      
    
    </div>
  );
};

export default DS2CE56D0TIRPFochoPrincipal;
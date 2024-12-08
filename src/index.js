import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import './index.css'; // Asegúrate de que este archivo CSS esté importado
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* Cambié 'Router' por 'BrowserRouter' */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>S24 Seguridad Electrónica</p>
      <p>Bucaramanga, Colombia</p>
      <p>
        Tel: 
        <a href="tel:3046615865" className="text-blue-400 hover:underline ml-1">
          📞 3046615865
        </a>
      </p>
    </footer>
  );
};

export default Footer;

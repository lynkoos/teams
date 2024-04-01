import React, { useEffect, useState } from 'react';
import { PiWifiSlash } from "react-icons/pi";
import './coneccion.css';

const ConectionScreen = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const getLogoFromLocalStorage = () => {
      try {
        const storedLogo = localStorage.getItem('uTCHazialICA');
        if (storedLogo) {
          setLogoUrl(storedLogo);
        }
      } catch (error) {
        console.error('Error al obtener el logo del localStorage:', error);
      }
    };

    getLogoFromLocalStorage();
  }, []);

  return (
    <div className="connection-screen">
        <div className="logo-container">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="logo"
            />
          )}
          <div className="wifi-icon-container">
            <PiWifiSlash className="wifi-icon" />
          </div>
        </div>
      <div className="content">
        <h1 className="connection-screen-heading">Sin conexión a Internet</h1>
        <p className="connection-screen-text">
          Por favor, verifica tu conexión a Internet e intenta nuevamente.
        </p>
      </div>
    </div>
  );
};

export default ConectionScreen;

import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import logoImage from '../../layout/login/img/logo.png';

const LoadingScreen = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const getImageAsBase64 = async () => {
      try {
        const response = await fetch(logoImage);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Data = reader.result;
          localStorage.setItem('uTCHazialICA', base64Data);
          setLogoUrl(base64Data);
        };
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
    };

    const logoData = localStorage.getItem('logo');
    if (logoData) {
      setLogoUrl(logoData);
    } else {
      getImageAsBase64();
    }
  }, []);

  return (
    <div className="loading-screen">
      <div className="logo-container">
        {logoUrl && <img src={logoUrl} alt="Logo" className="logo" />}
      </div>
      <div className="loader-container">
        <div className="loader"></div>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

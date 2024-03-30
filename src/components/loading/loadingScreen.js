import React from 'react';
import './LoadingScreen.css';
import ImgLogo from '../../layout/login/img/logo.png';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={ImgLogo} alt="Logo" className="logo" />
      </div>
      <div className="loader-container">
        <div className="loader"></div>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

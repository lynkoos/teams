import React, { useState, useEffect } from 'react';
import Login from './layout/login/index';
import IndexHome from './layout/home/index';
import LoadingScreen from './components/loading/loadingScreen';
import ConectionScreen from './components/coneccion/coneccion';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (authenticatedUser) {
      setIsLoggedIn(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }

    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('authenticatedUser', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authenticatedUser');
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn && !isOnline) {
    return <ConectionScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {isLoading && <LoadingScreen />}
      {!isLoggedIn && !isLoading && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && <IndexHome onLogout={handleLogout} />}
    </div>
  );
}

export default App;

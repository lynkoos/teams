import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/loading/loadingScreen';
import IndexHome from './layout/home/index';
import Login from './layout/login/index';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const RSonOrGeRaDjuPeRAChaBStR = localStorage.getItem('RSonOrGeRaDjuPeRAChaBStR');
    if (RSonOrGeRaDjuPeRAChaBStR) {
      setIsLoggedIn(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('RSonOrGeRaDjuPeRAChaBStR', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('RSonOrGeRaDjuPeRAChaBStR');
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoggedIn]);

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
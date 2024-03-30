import React, { useState, useEffect } from 'react';
import Login from './layout/login/index';
import IndexHome from './layout/home/index';
import LoadingScreen from './components/loading/loadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authenticatedUser = localStorage.getItem('authenticatedUser');
    if (authenticatedUser) {
      setIsLoggedIn(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('authenticatedUser', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authenticatedUser');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && <IndexHome onLogout={handleLogout} />}
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexHome from './layout/home';
import SlashHome from './layout/slash';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SlashHome />} />
        <Route path="/home" element={<IndexHome />} />
      </Routes>
    </Router>
  );
}

export default App;
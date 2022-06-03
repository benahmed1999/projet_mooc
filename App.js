import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import PageConnexion from './pages/Connexion';
import Imc_calc from './pages/Imc';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/connexion" element={<PageConnexion />} />
        <Route path="/imc" element={<Imc_calc />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;

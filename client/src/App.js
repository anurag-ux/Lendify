import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/whitepaper' element={<HowItWorks />} />
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

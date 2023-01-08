import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer/footer';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/whitepaper' element={<HowItWorks/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

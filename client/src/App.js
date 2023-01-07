import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer/footer';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

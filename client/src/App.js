import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks'
import Dashboard from './pages/Dashboard';
import Signup from './components/SignupComponent/Singup';
import LoginComponent from './components/LoginComponent/LoginComponent';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/whitepaper' element={<HowItWorks />} />
        <Route exact path='/login' element={<Dashboard/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

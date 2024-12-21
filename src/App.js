import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';  
import Home from './components/home';
import Facilities from './components/facilities';
import Room from './components/room';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

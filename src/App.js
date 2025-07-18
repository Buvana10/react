import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/navbar/index.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Details from './components/Details/Details.jsx';
import Course from './components/Course/Course.jsx';

function App() {
 return(
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </Router>
 );
}

export default App;

import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App () {
    return (
      <BrowserRouter basename="/">
          <Nav />
            <Routes>
            <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/resume" element={<Resume/>} />
              <Route exact path="/contact" element={<Contact/> }  />
              <Route exact path="/portfolio" element={<Projects/>} />
            </Routes>
          <Footer />
      </BrowserRouter>
    );
  }

export default App;
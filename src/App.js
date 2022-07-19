import React from 'react';
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
              <Route exact path="/The-BatMatt-Reaction/" element={<Home/>} />
              <Route exact path="/The-BatMatt-Reaction/about" element={<About/>} />
              <Route exact path="/The-BatMatt-Reaction/resume" element={<Resume/>} />
              <Route exact path="/The-BatMatt-Reaction/contact" element={<Contact/> }  />
              <Route exact path="/The-BatMatt-Reaction/portfolio" element={<Projects/>} />
            </Routes>
          <Footer />
      </BrowserRouter>
    );
  }

export default App;
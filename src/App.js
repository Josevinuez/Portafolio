import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;


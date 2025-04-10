// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/synthera-logo.png" alt="Synthera Logo" className="logo-image" />
      <h2 className="logo-text">Synthera</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="title">Welcome to Synthera 🌱</h1>
        <p className="description">
          Empowering a sustainable future through innovation and collaboration.
        </p>
        <a href="#projects" className="cta-button">Explore Projects</a>
      </div>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      name: 'Sustainable Agriculture',
      desc: 'Enhancing food security through smart agricultural practices.',
    },
    {
      name: 'Water Body Restoration',
      desc: 'Reviving ecosystems and purifying local water sources.',
    },
    {
      name: 'Green Tech Innovation',
      desc: 'Building scalable solutions to reduce environmental footprints.',
    },
    {
      name: 'Waste Collector Empowerment',
      desc: 'Supporting local heroes in waste management systems.',
    },
    {
      name: 'Water Management',
      desc: 'Innovating solutions for equitable and efficient water use.',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Synthera. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;

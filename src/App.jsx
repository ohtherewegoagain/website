// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <section className="hero">
          <h1 className="title">Welcome to Synthera 🌱</h1>
          <p className="description">
            Empowering a sustainable future through innovation and collaboration.
          </p>
        </section>
        <Projects />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Synthera</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
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
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Our Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;

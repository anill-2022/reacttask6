import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>ANIL CHIRLA</h1>
        <p>IoT Specialist,Web Developer</p>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        <b>Related to SQL and python</b>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <b>Python,C++,HTML,CSS,JavaScript,ReactJS,MongoDB
        </b>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <b>Worked as Core Member in VITMAS Club</b>
      </section>
      <section className="education">
        <h2>Education</h2>
        <b>B.Tech with specilization in Internet of Things</b>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <b>Email:anilchirla1@gmail.com</b>
      </section>
    </div>
  );
};

export default App;
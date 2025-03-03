import React from 'react';
import './style.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="assets/image/about.png" alt="about" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <p>
        Informatics Engineering graduate with experience in backend development and data science. Expertise in building systems
        using Flask and Laravel, and performing data analysis with Python. Experienced in developing chatbots based on Natural
        Language Processing and building information systems using Laravel. Interested in REST API development, database
        management, and machine learning implementation for data-driven applications. Passionate about learning the newest
        technologies and applying them to innovative projects.
        </p>
      </div>
    </section>
  );
};

export default About;
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
          Innovative Freelance Front-End Developer with 3+ Years at Upwork
          Seeking New Challenges | Bachelor of Informatics Grad | Proficient in
          HTML, CSS, JS, PHP, MongoDB, Express.js, React, Node.js | Eager to
          Bring Problem-Solving and Critical Thinking Skills to Your Team.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;
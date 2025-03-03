import React from 'react';
import './style.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-container">
        <div className="skills-box">
          <i className="bx bx-code-alt"></i>
          <h3>Backend End</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet
            atque voluptate saepe magni aspernatur id nemo quasi quibusdam
            ratione.
          </p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="skills-box">
          <i className="bx bx-data"></i>
          <h3>Data Science</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet
            atque voluptate saepe magni aspernatur id nemo quasi quibusdam
            ratione.
          </p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
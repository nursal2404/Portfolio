import React from 'react';
import './style.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">My <span>Project</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="assets/image/backend.jpg" alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Backend</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, nihil.
            </p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="assets/image/datascience.jpeg" alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Data Science</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, nihil.
            </p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="assets/image/dummy.png" alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Dummy Project</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, nihil.
            </p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        {/* Repeat for other portfolio items */}
      </div>
    </section>
  );
};

export default Portfolio;
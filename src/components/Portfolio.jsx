import React from 'react';
import './style.css';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="assets/image/img2.png" alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, nihil.
            </p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="assets/image/img2.png" alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, nihil.
            </p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src="assets/image/img2.png" alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
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
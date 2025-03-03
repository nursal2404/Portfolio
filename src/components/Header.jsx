import React, { useState, useEffect } from 'react';
import './style.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">Nursal<span>Dev</span></a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
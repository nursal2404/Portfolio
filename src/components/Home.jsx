import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './style.css';

const Home = () => {
  // Ref untuk elemen yang akan diisi oleh Typed.js
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Konfigurasi Typed.js
    const options = {
      strings: ["Backend Developer", "Data Science"],
      typeSpeed: 100, // Kecepatan mengetik
      backSpeed: 100, // Kecepatan menghapus
      backDelay: 1000, // Delay sebelum menghapus
      loop: true, // Loop animasi
    };

    // Inisialisasi Typed.js
    const typed = new Typed(typedTextRef.current, options);

    // Bersihkan instance Typed.js saat komponen di-unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Muhadzib Nursaid</h1>
        <h3>
          And I'm a <span ref={typedTextRef} className="multiple-text"></span>
        </h3>
        <div className="social-media">
          <a href=""><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/muhadzib_24/"><i className="bx bxl-instagram-alt"></i></a>
          <a href="https://www.linkedin.com/in/muhadzib-nursaid"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <div className="home-img">
        <img src="assets/image/home.png" alt="home" />
      </div>
    </section>
  );
};

export default Home;
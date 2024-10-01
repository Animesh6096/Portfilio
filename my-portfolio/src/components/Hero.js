import React from 'react';
import './Hero.css';
import animeshImage from '../assets/Animesh1.png'; // Adjust the path if needed

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={animeshImage} alt="Animesh Bhattacharjee" className="hero-image" />
        <h1>Animesh Bhattacharjee</h1>
        <p>Frontend Developer</p>
      </div>
    </section>
  );
};

export default Hero;

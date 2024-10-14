import React, { useEffect } from 'react';
import './Hero.css';
import animeshImage from '../assets/Animesh1.png'; // Adjust the path if needed


const HeroSection = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src={animeshImage} alt="Animesh Bhattacharjee" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm Animesh Bhattacharjee</h1>
          <p>
            I'm a Full-Stack Developer with a passion for Machine Learning and Data Science.
            I build impactful software solutions and have hands-on experience with the latest technologies.
          </p>
          <button className="view-cv-btn" onClick={() => window.open('https://www.linkedin.com/in/animesh-bhattacharjee-jhalok/overlay/1717531218603/single-media-viewer?type=DOCUMENT&profileId=ACoAAD5PKpcBWaIDwD3JzwI304qMmdWhSnFl-Qg&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bas%2Fwt9eUS8mzq4dGRp6fag%3D%3D', '_blank')}>
            View CV
          </button>
          <button className="contact-btn" onClick={() => window.location.href = '#contact'}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

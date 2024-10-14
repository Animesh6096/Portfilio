import React, { useEffect } from 'react';
import './Hero.css';
import animeshImage from '../assets/Animesh1.png'; // Adjust the path if needed

const HeroSection = () => {
  // Apply scroll animation using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated'); // Add 'animated' class when in view
        } else {
          entry.target.classList.remove('animated'); // Remove 'animated' class when out of view (optional)
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
    <section className="hero-section animate-on-scroll">
      <div className="hero-content animate-on-scroll">
        <div className="hero-image">
          <img src={animeshImage} alt="Animesh Bhattacharjee" />
        </div>
        <div className="hero-text">
          <h1 className="animate-on-scroll">Hi, I'm Animesh Bhattacharjee</h1>
          <p className="animate-on-scroll">
            I'm a Full-Stack Developer with a passion for Machine Learning and Data Science.
            I build impactful software solutions and have hands-on experience with the latest technologies.
          </p>
          <button className="view-cv-btn animate-on-scroll" onClick={() => window.open('https://www.linkedin.com/in/animesh-bhattacharjee-jhalok/overlay/1717531218603/single-media-viewer?type=DOCUMENT&profileId=ACoAAD5PKpcBWaIDwD3JzwI304qMmdWhSnFl-Qg&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bas%2Fwt9eUS8mzq4dGRp6fag%3D%3D', '_blank')}>
            View CV
          </button>
          <button className="contact-btn animate-on-scroll" onClick={() => window.location.href = '#contact'}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

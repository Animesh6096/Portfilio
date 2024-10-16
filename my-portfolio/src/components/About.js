import React from 'react';
import './About.css';
import animeshImage from '../assets/1728931117098-removebg-preview.png'; // Ensure this path is correct
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Import the custom hook

const About = () => {
  useScrollAnimation(); // Use the hook to trigger animations

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* About Text */}
        <div className="about-text animate-on-scroll">
          <h2>About Me</h2>
          <p>
            I’m Animesh Bhattacharjee, a passionate Full-Stack Developer with expertise in Machine Learning and Data Science.
            I strive to create impactful software solutions and have a keen interest in working with the latest technologies.
          </p>
        </div>

        {/* About Image */}
        <div className="about-image animate-on-scroll">
          <img src={animeshImage} alt="Animesh Bhattacharjee" />
        </div>
      </div>
    </section>
  );
};

export default About;

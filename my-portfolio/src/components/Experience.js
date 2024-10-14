import React from 'react';
import './Experience.css';
import officeGraphic from '../assets/office_work.jpeg';
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Import the custom hook

const experiences = [
  {
    id: 1,
    title: 'QA and Content Manager',
    company: 'Nyntax',
    duration: 'April 2021 - Present',
    description: 'Managing quality assurance for web projects and overseeing content strategy and delivery across platforms.',
  },
];

const Experience = () => {
  useScrollAnimation(); // Use the hook to trigger animations

  return (
    <section id="experience" className="experience-section section">
      <h2 className="animate-on-scroll">Experience</h2>
      <div className="experience-container animate-on-scroll">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-graphic">
              <img src={officeGraphic} alt="Office work illustration" />
            </div>
            <div className="experience-content">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p className="duration">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-dots animate-on-scroll">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
};

export default Experience;

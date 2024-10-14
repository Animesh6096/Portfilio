// Navigation.js
import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <ul>
        {['about', 'experience', 'projects', 'contact'].map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

import React, { useEffect } from 'react';
import './Navigation.css'; // Assuming this is your navigation CSS file

const Navigation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav-bar');
      if (window.scrollY > 100) {  // When the user scrolls down 100px or more
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav-bar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

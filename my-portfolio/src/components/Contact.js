import React, { useEffect } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
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
    <section id="contact" className="contact-section animate-on-scroll">
      <div className="contact-content">
        <h2 className="animate-on-scroll">Get In Touch</h2>
        <p className="contact-intro animate-on-scroll">
          Feel free to reach out to me through any of the channels below.
        </p>

        <div className="contact-info animate-on-scroll">
          <a href="tel:+8801781836541" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaPhone className="contact-icon" />
            <span>+8801781836541</span>
          </a>
          <a href="mailto:animesh.bhattacharjee@g.bracu.ac.bd" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
            <span>Academic Mail</span>
          </a>
          <a href="mailto:animesh.bhattacharjee.jhalok@gmail.com" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
            <span>Business Mail</span>
          </a>
          <a href="https://www.linkedin.com/in/animesh-bhattacharjee-jhalok/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Animesh6096" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a href="https://www.facebook.com/animeshbhattacharjee6096" className="contact-item" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="contact-icon" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

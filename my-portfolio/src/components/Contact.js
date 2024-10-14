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
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+8801781836541">+8801781836541</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:animesh.bhattacharjee@g.bracu.ac.bd">Academic Mail</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:animesh.bhattacharjee.jhalok@gmail.com">Business Mail</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.inkedin.com/in/animesh-bhattacharjee-jhalok/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/Animesh6096" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="contact-item">
            <FaFacebook className="contact-icon" />
            <a href="https://www.facebook.com/animeshbhattacharjee6096" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

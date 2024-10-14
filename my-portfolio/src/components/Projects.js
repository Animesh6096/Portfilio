import React from 'react';
import './Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Import the custom hook

const projects = [
  {
    id: 1,
    title: 'Zoey Travel',
    description: 'Revolutionizing tourism with a seamless platform connecting tourists and local vendors.',
    link: '#', // Update with actual project link
    image: require('../assets/office_work.jpeg'), // Update with actual image path
  },
  {
    id: 2,
    title: 'Softcar',
    description: 'A complete solution for renting and managing cars via Flutter mobile apps and a React web app for the admin dashboard.',
    link: '#', // Update with actual project link
    image: require('../assets/office_work.jpeg'), // Update with actual image path
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3.',
    link: '#', // Update with actual project link
    image: require('../assets/office_work.jpeg'), // Update with actual image path
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4.',
    link: '#', // Update with actual project link
    image: require('../assets/office_work.jpeg'), // Update with actual image path
  },
];

const Projects = () => {
  useScrollAnimation(); // Use the hook to trigger animations

  return (
    <section id="projects" className="projects-section">
      <h2 className="animate-on-scroll">Our Projects</h2>
      <div className="projects-container animate-on-scroll">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                className="view-project-btn"
                onClick={() => window.location.href = project.link}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

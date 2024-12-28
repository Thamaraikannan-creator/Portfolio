import React from 'react';
import '../styles/Project.css';

function Projects() {

  const projects = [
    {
      title: 'Pharmacy Management System',
      description: 'This Python program implements a login screen and a main application window.The main window allows users to add new tablets with details like name,quantity,price and rack number,which are stored in a text file database ',
      techStack: ['Python'],
      githubLink: 'https://github.com/yourusername/project-one',
      image:'https://www.pythonbd.com/static/pythonbd/media/images/service/1_rfeggXW_4bO-LHjW1BD-gQ.jpeg'
    },
    {
      title: 'Python Snake Game',
      description: ' The main controller that runs the game loop. It initializes and connects all parts of the game (snake, food, display, input handling), checks for collisions, and updates the game state.',
      techStack: ['Python'],
      githubLink: 'https://github.com/yourusername/project-two',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4aqL7y7EPj3t0S3on_-L8LW3hZ34VQlMWw&s',
    },
    {
      title: 'Ecommerce',
      description: ' The main controller that runs the game loop. It initializes and connects all parts of the game (snake, food, display, input handling), checks for collisions, and updates the game state.',
      techStack: ['React'],
      githubLink: 'https://github.com/yourusername/project-two',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmgXPsoHfyiWiYftBFXTMlv4ek3xe3KkZVQ&s'
    },
    // Add more projects as needed
  ];

  return (
    <section id='pro' className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="proimg">
           <img src={project.image} alt={project.title} /></div>
            <div className="project-links">
             <button> <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></button>
            </div>
          </div>
        ))}
      </div>

    </section>
  
  );
}

export default Projects;

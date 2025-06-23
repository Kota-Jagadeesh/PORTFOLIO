import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Letterboxd 🌟',
      description: 'A React and Next.js web app for movie ratings and watchlists 🎥. Features include user authentication, movie search, rating system, and personalized recommendations.',
      image: 'LETTERBOXD.jpeg',
      github: 'https://github.com/Kota-Jagadeesh/LetterBoxd.git',
      tech: ['React', 'Next.js', 'JavaScript', 'CSS'],
      status: 'Completed'
    },
    {
      title: 'Pok-Codéx Powered by Flutter! 🐾🤖',
      description: 'A modern, feature-rich Pokédex app built with Flutter — search, explore, and manage Pokémons. Catch \'em all! 🌟💬',
      // image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=250&fit=crop',
      image: '/POKE-DEX.webp',
      github: 'https://github.com/Kota-Jagadeesh/Pok-Codex.git',
      tech: ['Flutter', 'Dart', 'API Integration', 'Mobile'],
      status: 'Completed'
    },
    {
      title: 'Jagadeesh.codes — My Digital Playground 🌐🚀',
      description: 'A personal website built to share my work, skills, and journey in tech. From cool projects to contact info — welcome to my corner of the web! 💼✨',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
      github: 'https://github.com/Kota-Jagadeesh/Kota-Jagadeesh.github.io',
      tech: ['Next.js', 'React', 'JavaScript', 'Python', 'HTML', 'CSS'],
      status: 'Live'
    }

  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View on GitHub 🔗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="JAGADEESH.png"
              alt="Jagadeesh---Kota" 
              className="about-image"
            />
            <div className="about-image-overlay"></div>
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate B.Tech student specializing in <strong>Artificial Intelligence and Data Science</strong> at 
              Amrita Vishwa Vidyapeetham, Kerala 🌴. As an active member of <strong>amFOSS</strong> 💻, 
              I contribute to open-source projects and collaborate on innovative solutions that make a difference.
            </p>
            <p className="about-paragraph">
              My journey in technology is driven by curiosity and the desire to solve real-world problems. 
              I have hands-on experience in <strong>Machine Learning</strong>, <strong>Web Development</strong>, 
              and <strong>Mobile App Development</strong> 📱, with a goal to create impactful technologies 
              that improve people's lives 🌟.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎓</span>
                <span className="highlight-text">AI & Data Science Student</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💻</span>
                <span className="highlight-text">amFOSS Member</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">Innovation Enthusiast</span>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Connect 📩
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
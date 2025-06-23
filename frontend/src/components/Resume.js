import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-header">
              <div className="resume-avatar">
                <img 
                  src="/man2.png" 
                  alt="Resume Avatar"
                />
              </div>
              <div className="resume-title">
                <h3>Jagadeesh Kota</h3>
                <p>AI & Data Science Student | Developer</p>
              </div>
            </div>
            
            <div className="resume-section">
              <h4>Quick Overview</h4>
              <div className="resume-overview">
                <div className="overview-item">
                  <span className="overview-icon">🎓</span>
                  <div>
                    <strong>Education:</strong> B.Tech in AI & Data Science, Amrita Vishwa Vidyapeetham (2025–Present)
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">🛠️</span>
                  <div>
                    <strong>Skills:</strong> Python, React, JavaScript, Flutter, Machine Learning
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">💻</span>
                  <div>
                    <strong>Experience:</strong> Active Member @amFOSS, Open Source Contributor
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">🌟</span>
                  <div>
                    <strong>Interests:</strong> AI, Data Science, Web Development, Mobile App Development
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="resume-actions">
            <p className="resume-description">
              Download my complete resume to explore my education, skills, projects, and experience in detail 🌟
            </p>
            <div className="resume-buttons">
              <a 
                href="/RESUME1.pdf" 
                download 
                className="btn-primary download-btn"
              >
                <span className="btn-icon">⬇️</span>
                Download PDF Resume
              </a>
              <button 
                onClick={() => window.print()}
                className="btn-secondary print-btn"
              >
                <span className="btn-icon">🖨️</span>
                Print Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
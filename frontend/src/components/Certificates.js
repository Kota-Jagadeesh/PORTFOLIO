import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>
        <div className="certificates-content">
          <div className="coming-soon-container">
            <div className="coming-soon-icon">🎓</div>
            <h3 className="coming-soon-title">Certificates Coming Soon!</h3>
            <p className="coming-soon-description">
              I'm currently working on various certifications and will update this section soon with my achievements in:
            </p>
            <div className="upcoming-certs">
              <div className="cert-category">
                <span className="cert-icon">🐍</span>
                <span className="cert-name">Python Certification</span>
              </div>
              <div className="cert-category">
                <span className="cert-icon">⚛️</span>
                <span className="cert-name">React Development</span>
              </div>
              <div className="cert-category">
                <span className="cert-icon">🤖</span>
                <span className="cert-name">Machine Learning</span>
              </div>
              <div className="cert-category">
                <span className="cert-icon">📊</span>
                <span className="cert-name">Data Science</span>
              </div>
            </div>
            <div className="progress-indicator">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '65%'}}></div>
              </div>
              <span className="progress-text">65% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
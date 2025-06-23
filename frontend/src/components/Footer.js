import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">
                <span className="logo-text">VoidRaven</span>
                <span className="logo-icon">🌟</span>
              </h3>
              <p className="footer-tagline">
                Building the future with code, one project at a time.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">Quick Links</h4>
                <div className="footer-nav">
                  <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                    About
                  </button>
                  <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    Projects
                  </button>
                  <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
                    Skills
                  </button>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Contact
                  </button>
                </div>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">Connect</h4>
                <div className="footer-social">
                  <a 
                    href="https://github.com/Kota-Jagadeesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">🐙</span>
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jagadeeshwar-reddy-kota-48673a334" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:kota.jagadesh123@gmail.com"
                    className="social-link"
                  >
                    <span className="social-icon">📧</span>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© {currentYear} Jagadeesh Kota. All Rights Reserved.</p>
              <p className="footer-subtitle">Made with ❤️ and lots of ☕</p>
            </div>
            <div className="footer-status">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
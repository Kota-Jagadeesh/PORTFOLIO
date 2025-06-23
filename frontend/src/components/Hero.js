import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Heyooo, I'm Jagadeesh Kota 👋",
    "Crafting code @ amFOSS 💻",
    "AI • DS • Open Source 🚀 🌟"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = texts[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src="/me.png"
            alt="Jagadeesh Kota" 
            className="hero-image"
          />
          <div className="hero-image-glow"></div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle">
            B.Tech AI & Data Science Student | amFOSS Member | Open Source Enthusiast
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Months Coding</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">350+</span>
              <span className="stat-label">Commits</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work 🚀
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch 📩
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
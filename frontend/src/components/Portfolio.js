import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';
import Resume from './Resume';
import Timeline from './Timeline';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'personal', 'projects', 'skills', 'certificates', 'resume', 'timeline', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <div className="animated-background"></div>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <PersonalInfo />
      <Projects />
      <Skills />
      <Certificates />
      <Resume />
      <Timeline />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Portfolio;
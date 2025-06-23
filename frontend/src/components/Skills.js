import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      name: 'Python ',
      level: 60,
      icon: '🐍',
      color: 'from-yellow-400 to-green-500'
    },
    {
      name: 'React & Next.js ',
      level: 40,
      icon: '⚛️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Flutter 📱',
      level: 30,
      icon: '💙',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'JavaScript ',
      level: 55,
      icon: '⚙️',
      color: 'from-yellow-300 to-orange-500'
    },
    // {
    //   name: 'Data Science 📊',
    //   level: 70,
    //   icon: '📊',
    //   color: 'from-purple-400 to-pink-500'
    // },
    // {
    //   name: 'Machine Learning 🤖',
    //   level: 65,
    //   icon: '🤖',
    //   color: 'from-red-400 to-pink-500'
    // }
    {
      name: 'Html  ',
      level: 60,
      icon: '🌐',
      color: 'from-red-300 to-blue-500'
    },
    {
      name: 'Css  ',
      level: 60,
      icon: '🎨',
      color: 'from-green-300 to-voilet-500'
    },
    {
      name: ' Java ',
      level: 50,
      icon: '☕',
      color: 'from-blue-300 to-green-500'
    },
    {
      name: ' C ',
      level: 35,
      icon: '💻',
      color: 'from-yellow-300 to-blue-500'
    },
    {
      name: ' Flask ',
      level: 40,
      icon: ' ⚗️',
      color: 'from-blue-300 to-green-500'
    },
    {
      name: 'TypeScript ',
      level: 35,
      icon: '📘',
      color: 'from-red-300 to-blue-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              
              <div className="skill-progress-container">
                <div className="skill-progress-track">
                  <div 
                    className={`skill-progress-fill bg-gradient-to-r ${skill.color}`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease-in-out 0.3s'
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              
              <div className="skill-description">
                <div className={`skill-level-indicator bg-gradient-to-r ${skill.color}`}>
                  {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      year: '2025',
      title: 'B.Tech - AI & Data Science 🎓',
      institution: 'Amrita Vishwa Vidyapeetham',
      description: 'Currently pursuing B.Tech in Artificial Intelligence and Data Science. Learning advanced concepts in machine learning, deep learning, and data analytics.',
      status: 'current',
      achievements: ['Active amFOSS member', 'Open source contributor', 'Flutter app developer']
    },
    {
      year: '2023',
      title: 'amFOSS Membership 💻',
      institution: 'Free and Open Source Software Club',
      description: 'Joined amFOSS and started contributing to open-source projects. Developed skills in collaborative development and version control.',
      status: 'Current',
      achievements: ['First open source contribution', 'Git/GitHub mastery', 'Team collaboration']
    },
    {
      year: '2022',
      title: 'Programming Journey Begins 🚀',
      institution: 'Self-taught',
      description: 'Started learning programming with Python. Built first projects and discovered passion for software development.',
      status: 'completed',
      achievements: ['Python fundamentals', 'First web app', 'Data structures basics']
    },
    {
      year: '2021',
      title: 'High School Completion 📚',
      institution: 'Andhra Pradesh',
      description: 'Completed high school education with focus on science and mathematics. Developed foundational knowledge for engineering studies.',
      status: 'completed',
      achievements: ['Science excellence', 'Mathematics proficiency', 'Academic discipline']
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">
                  <span className={`year-badge ${item.status}`}>{item.year}</span>
                </div>
                
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-institution">{item.institution}</p>
                  </div>
                  
                  <p className="timeline-description">{item.description}</p>
                  
                  <div className="timeline-achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          <span className="achievement-bullet">✨</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`timeline-status ${item.status}`}>
                    {item.status === 'current' ? '🎯 Current' : '✅ Completed'}
                  </div>
                </div>
                
                <div className="timeline-connector">
                  <div className={`timeline-dot ${item.status}`}>
                    {item.status === 'current' ? '🔥' : '✅'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
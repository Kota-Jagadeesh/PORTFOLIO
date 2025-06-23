import React from 'react';

const PersonalInfo = () => {
  const personalData = [
    {
      icon: '🌍',
      title: 'Origin',
      content: 'Andhra Pradesh, India',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: '🗣️',
      title: 'Languages Known',
      content: 'Telugu, English',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: '🎉',
      title: 'Hobbies',
      content: 'Playing games, Watching Movies, Coding',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="personal" className="section">
      <div className="container">
        <h2 className="section-title">Personal Info</h2>
        <div className="personal-grid">
          {personalData.map((item, index) => (
            <div key={index} className="personal-card">
              <div className={`personal-card-header bg-gradient-to-r ${item.gradient}`}>
                <span className="personal-icon">{item.icon}</span>
                <h3 className="personal-title">{item.title}</h3>
              </div>
              <div className="personal-card-content">
                <p className="personal-content">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
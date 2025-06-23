import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Kota-Jagadeesh',
      icon: '🐙',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jagadeeshwar-reddy-kota',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Email',
      url: 'mailto:kota.jagadesh123@gmail.com',
      icon: '📧',
      color: 'from-red-500 to-red-700'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect! 🤝</h3>
            <p className="contact-description">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or just have a chat about technology and innovation. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>kota.jagadesh123@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">💬</span>
                <div>
                  <h4>Response Time</h4>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4 className="social-title">Find me on:</h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link bg-gradient-to-r ${link.color}`}
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name 👤</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email 📧</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message 💬</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
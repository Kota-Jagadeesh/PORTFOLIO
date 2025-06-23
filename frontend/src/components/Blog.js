import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'My Journey into AI and Data Science 🤖',
      excerpt: 'Exploring the fascinating world of artificial intelligence and data science through my academic journey at Amrita Vishwa Vidyapeetham.',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=250&fit=crop',
      tags: ['AI', 'Data Science', 'Education', 'University']
    },
    {
      id: 2,
      title: 'Building My First Flutter App: Pok-Codéx 🐾',
      excerpt: 'A detailed walkthrough of creating a modern Pokédex app using Flutter, from concept to deployment.',
      date: 'January 10, 2025',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=250&fit=crop',
      tags: ['Flutter', 'Mobile Development', 'Dart', 'API']
    },
    {
      id: 3,
      title: 'Open Source Contributions at amFOSS 💻',
      excerpt: 'My experience contributing to open source projects and the valuable lessons learned along the way.',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Open Source',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop',
      tags: ['Open Source', 'amFOSS', 'Git', 'Collaboration']
    },
    {
      id: 4,
      title: 'React vs Next.js: My Experience ⚛️',
      excerpt: 'Comparing React and Next.js based on my experience building web applications and when to choose each.',
      date: 'December 28, 2024',
      readTime: '7 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      tags: ['React', 'Next.js', 'Web Development', 'JavaScript']
    }
  ];

  const categories = ['All', 'Development', 'Education', 'Open Source', 'Web Development'];

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <header className="blog-header">
        <div className="container">
          <div className="blog-header-content">
            <Link to="/" className="back-link">
              <span className="back-icon">←</span>
              Back to Portfolio
            </Link>
            <h1 className="blog-title">My Blog 📝</h1>
            <p className="blog-subtitle">
              Thoughts, experiences, and insights from my journey in technology and development
            </p>
          </div>
        </div>
      </header>

      {/* Blog Categories */}
      <section className="blog-categories">
        <div className="container">
          <div className="categories-list">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <div className="container">
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-overlay">
                    <span className="blog-category">{post.category}</span>
                  </div>
                </div>
                
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-tags">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <a href="/blog-detail.html" className="read-more-btn">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Footer */}
      <section className="blog-footer">
        <div className="container">
          <div className="blog-footer-content">
            <h3 className="blog-footer-title">Stay Updated 📬</h3>
            <p className="blog-footer-description">
              Subscribe to get notified about new blog posts and updates from my journey!
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
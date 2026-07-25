import React, { useState } from 'react';
import axios from 'axios';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('/api/contact', formData)
      .then(res => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error submitting form:', err);
        setLoading(false);
      });
  };

  return (
    <div className="contact-page">
      <div className="section-badge">
        <span className="badge-dot"></span> Get In Touch
      </div>

      <h1 className="section-title">
        Let's <span className="gradient-text">Work Together</span>
      </h1>

      <p className="section-subtitle">
        Interested in collaborating on mobile applications, software projects, or discussing engineering opportunities? Drop me a message below.
      </p>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info-col">
          <TiltCard className="info-card">
            <div className="icon-wrapper purple">
              <FiMail />
            </div>
            <div className="info-detail">
              <span className="info-label">Direct Email</span>
              <a href="mailto:shawaizali788@gmail.com" className="info-link">
                shawaizali788@gmail.com
              </a>
            </div>
          </TiltCard>

          <TiltCard className="info-card">
            <div className="icon-wrapper cyan">
              <FiGithub />
            </div>
            <div className="info-detail">
              <span className="info-label">GitHub Profile</span>
              <a href="https://github.com/Shawaiz788" target="_blank" rel="noreferrer" className="info-link">
                github.com/Shawaiz788
              </a>
            </div>
          </TiltCard>

          <TiltCard className="info-card">
            <div className="icon-wrapper pink">
              <FiLinkedin />
            </div>
            <div className="info-detail">
              <span className="info-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/shawaiz-ali-rehman-52227427b/" target="_blank" rel="noreferrer" className="info-link">
                shawaiz-ali-rehman
              </a>
            </div>
          </TiltCard>
        </div>

        {/* Contact Form */}
        <TiltCard className="contact-form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-heading">Send a Message</h3>

            {submitted && (
              <div className="success-banner">
                ✨ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name"><FiUser /> Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Shawaiz Ali"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"><FiMail /> Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message"><FiMessageSquare /> Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              <FiSend /> {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </TiltCard>
      </div>

      <style jsx>{`
        .contact-page {
          display: flex;
          flex-direction: column;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
          align-items: start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .info-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 18px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .icon-wrapper {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }

        .icon-wrapper.purple {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .icon-wrapper.cyan {
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-secondary);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .icon-wrapper.pink {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .info-detail {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .info-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .info-link:hover {
          color: var(--accent-primary);
        }

        .contact-form-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 2rem;
        }

        .form-heading {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1.25rem;
        }

        .success-banner {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ade80;
          font-size: 0.875rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          margin-bottom: 1.25rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 0.925rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-indigo);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.25);
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
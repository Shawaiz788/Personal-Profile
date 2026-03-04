import React, { useState } from 'react';
import axios from 'axios';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

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
    <div className="contact-container">
      {/* Animated Background */}
      <div className="background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="code-snippet">{"<Contact />"}</div>
        <div className="code-snippet-2">{"{Let's Talk}"}</div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header */}
        <div className="contact-header">
          <div className="header-badge">
            <span className="dot"></span>
            Get In Touch
          </div>
          
          <h1 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it. 
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="info-section">
            <h2 className="section-title">
              <span className="gradient-text">📬</span> Contact Information
            </h2>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon-wrapper">
                  <FiMail className="info-icon" />
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href="mailto:your.email@example.com" className="info-value">
                    shawaizali788@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <FiMessageSquare className="info-icon" />
                </div>
                <div className="info-content">
                  <span className="info-label">Response Time</span>
                  <span className="info-value">Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="social-title">Follow me</h3>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FiTwitter />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="availability-card">
              <div className="availability-header">
                <span className="status-dot"></span>
                <span className="availability-title">Current Availability</span>
              </div>
              <p className="availability-text">
                I'm currently available for freelance work and full-time opportunities.
                Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-section">
            <div className="form-card">
              <h2 className="form-title">
                <span className="gradient-text">✉️</span> Send a Message
              </h2>

              {submitted && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser className="input-icon" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail className="input-icon" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare className="input-icon" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="button-icon" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map/Location Section */}
        <div className="location-section">
          <div className="location-card">
            <div className="location-pin">📍</div>
            <div className="location-info">
              <span className="location-label">Based in</span>
              <span className="location-value">Your City, Country</span>
            </div>
            <div className="timezone">
              <span className="timezone-label">Timezone</span>
              <span className="timezone-value">GMT+0 (UTC)</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
          background: #0a0a0a;
          color: white;
          overflow: hidden;
          padding: 6rem 2rem;
        }

        /* Animated Background */
        .background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #667eea 0%, transparent 70%);
          top: -200px;
          right: -200px;
          animation: float 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #764ba2 0%, transparent 70%);
          bottom: -150px;
          left: -150px;
          animation: float 15s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #ff6b6b 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 18s ease-in-out infinite;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 2;
        }

        /* Floating Elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 15%;
          left: 10%;
          animation: floatShape 25s linear infinite;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          right: 15%;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: floatShape 20s linear infinite reverse;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 40%;
          right: 25%;
          border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%;
          animation: floatShape 15s linear infinite;
        }

        .code-snippet,
        .code-snippet-2 {
          position: absolute;
          font-family: monospace;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-snippet {
          top: 25%;
          right: 20%;
          animation: float 6s ease-in-out infinite;
        }

        .code-snippet-2 {
          bottom: 30%;
          left: 15%;
          animation: float 7s ease-in-out infinite reverse;
        }

        /* Main Content */
        .content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .contact-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea, #764ba2, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .contact-subtitle {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Contact Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        /* Info Section */
        .info-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateX(5px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .info-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-icon {
          font-size: 1.5rem;
          color: white;
        }

        .info-content {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .info-value {
          font-size: 1rem;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .info-value:hover {
          color: #667eea;
        }

        /* Social Section */
        .social-section {
          margin-bottom: 2rem;
        }

        .social-title {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Availability Card */
        .availability-card {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .availability-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .availability-title {
          font-weight: 600;
          color: white;
        }

        .availability-text {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* Form Section */
        .form-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .form-card {
          height: 100%;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .success-message {
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.2);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4ade80;
          animation: slideIn 0.3s ease;
        }

        .success-icon {
          width: 24px;
          height: 24px;
          background: rgba(74, 222, 128, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .input-icon {
          color: #667eea;
        }

        .form-input,
        .form-textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          font-size: 1rem;
          color: white;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          background: white;
          color: #0a0a0a;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 20px 30px -10px rgba(102, 126, 234, 0.5);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-button.loading {
          background: rgba(255, 255, 255, 0.8);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .submit-button:hover:not(:disabled) .button-icon {
          transform: translateX(5px) translateY(-2px);
        }

        /* Location Section */
        .location-section {
          margin-top: 2rem;
        }

        .location-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .location-pin {
          font-size: 2rem;
        }

        .location-info {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .location-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .location-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
        }

        .timezone {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timezone-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .timezone-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }

        @keyframes floatShape {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          33% {
            transform: rotate(120deg) translateY(-20px);
          }
          66% {
            transform: rotate(240deg) translateY(20px);
          }
          100% {
            transform: rotate(360deg) translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .location-card {
            border-radius: 24px;
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 4rem 1rem;
          }

          .contact-title {
            font-size: 2rem;
          }

          .contact-subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .info-card {
            flex-direction: column;
            text-align: center;
          }

          .info-content {
            align-items: center;
          }

          .social-links {
            justify-content: center;
          }

          .availability-card {
            text-align: center;
          }

          .availability-header {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
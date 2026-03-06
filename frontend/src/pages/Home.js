import React from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Hero Section - Full Screen */}
      <section className="hero-section">
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
          <div className="code-snippet">{"<Shawaiz />"}</div>
          <div className="code-snippet-2">{"{Student Builder}"}</div>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="content-wrapper">
            {/* Availability Badge */}
            <div className="availability-badge">
              <span className="dot"></span>
              Open to opportunities
            </div>

            {/* Main Heading */}
            <h1 className="main-title">
              Shawaiz Ali Rehman
              <br />
              Building digital
              <span className="gradient-text"> experiences</span>
              <br />
              that make a difference
            </h1>

            {/* Description */}
            <p className="description">
              I'm a Computer Science student at FAST-NUCES who enjoys building thoughtful web and systems projects.
              I am working toward becoming a software engineer through hands-on development in C++, Python, React, Node.js, and database-driven applications.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button className="btn btn-secondary">
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <div className="social-links">
                <a href="#" className="social-link" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Positioned at bottom */}
        <div className="stats-wrapper">
          <div className="stats-container">
            <div className="stat-card">
              <span className="stat-value">3.9</span>
              <span className="stat-label">Current GPA</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-value">6+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-value">BSCS</span>
              <span className="stat-label">Current Degree</span>
            </div>
          </div>
          {/* Move View My Work button below stats */}
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-primary">
              View My Work <FiArrowRight className="btn-icon" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll to explore</div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section - Full Screen */
        .hero-section {
          min-height: calc(100vh - 60px);
          max-width: 100%;
          width: 100%;
          padding: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #0a0a0a;
          color: white;
          overflow: hidden;
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
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          padding: 0 2rem;
          margin: 0 auto;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 280px;
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideUp 0.8s ease-out;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .main-title {
          font-size: clamp(3rem, 10vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea, #764ba2, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .description {
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          margin-bottom: 2.5rem;
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        /* CTA Buttons */
        .cta-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          outline: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: white;
          color: #0a0a0a;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 30px -10px rgba(102, 126, 234, 0.5);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
          border-color: white;
          transform: translateY(-2px);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        /* Social Section */
        .social-section {
          animation: slideUp 0.8s ease-out 0.8s both;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: white;
          transform: translateY(-3px);
        }

        /* Stats Section */
        .stats-wrapper {
          position: absolute;
          bottom: 100px;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          justify-content: center;
          animation: slideUp 0.8s ease-out 1s both;
        }

        .stats-container {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 1.5rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255, 255, 255, 0.2);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.7;
          transition: opacity 0.3s ease;
          animation: fadeIn 1s ease-out 1.5s both;
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 2s infinite;
        }

        .scroll-text {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
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

        @keyframes scrollWheel {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(15px);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.7;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1.5rem;
          }

          .content-wrapper {
            padding-bottom: 320px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .description {
            font-size: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .stats-wrapper {
            bottom: 80px;
            padding: 0 1rem;
          }

          .stats-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            border-radius: 20px;
            width: 100%;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }

          .floating-elements {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
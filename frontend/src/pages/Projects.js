import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SudokuGame from './SudokuGame';
import BingoGame from './BingoGame';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('/api/portfolio')
      .then(res => {
        setProjects(res.data.projects);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
        <style jsx>{`
          .loading-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #0a0a0a;
            color: white;
          }
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.1);
            border-radius: 50%;
            border-top-color: #667eea;
            animation: spin 1s ease-in-out infinite;
            margin-bottom: 1rem;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Show Sudoku Game if selected
  if (selectedProject === 'sudoku') {
    return (
      <div className="game-container">
        <button className="back-button" onClick={() => setSelectedProject(null)}>
          ← Back to Projects
        </button>
        <SudokuGame />
        <style jsx>{`
          .game-container {
            min-height: 100vh;
            background: #0a0a0a;
            padding: 2rem;
          }
          .back-button {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 2rem;
          }
          .back-button:hover {
            background: rgba(255,255,255,0.2);
            transform: translateX(-5px);
          }
        `}</style>
      </div>
    );
  }

  // Show Bingo Game if selected
  if (selectedProject === 'bingo') {
    return (
      <div className="game-container">
        <button className="back-button" onClick={() => setSelectedProject(null)}>
          ← Back to Projects
        </button>
        <BingoGame />
        <style jsx>{`
          .game-container {
            min-height: 100vh;
            background: #0a0a0a;
            padding: 2rem;
          }
          .back-button {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 2rem;
          }
          .back-button:hover {
            background: rgba(255,255,255,0.2);
            transform: translateX(-5px);
          }
        `}</style>
      </div>
    );
  }

  // Featured projects (your custom games)
  const featuredProjects = [
    {
      id: 'sudoku',
      title: 'Sudoku Game',
      description: 'An interactive Sudoku game built entirely in x86 Assembly language. Features multiple difficulty levels, real-time validation, notes mode, and a scoring system.',
      technologies: ['x86 Assembly', 'DOS', 'Low-Level Programming'],
      icon: '🎮',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'bingo',
      title: 'Bingo Game',
      description: 'Classic Bingo for two players, written in modern C++ and running in your browser via WebAssembly. Features save/resume, high scores, and more!',
      technologies: ['C++', 'WebAssembly', 'Modern UI'],
      icon: '🟡',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'
    }
  ];

  return (
    <div className="projects-container">
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
        <div className="code-snippet">{"<Projects />"}</div>
        <div className="code-snippet-2">{"{Code}"}</div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header Section */}
        <div className="header">
          <div className="availability-badge">
            <span className="dot"></span>
            Featured Work
          </div>
          
          <h1 className="title">
            My <span className="gradient-text">Projects</span>
          </h1>
          
          <p className="subtitle">
            A collection of my work, from low-level assembly games to modern web applications.
            Each project represents a unique challenge and learning experience.
          </p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-tab ${filter === 'featured' ? 'active' : ''}`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
            <button 
              className={`filter-tab ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web Dev
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* Featured Game Cards */}
          {(filter === 'all' || filter === 'featured') && featuredProjects.map(project => (
            <div 
              key={project.id}
              className="project-card featured"
              onClick={() => setSelectedProject(project.id)}
              style={{ '--card-gradient': project.gradient }}
            >
              <div className="card-content">
                <div className="card-icon">{project.icon}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <span className="play-link">
                    Play Game <FiArrowRight className="link-icon" />
                  </span>
                </div>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}

          {/* API Projects */}
          {(filter === 'all' || filter === 'web') && projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <FiGithub />
                    </a>
                    <a href="#" className="project-link">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="cta-section">
          <button className="cta-button">
            View All Projects <FiArrowRight className="button-icon" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .projects-container {
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
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header Section */
        .header {
          text-align: center;
          margin-bottom: 4rem;
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
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .title {
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

        .subtitle {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        /* Filter Tabs */
        .filter-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .filter-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-tab:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .filter-tab.active {
          background: white;
          color: #0a0a0a;
          border-color: white;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        /* Project Card */
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .project-card.featured {
          background: var(--card-gradient);
          border: none;
        }

        .project-card.featured .card-content {
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(10px);
          height: 100%;
        }

        .card-content {
          padding: 2rem;
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .play-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .link-icon {
          transition: transform 0.3s ease;
        }

        .play-link:hover .link-icon {
          transform: translateX(5px);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .project-card:hover .card-glow {
          opacity: 1;
        }

        /* CTA Section */
        .cta-section {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        }

        .cta-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(5px);
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects-container {
            padding: 4rem 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .filter-tabs {
            flex-direction: column;
            padding: 0 2rem;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
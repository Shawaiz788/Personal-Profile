import React, { useState } from 'react';
import BingoGame from './BingoGame';
import SudokuGame from './SudokuGame';
import { FiArrowRight, FiCode, FiDownload, FiPlay, FiStar } from 'react-icons/fi';

const portfolioProjects = [
  {
    id: 'sudoku',
    title: 'Sudoku Game',
    tagline: 'Interactive browser project',
    description: 'A Sudoku experience rooted in low-level programming work, presented inside the portfolio as a playable project with a focused game view.',
    technologies: ['x86 Assembly', 'DOS', 'Interactive UI'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #5b8cff 0%, #6d4aff 100%)',
    categories: ['interactive'],
    actions: [
      {
        kind: 'play',
        label: 'Open Project'
      }
    ]
  },
  {
    id: 'bingo',
    title: 'Bingo Game',
    tagline: 'C++ project adapted for the web',
    description: 'A two-player Bingo system originally written in C++, now presented in the portfolio with a browser version, source download, and project write-up.',
    technologies: ['C++', 'Game Logic', 'Browser Adaptation'],
    icon: '🟡',
    gradient: 'linear-gradient(135deg, #ff8a3d 0%, #ffd166 100%)',
    categories: ['interactive', 'cpp'],
    actions: [
      {
        kind: 'play',
        label: 'Play on Site'
      },
      {
        kind: 'download',
        label: 'Download C++',
        href: '/BINGO.cpp',
        fileName: 'BINGO.cpp'
      }
    ]
  },
  {
    id: 'fitness-cpp',
    title: 'Fitness Tracker Console App',
    tagline: 'Windows console application',
    description: 'A fitness-focused C++ console application with user accounts, personal info management, workout guidance, progress tracking, and file-based persistence.',
    technologies: ['C++', 'OOP', 'Windows Console', 'File Handling'],
    icon: '🏋️',
    gradient: 'linear-gradient(135deg, #00a896 0%, #4dd7a8 100%)',
    categories: ['cpp'],
    actions: [
      {
        kind: 'download',
        label: 'Download C++',
        href: '/fitness.cpp',
        fileName: 'fitness.cpp'
      }
    ]
  },
  {
    id: 'bank-cpp',
    title: 'Banking System Prototype',
    tagline: 'Object-oriented systems project',
    description: 'A C++ banking system prototype structured around users, cards, transactions, fraud status checks, and account tiers, showing class design and file-driven workflows.',
    technologies: ['C++', 'System Design', 'Transactions', 'OOP Modeling'],
    icon: '🏦',
    gradient: 'linear-gradient(135deg, #ef476f 0%, #ff7b54 100%)',
    categories: ['cpp'],
    actions: [
      {
        kind: 'download',
        label: 'Download C++',
        href: '/bank.cpp',
        fileName: 'bank.cpp'
      }
    ]
  }
];

function ActionButton({ action, onPlay }) {
  if (action.kind === 'play') {
    return (
      <button type="button" className="action-button primary" onClick={onPlay}>
        <FiPlay />
        {action.label}
      </button>
    );
  }

  return (
    <a className="action-button secondary" href={action.href} download={action.fileName}>
      <FiDownload />
      {action.label}
    </a>
  );
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

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

  const visibleProjects = portfolioProjects.filter((project) => {
    if (filter === 'all') {
      return true;
    }

    return project.categories.includes(filter);
  });

  return (
    <div className="projects-container">
      <div className="background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="code-snippet">{'{ C++ Projects }'}</div>
        <div className="code-snippet-2">{'<Portfolio />'}</div>
      </div>

      <div className="content">
        <div className="header">
          <div className="availability-badge">
            <span className="dot"></span>
            Curated Portfolio Work
          </div>

          <h1 className="title">
            Selected <span className="gradient-text">Projects</span>
          </h1>

          <p className="subtitle">
            A focused showcase of interactive builds and C++ console applications. Play the browser-ready projects on site, or download the original source files directly from the portfolio.
          </p>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Work
            </button>
            <button
              className={`filter-tab ${filter === 'interactive' ? 'active' : ''}`}
              onClick={() => setFilter('interactive')}
            >
              Interactive
            </button>
            <button
              className={`filter-tab ${filter === 'cpp' ? 'active' : ''}`}
              onClick={() => setFilter('cpp')}
            >
              C++ Source
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{ '--card-gradient': project.gradient }}
            >
              <div className="card-shell"></div>
              <div className="card-content">
                <div className="card-topline">
                  <div className="card-icon">{project.icon}</div>
                  <div className="project-badge">
                    {project.categories.includes('interactive') ? <FiStar /> : <FiCode />}
                    {project.tagline}
                  </div>
                </div>

                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="card-footer">
                  <div className="action-group">
                    {project.actions.map((action) => (
                      <ActionButton
                        key={`${project.id}-${action.label}`}
                        action={action}
                        onPlay={() => setSelectedProject(project.id)}
                      />
                    ))}
                  </div>
                  <div className="card-hint">
                    {project.categories.includes('interactive') ? (
                      <span className="hint-text">
                        Open on site <FiArrowRight className="link-icon" />
                      </span>
                    ) : (
                      <span className="hint-text">
                        Download source <FiArrowRight className="link-icon" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-panel">
            <h2>What These Projects Show</h2>
            <p>
              This selection highlights low-level problem solving, object-oriented C++ design, console application structure, file-based persistence, and the ability to adapt native ideas into a cleaner web presentation.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
          background: #05070d;
          color: white;
          overflow: hidden;
          padding: 6rem 2rem;
        }

        .background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.38;
        }

        .orb-1 {
          width: 620px;
          height: 620px;
          background: radial-gradient(circle, rgba(91, 140, 255, 0.9) 0%, transparent 70%);
          top: -220px;
          right: -180px;
          animation: float 18s ease-in-out infinite;
        }

        .orb-2 {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(255, 127, 80, 0.8) 0%, transparent 70%);
          bottom: -140px;
          left: -140px;
          animation: float 16s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(0, 168, 150, 0.7) 0%, transparent 72%);
          top: 42%;
          left: 52%;
          transform: translate(-50%, -50%);
          animation: float 20s ease-in-out infinite;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 54px 54px;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          width: 220px;
          height: 220px;
          bottom: 18%;
          right: 12%;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: floatShape 19s linear infinite reverse;
        }

        .shape-3 {
          width: 160px;
          height: 160px;
          top: 42%;
          right: 24%;
          border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%;
          animation: floatShape 14s linear infinite;
        }

        .code-snippet,
        .code-snippet-2 {
          position: absolute;
          font-family: monospace;
          font-size: 1rem;
          padding: 0.55rem 1rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .code-snippet {
          top: 24%;
          right: 18%;
          animation: float 6s ease-in-out infinite;
        }

        .code-snippet-2 {
          bottom: 28%;
          left: 14%;
          animation: float 7s ease-in-out infinite reverse;
        }

        .content {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .title {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #5b8cff, #00a896, #ffd166, #ff7b54);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 220% 220%;
          animation: gradientShift 8s ease infinite;
        }

        .subtitle {
          font-size: 1.08rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.72);
          max-width: 760px;
          margin: 0 auto 2.5rem;
        }

        .filter-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-tab {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.72);
          padding: 0.8rem 1.5rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .project-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          min-height: 380px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.16);
          box-shadow: 0 30px 55px rgba(0, 0, 0, 0.38);
        }

        .card-shell {
          position: absolute;
          inset: 0;
          background: var(--card-gradient);
          opacity: 0.92;
        }

        .card-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          background: linear-gradient(180deg, rgba(8, 10, 18, 0.56), rgba(8, 10, 18, 0.84));
          backdrop-filter: blur(10px);
        }

        .card-topline {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .card-icon {
          font-size: 2.4rem;
        }

        .project-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.9rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .card-title {
          font-size: 1.55rem;
          font-weight: 750;
          margin-bottom: 0.9rem;
          color: white;
        }

        .card-description {
          font-size: 0.98rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.82);
          margin-bottom: 1.4rem;
          flex: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.4rem 0.78rem;
          border-radius: 999px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .card-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: auto;
        }

        .action-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 46px;
          padding: 0.75rem 1.15rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        .action-button:hover {
          transform: translateY(-2px);
        }

        .action-button.primary {
          border: none;
          background: #ffffff;
          color: #111318;
          cursor: pointer;
        }

        .action-button.secondary {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .card-hint {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.92rem;
          font-weight: 600;
        }

        .hint-text {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .link-icon {
          transition: transform 0.25s ease;
        }

        .project-card:hover .link-icon {
          transform: translateX(4px);
        }

        .cta-section {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        }

        .cta-panel {
          max-width: 900px;
          text-align: center;
          padding: 2rem 2.25rem;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .cta-panel h2 {
          margin: 0 0 1rem;
          font-size: 1.8rem;
        }

        .cta-panel p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-26px) rotate(4deg);
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

        @media (max-width: 768px) {
          .projects-container {
            padding: 4rem 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .card-content {
            padding: 1.5rem;
          }

          .card-topline {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;

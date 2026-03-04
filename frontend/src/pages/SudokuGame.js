import React, { useEffect, useRef, useState } from 'react';
import { FiDownload, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

function SudokuGame() {
  const iframeRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Loading sudoku emulator...');
    // Load the emulator HTML file in the iframe
    if (iframeRef.current) {
      iframeRef.current.src = '/sudoku-emulator.html';
    }
  }, []);

  return (
    <div className="game-detail-container">
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
        <div className="code-snippet">{"<Assembly />"}</div>
        <div className="code-snippet-2">{"{x86}"}</div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header */}
        <div className="game-header">
          <div className="header-top">
            <div className="game-badge">
              <span className="dot"></span>
              Featured Project
            </div>
            <h1 className="game-title">
              <span className="gradient-text">Sudoku Game</span>
              <span className="title-badge">x86 Assembly</span>
            </h1>
          </div>
        </div>

        {/* Game Container */}
        <div className="game-section">
          <div className="game-wrapper">
            <div className="game-frame">
              <iframe
                ref={iframeRef}
                className="dos-iframe"
                title="DOS Emulator"
              />
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <div className="info-content">
                <span className="info-label">Difficulty Levels</span>
                <span className="info-value">6</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏱️</div>
              <div className="info-content">
                <span className="info-label">Real-time Timer</span>
                <span className="info-value">Yes</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📝</div>
              <div className="info-content">
                <span className="info-label">Notes Mode</span>
                <span className="info-value">Advanced</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🔄</div>
              <div className="info-content">
                <span className="info-label">Undo Function</span>
                <span className="info-value">Unlimited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Features Column */}
          <div className="features-column">
            <h2 className="column-title">
              <span className="gradient-text">✨</span> Features
            </h2>
            <div className="features-list">
              {[
                '6 Difficulty Levels',
                'Real-time Timer & Scoring',
                'Advanced Notes Mode',
                'Undo Functionality',
                'Real-time Validation',
                'Trophy Display',
                'Mistake Tracking',
                'ASCII Art UI'
              ].map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-bullet">▶</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls Column */}
          <div className="controls-column">
            <h2 className="column-title">
              <span className="gradient-text">⌨️</span> Controls
            </h2>
            <div className="controls-list">
              {[
                { keys: '↑ ↓ ← →', desc: 'Navigate' },
                { keys: '1-9', desc: 'Enter number' },
                { keys: 'U', desc: 'Undo' },
                { keys: 'N', desc: 'Notes Mode' },
                { keys: 'Space', desc: 'Clear cell' },
                { keys: 'ESC', desc: 'Menu' }
              ].map((control, index) => (
                <div key={index} className="control-item">
                  <span className="control-keys">{control.keys}</span>
                  <span className="control-desc">{control.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="section-title">
            <span className="gradient-text">💻</span> About This Project
          </h2>
          
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-icon">⚙️</span>
              <div className="stat-detail">
                <span className="stat-label">Language</span>
                <span className="stat-value">x86 Assembly</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">📊</span>
              <div className="stat-detail">
                <span className="stat-label">Lines of Code</span>
                <span className="stat-value">~2,748</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🖥️</span>
              <div className="stat-detail">
                <span className="stat-label">Platform</span>
                <span className="stat-value">DOS / js-dos</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🔧</span>
              <div className="stat-detail">
                <span className="stat-label">Key Features</span>
                <span className="stat-value">Custom memory management, backtracking algorithm</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <a
              href="/suduko.asm"
              className="btn btn-primary"
              download="suduko.asm"
            >
              <FiDownload className="btn-icon" />
              Download Assembly Source (.asm)
            </a>
            
            <div className="resource-links">
              <span className="resource-label">Resources:</span>
              <a href="https://js-dos.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                js-dos <FiExternalLink className="link-icon" />
              </a>
              <a href="https://www.nasm.us/" target="_blank" rel="noopener noreferrer" className="resource-link">
                NASM <FiExternalLink className="link-icon" />
              </a>
              <a href="https://en.wikibooks.org/wiki/X86_Assembly" target="_blank" rel="noopener noreferrer" className="resource-link">
                x86 Reference <FiExternalLink className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .game-detail-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
          background: #0a0a0a;
          color: white;
          overflow: hidden;
          padding: 4rem 2rem;
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

        /* Game Header */
        .game-header {
          margin-bottom: 3rem;
        }

        .header-top {
          text-align: center;
        }

        .game-badge {
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

        .game-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea, #764ba2, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .title-badge {
          font-size: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Game Section */
        .game-section {
          margin-bottom: 3rem;
        }

        .game-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .game-frame {
          width: 100%;
          height: 480px;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
        }

        .dos-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* Info Cards */
        .info-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .info-icon {
          font-size: 2rem;
        }

        .info-content {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .info-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .features-column,
        .controls-column {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .column-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
        }

        .feature-bullet {
          color: #667eea;
          font-size: 0.8rem;
        }

        .controls-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .control-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .control-keys {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          font-family: monospace;
          font-weight: 600;
          color: #667eea;
          min-width: 100px;
          text-align: center;
        }

        .control-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        /* About Section */
        .about-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-icon {
          font-size: 1.5rem;
        }

        .stat-detail {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .stat-value {
          font-size: 1rem;
          color: white;
        }

        /* Action Buttons */
        .action-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-top: 2rem;
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
          text-decoration: none;
        }

        .btn-primary {
          background: white;
          color: #0a0a0a;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 30px -10px rgba(102, 126, 234, 0.5);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateY(-2px);
        }

        .resource-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .resource-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        .resource-link {
          color: #667eea;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .resource-link:hover {
          color: #764ba2;
        }

        .link-icon {
          font-size: 0.9rem;
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
        @media (max-width: 1024px) {
          .info-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .game-detail-container {
            padding: 2rem 1rem;
          }

          .game-frame {
            height: 350px;
          }

          .info-cards {
            grid-template-columns: 1fr;
          }

          .features-list {
            grid-template-columns: 1fr;
          }

          .game-title {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .resource-links {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}

export default SudokuGame;
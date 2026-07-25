import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiSmartphone, FiCode, FiLayers, FiAward, FiZap } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-text-col">
          <div className="section-badge">
            <FiZap className="badge-icon" />
            Open to Mobile & Software Roles
          </div>

          <h1 className="hero-title">
            Shawaiz Ali Rehman
            <br />
            <span className="gradient-text">Mobile & Software</span> Engineer
          </h1>

          <p className="hero-description">
            Computer Science student at FAST-NUCES (GPA 3.89) specializing in <strong>Mobile Application Development (React Native & Android Java)</strong>, AI healthcare models, and responsive web platforms. Turning complex ideas into sleek, production-ready software.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setCurrentPage('projects')}>
              View My Work <FiArrowRight />
            </button>
            <button className="btn btn-secondary" onClick={() => setCurrentPage('contact')}>
              Contact Me
            </button>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Shawaiz788?tab=repositories"
              className="social-btn"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shawaiz-ali-rehman-52227427b/"
              className="social-btn"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:shawaizali788@gmail.com"
              className="social-btn"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-visual-col">
          <TiltCard className="hero-code-card">
            <div className="card-header-bar">
              <span className="window-dot red"></span>
              <span className="window-dot yellow"></span>
              <span className="window-dot green"></span>
              <span className="card-filename">developer_profile.ts</span>
            </div>
            <div className="code-block">
              <p><span className="keyword">const</span> developer = &#123;</p>
              <p className="indent"><span className="property">name</span>: <span className="string">'Shawaiz Ali Rehman'</span>,</p>
              <p className="indent"><span className="property">university</span>: <span className="string">'FAST-NUCES Lahore'</span>,</p>
              <p className="indent"><span className="property">gpa</span>: <span className="number">3.89</span>,</p>
              <p className="indent"><span className="property">coreFocus</span>: [</p>
              <p className="indent-2"><span className="string">'React Native Mobile'</span>,</p>
              <p className="indent-2"><span className="string">'Android (Java SDK)'</span>,</p>
              <p className="indent-2"><span className="string">'Full-Stack Web'</span>,</p>
              <p className="indent-2"><span className="string">'AI & NLP'</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="property">status</span>: <span className="string">'Building high-impact apps'</span></p>
              <p>&#125;;</p>
            </div>
            <div className="tech-pills">
              <span className="pill"><FiSmartphone /> React Native</span>
              <span className="pill"><FiCode /> Android Java</span>
              <span className="pill"><FiLayers /> Full-Stack</span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Stats Widgets */}
      <section className="stats-section">
        <div className="stats-grid">
          <TiltCard className="stat-card">
            <div className="stat-icon-wrapper purple">
              <FiAward />
            </div>
            <div className="stat-content">
              <span className="stat-number">3.89</span>
              <span className="stat-title">Current GPA</span>
              <span className="stat-sub">FAST-NUCES Lahore</span>
            </div>
          </TiltCard>

          <TiltCard className="stat-card">
            <div className="stat-icon-wrapper cyan">
              <FiLayers />
            </div>
            <div className="stat-content">
              <span className="stat-number">10+</span>
              <span className="stat-title">Projects Built</span>
              <span className="stat-sub">Mobile, Web & Systems</span>
            </div>
          </TiltCard>

          <TiltCard className="stat-card">
            <div className="stat-icon-wrapper pink">
              <FiSmartphone />
            </div>
            <div className="stat-content">
              <span className="stat-number">Mobile</span>
              <span className="stat-title">Core Specialization</span>
              <span className="stat-sub">React Native & Android</span>
            </div>
          </TiltCard>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          padding-top: 1rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          font-weight: 700;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.15);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
        }

        /* Code Card Visual */
        .hero-code-card {
          background: var(--code-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .card-header-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .window-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .window-dot.red { background: #ff5f56; }
        .window-dot.yellow { background: #ffbd2e; }
        .window-dot.green { background: #27c93f; }

        .card-filename {
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--text-dim);
          font-family: monospace;
        }

        .code-block {
          font-family: 'Fira Code', Consolas, Monaco, monospace;
          font-size: 0.875rem;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 1.25rem;
        }

        .keyword { color: #38bdf8; }
        .property { color: #f43f5e; }
        .string { color: #34d399; }
        .number { color: #fbbf24; }
        .indent { padding-left: 1.25rem; }
        .indent-2 { padding-left: 2.5rem; }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.775rem;
          font-weight: 500;
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          background: var(--badge-bg);
          color: var(--accent-primary);
          border: 1px solid var(--badge-border);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }

        .stat-icon-wrapper.purple {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .stat-icon-wrapper.cyan {
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-secondary);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .stat-icon-wrapper.pink {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-main);
          font-family: var(--font-display);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .stat-sub {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-title {
            font-size: 2.25rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
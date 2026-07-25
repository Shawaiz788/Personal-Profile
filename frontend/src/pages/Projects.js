import React, { useState, useEffect } from 'react';
import BingoGame from './BingoGame';
import SudokuGame from './SudokuGame';
import TiltCard from '../components/TiltCard';
import ProjectDemoModal from '../components/ProjectDemoModal';
import { FiCode, FiDownload, FiExternalLink, FiPlay, FiArrowLeft, FiSmartphone, FiSearch, FiFilm, FiZap } from 'react-icons/fi';

const portfolioProjects = [
  {
    id: 'kaamkarwao',
    title: 'KaamKarwao',
    tagline: 'Mobile Marketplace',
    description: 'A feature-packed mobile service booking platform connecting service seekers with skilled workers, featuring user authentication, booking workflows, real-time status tracking, and intuitive UI.',
    technologies: ['React Native', 'Mobile Dev', 'Expo SDK 54', 'JavaScript', 'TanStack Query', 'MMKV Storage', 'Leaflet / OSM'],
    icon: '🛠️',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
    categories: ['mobile', 'fullstack'],
    demoType: 'video',
    videoUrl: 'https://github.com/user-attachments/assets/ae363c29-7017-44c1-b0b6-7505cb8d7bcd',
    highlights: [
      'Full 17-Module Admin Control Panel for User Directories, Reviews, Worker Earnings & Categories',
      'Progressive Step Auth Loading with SecureStore session encryption',
      'Instant-Mount Leaflet & OpenStreetMap interactive location search engine',
      'Real-time service provider bidding radar and messaging workflow'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/KaamKarwao'
      }
    ]
  },
  {
    id: 'music-streaming',
    title: 'Android Music Streaming',
    tagline: 'Native Audio App',
    description: 'A native Android music player and streaming starter application built with Java, Android SDK, and Media3/ExoPlayer featuring background audio services, playback controls, and modern Material UI.',
    technologies: ['Android Studio', 'Java', 'Android SDK', 'ExoPlayer / Media3', 'Firebase', 'SQLite', 'Shazam AudD API'],
    icon: '🎵',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    categories: ['mobile'],
    demoType: 'showcase',
    highlights: [
      'Built with Fragments + Navigation Component and custom PlayerManager singleton',
      'Real-time song catalog, playlists, and user favorites powered by Firebase',
      'Offline downloads caching (SQLite + local audio file persistence)',
      'Audio recognition ("Shazam Mode") powered by AudD API with animated audio visualizer'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/android-music-streaming-starter'
      }
    ]
  },
  {
    id: 'neem-bert-hakeem',
    title: 'Neem-Bert-Hakeem',
    tagline: 'AI Healthcare QA',
    description: 'An AI-powered healthcare & herbal consultation system utilizing fine-tuned BERT models for natural language medical QA, symptom evaluation, and personalized advice.',
    technologies: ['Python', 'BERT / Transformers', 'NLP / AI', 'Flask / FastAPI', 'Machine Learning'],
    icon: '🌿',
    gradient: 'linear-gradient(135deg, #42e695 0%, #3bb2b8 100%)',
    categories: ['fullstack'],
    demoType: 'showcase',
    highlights: [
      'Fine-tuned BERT transformer models for medical question-answering',
      'Symptom evaluation & natural language herbal consultation pipeline',
      'REST API backend for real-time inference and user query response'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/Neem-Bert-Hakeem'
      }
    ]
  },
  {
    id: 'sudoku',
    title: 'Sudoku Game',
    tagline: 'x86 Assembly App',
    description: 'A Sudoku experience rooted in low-level x86 programming, presented inside the portfolio as an interactive playable browser application.',
    technologies: ['x86 Assembly', 'DOS', 'Interactive UI', 'JavaScript'],
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #5b8cff 0%, #6d4aff 100%)',
    categories: ['interactive'],
    demoType: 'playable',
    highlights: [
      'Playable on site directly in your web browser',
      'Custom low-level grid solver logic derived from x86 assembly routines',
      'Interactive move validation and difficulty modes'
    ],
    actions: [
      {
        kind: 'play',
        label: 'Play on Site'
      }
    ]
  },
  {
    id: 'rn-camera',
    title: 'React Native Camera App',
    tagline: 'Mobile Camera App',
    description: 'A mobile camera application engineered with React Native and native device vision modules, supporting high-resolution image capture, filter previews, camera permission handling, and image gallery management.',
    technologies: ['React Native', 'Mobile Dev', 'VisionCamera', 'Expo Router', 'Media Library', 'JavaScript'],
    icon: '📷',
    gradient: 'linear-gradient(135deg, #8a2be2 0%, #4a00e0 100%)',
    categories: ['mobile'],
    demoType: 'video',
    videoUrl: 'https://github.com/user-attachments/assets/4e0989c6-05b6-4b9f-83ee-a1f6b109d91b',
    highlights: [
      'Low-latency live camera preview powered by React Native Vision Camera v4',
      'Curved radial controls for smooth zoom factors (1x to 5x) and exposure compensation',
      'Flashlight torch toggle and synchronized flash strobe capture',
      'Direct device photo gallery integration via Expo Media Library'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/ReactNative-Camera-App'
      }
    ]
  },
  {
    id: 'firetv-podcast',
    title: 'FireTV Podcast App (VegaOS)',
    tagline: 'Smart TV & FireTV',
    description: 'Cross-platform podcast streaming application custom-tailored for Amazon FireTV and VegaOS TV interfaces, featuring D-pad remote navigation, background audio streaming, and leanback TV UI.',
    technologies: ['React Native', 'Expo TV', 'FireTV / Smart TV', 'VegaOS', 'Yarn Monorepo', 'Podcast API'],
    icon: '📺',
    gradient: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
    categories: ['mobile'],
    demoType: 'video',
    videoUrl: 'https://github.com/user-attachments/assets/54e3b5af-c778-45c0-8ceb-223d5ed6cd1a',
    highlights: [
      'Built as a Yarn Workspaces monorepo sharing code across FireTV, Android TV, Apple TV, and Web',
      'TV-optimized remote control focus management and D-pad navigation',
      'Podcast API search, episode browsing, and leanback audio player engine'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/Expo-VegaOs-Podcast-FireTV-App'
      }
    ]
  },
  {
    id: 'friendsly',
    title: 'FriendsLy',
    tagline: 'Social & Community',
    description: 'A mobile-first social discovery and community building platform enabling users to match over shared interests, initiate direct messages, and discover local activities without GPS tracking.',
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Privacy Controls', 'Mobile UI'],
    icon: '👥',
    gradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    categories: ['mobile', 'fullstack'],
    demoType: 'showcase',
    highlights: [
      'Privacy-first design using approximate proximity without continuous location tracking',
      'Social Aura broadcasting temporary moods, interests, and intentions',
      'Serendipity Engine for spontaneous real-world activity recommendations',
      'Hangout Capsules for digital memory sharing and secure messaging'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/FriendsLy'
      }
    ]
  },
  {
    id: 'bingo',
    title: 'Bingo Game',
    tagline: 'C++ System & Web',
    description: 'A two-player Bingo system originally written in C++, now presented in the portfolio with a browser version, source download, and project write-up.',
    technologies: ['C++', 'Game Logic', 'Browser Adaptation'],
    icon: '🟡',
    gradient: 'linear-gradient(135deg, #ff8a3d 0%, #ffd166 100%)',
    categories: ['interactive', 'cpp'],
    demoType: 'playable',
    highlights: [
      'Playable on site directly in your web browser',
      'Two-player game logic ported from classic C++ codebase',
      'Downloadable original C++ source files'
    ],
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
    id: 'codeack',
    title: 'CodeAck',
    tagline: 'Competitive Coding',
    description: 'A full-stack coding practice platform inspired by modern competitive programming tools, with problem management, submissions, authentication, leaderboard data, and scalable backend structure.',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Code Evaluation'],
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #7b61ff 0%, #4cc9f0 100%)',
    categories: ['fullstack'],
    demoType: 'showcase',
    highlights: [
      'Competitive coding practice platform with live submission evaluation',
      'Problem directory, category tags, and user leaderboards',
      'Built with Next.js, NestJS backend, and PostgreSQL database'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/AhmedNasir7/Codeack-SDA_Project.git'
      }
    ]
  },
  {
    id: 'restaurant-reservation',
    title: 'Restaurant Reservation System',
    tagline: 'Reservation Platform',
    description: 'A reservation management web app built for handling table bookings, customer records, user authentication, and live availability across a restaurant workflow.',
    technologies: ['React', 'Node.js', 'Express', 'SQL', 'Authentication'],
    icon: '🍽️',
    gradient: 'linear-gradient(135deg, #2ec4b6 0%, #1b9aaa 100%)',
    categories: ['fullstack'],
    demoType: 'showcase',
    highlights: [
      'Table booking management with live availability checks',
      'User authentication, booking history, and customer records',
      'Node.js REST API with SQL database storage'
    ],
    actions: [
      {
        kind: 'external',
        label: 'View Repository',
        href: 'https://github.com/Shawaiz788/Restaurant-Reservation-System.git'
      }
    ]
  },
  {
    id: 'fitness-cpp',
    title: 'Fitness Tracker Console App',
    tagline: 'C++ Console App',
    description: 'A fitness-focused C++ console application with user accounts, personal info management, workout guidance, progress tracking, and file-based persistence.',
    technologies: ['C++', 'OOP', 'Windows Console', 'File Handling'],
    icon: '🏋️',
    gradient: 'linear-gradient(135deg, #00a896 0%, #4dd7a8 100%)',
    categories: ['cpp'],
    demoType: 'showcase',
    highlights: [
      'Console application built with object-oriented C++',
      'File-based data persistence for user profiles & workout history',
      'Workout recommendations and fitness tracking calculations'
    ],
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
    tagline: 'C++ Systems Design',
    description: 'A C++ banking system prototype structured around users, cards, transactions, fraud status checks, and account tiers, showing class design and file-driven workflows.',
    technologies: ['C++', 'System Design', 'Transactions', 'OOP Modeling'],
    icon: '🏦',
    gradient: 'linear-gradient(135deg, #ef476f 0%, #ff7b54 100%)',
    categories: ['cpp'],
    demoType: 'showcase',
    highlights: [
      'Object-oriented banking system with accounts & card management',
      'Transaction processing and fraud status checking logic',
      'Multi-tier account structure and file-driven persistent state'
    ],
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

function ActionButton({ action, onPlay, onOpenDemo, demoType }) {
  if (demoType === 'video') {
    return (
      <button type="button" className="action-btn primary" onClick={onOpenDemo}>
        <FiFilm /> Watch Demo
      </button>
    );
  }

  if (action.kind === 'play') {
    return (
      <button type="button" className="action-btn primary" onClick={onPlay}>
        <FiPlay /> {action.label}
      </button>
    );
  }

  if (action.kind === 'external') {
    return (
      <a className="action-btn secondary" href={action.href} target="_blank" rel="noreferrer">
        <FiExternalLink /> {action.label}
      </a>
    );
  }

  return (
    <a className="action-btn secondary" href={action.href} download={action.fileName}>
      <FiDownload /> {action.label}
    </a>
  );
}

const Projects = ({ initialFilter = 'all' }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [filter, setFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

  if (selectedProject === 'sudoku') {
    return (
      <div className="game-view-wrapper">
        <button className="btn btn-secondary back-btn" onClick={() => setSelectedProject(null)}>
          <FiArrowLeft /> Back to Projects
        </button>
        <SudokuGame />
      </div>
    );
  }

  if (selectedProject === 'bingo') {
    return (
      <div className="game-view-wrapper">
        <button className="btn btn-secondary back-btn" onClick={() => setSelectedProject(null)}>
          <FiArrowLeft /> Back to Projects
        </button>
        <BingoGame />
      </div>
    );
  }

  const visibleProjects = portfolioProjects.filter((project) => {
    // Category match
    const categoryMatch = filter === 'all' || project.categories.includes(filter);
    
    // Search query match
    if (!searchQuery.trim()) return categoryMatch;

    const q = searchQuery.toLowerCase().trim();
    const titleMatch = project.title.toLowerCase().includes(q);
    const descMatch = project.description.toLowerCase().includes(q);
    const techMatch = project.technologies.some(t => t.toLowerCase().includes(q));

    return categoryMatch && (titleMatch || descMatch || techMatch);
  });

  return (
    <div className="projects-page">
      <div className="section-badge">
        <FiZap className="badge-icon" /> Portfolio Showcase
      </div>

      <h1 className="section-title">
        Featured <span className="gradient-text">Projects</span> & Engineering Work
      </h1>

      <p className="section-subtitle">
        A curated collection of mobile applications (React Native, Android Java), AI models, full-stack systems, and interactive games. Click any project card or demo button to preview!
      </p>

      {/* Search & Filter Bar */}
      <div className="controls-bar">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by title, tech stack (e.g. React Native, Java, AI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        <div className="filter-bar">
          {[
            { id: 'all', label: 'All Work' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'fullstack', label: 'Full-Stack & AI' },
            { id: 'interactive', label: 'Interactive' },
            { id: 'cpp', label: 'C++ Systems' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <TiltCard
            key={project.id}
            className="project-card"
            style={{ cursor: 'pointer' }}
          >
            <div onClick={() => setActiveModalProject(project)} className="card-clickable-area">
              <div className="card-top">
                <div className="project-icon">{project.icon}</div>
                <span className="tagline-chip">
                  {project.categories.includes('mobile') ? <FiSmartphone /> : <FiCode />}
                  {project.tagline}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="tech-tags">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-chip text-dim">+{project.technologies.length - 4}</span>
                )}
              </div>
            </div>

            <div className="card-actions">
              <button
                type="button"
                className="action-btn primary"
                onClick={() => setActiveModalProject(project)}
              >
                {project.demoType === 'video' ? <FiFilm /> : <FiCode />} Details & Demo
              </button>
              {project.actions.map((act, idx) => (
                <ActionButton
                  key={idx}
                  action={act}
                  demoType={project.demoType}
                  onPlay={() => setSelectedProject(project.id)}
                  onOpenDemo={() => setActiveModalProject(project)}
                />
              ))}
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Demo Modal Overlay */}
      {activeModalProject && (
        <ProjectDemoModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onPlay={() => setSelectedProject(activeModalProject.id)}
        />
      )}

      <style jsx>{`
        .projects-page {
          display: flex;
          flex-direction: column;
        }

        .controls-bar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          max-width: 550px;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 2.75rem;
          border-radius: 99px;
          background: rgba(148, 163, 184, 0.08);
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .search-box input:focus {
          border-color: var(--accent-primary);
          background: rgba(148, 163, 184, 0.14);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }

        .clear-search-btn {
          position: absolute;
          right: 1rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 1.2rem;
          cursor: pointer;
        }

        .filter-bar {
          display: flex;
          gap: 0.4rem;
          overflow-x: auto;
          max-width: 100%;
          white-space: nowrap;
          background: rgba(148, 163, 184, 0.08);
          padding: 0.35rem 0.5rem;
          border-radius: 99px;
          border: 1px solid var(--border-glass);
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .filter-bar::-webkit-scrollbar {
          display: none;
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.45rem 1.1rem;
          border-radius: 99px;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .filter-btn:hover {
          color: var(--text-main);
          background: rgba(148, 163, 184, 0.12);
        }

        .filter-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-clickable-area {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .project-icon {
          font-size: 1.8rem;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(148, 163, 184, 0.08);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tagline-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--accent-secondary);
          background: var(--badge-bg);
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          border: 1px solid var(--badge-border);
          max-width: fit-content;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .project-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .tech-chip {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: rgba(148, 163, 184, 0.08);
          color: var(--text-main);
          border: 1px solid var(--border-glass);
        }

        .tech-chip.text-dim {
          color: var(--text-dim);
        }

        .card-actions {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          text-decoration: none;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: #ffffff;
        }

        .action-btn.secondary {
          background: rgba(148, 163, 184, 0.08);
          color: var(--text-main);
          border: 1px solid var(--border-glass);
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }

        .game-view-wrapper {
          padding-top: 1rem;
        }

        .back-btn {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Projects;

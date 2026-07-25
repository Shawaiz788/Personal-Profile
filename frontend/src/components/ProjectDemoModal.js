import React from 'react';
import { FiX, FiExternalLink, FiSmartphone, FiCode, FiCheckCircle } from 'react-icons/fi';

const ProjectDemoModal = ({ project, onClose, onPlay }) => {
  if (!project) return null;

  const isVideo = project.demoType === 'video' && project.videoUrl;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-icon">{project.icon}</span>
            <div>
              <h2 className="modal-title">{project.title}</h2>
              <span className="modal-tagline">{project.tagline}</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FiX />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isVideo ? (
            <div className="video-preview-wrapper">
              <div className="device-frame">
                <div className="device-notch"></div>
                <video
                  className="demo-video-player"
                  src={project.videoUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              </div>
            </div>
          ) : (
            <div className="showcase-content">
              <p className="modal-description">{project.description}</p>

              {project.highlights && (
                <div className="highlights-box">
                  <h4><FiCheckCircle /> Key Highlights & Features</h4>
                  <ul>
                    {project.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="modal-tech-stack">
            <h4><FiCode /> Technologies Used</h4>
            <div className="tech-chips-row">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.actions.map((act, idx) => {
            if (act.kind === 'play') {
              return (
                <button
                  key={idx}
                  className="btn btn-primary"
                  onClick={() => {
                    onClose();
                    onPlay();
                  }}
                >
                  <FiSmartphone /> Open Playable Project
                </button>
              );
            }
            return (
              <a
                key={idx}
                href={act.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FiExternalLink /> {act.label}
              </a>
            );
          })}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease-out;
        }

        .modal-container {
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-card);
          border: 1px solid var(--border-glass-hover);
          border-radius: 24px;
          padding: 1.75rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .modal-icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: var(--badge-bg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .modal-tagline {
          font-size: 0.825rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(148, 163, 184, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Phone Container Mockup */
        .video-preview-wrapper {
          display: flex;
          justify-content: center;
          padding: 0.5rem 0;
        }

        .device-frame {
          position: relative;
          width: 280px;
          max-width: 100%;
          background: #000000;
          border: 10px solid #1e293b;
          border-radius: 36px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .device-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 110px;
          height: 18px;
          background: #1e293b;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          z-index: 10;
        }

        .demo-video-player {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
        }

        .modal-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .highlights-box {
          background: var(--badge-bg);
          border: 1px solid var(--badge-border);
          border-radius: 14px;
          padding: 1rem 1.25rem;
        }

        .highlights-box h4 {
          font-size: 0.9rem;
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }

        .highlights-box ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .highlights-box li {
          font-size: 0.85rem;
          color: var(--text-main);
          position: relative;
          padding-left: 1rem;
        }

        .highlights-box li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--accent-secondary);
        }

        .modal-tech-stack h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }

        .tech-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-badge {
          font-size: 0.775rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: rgba(148, 163, 184, 0.1);
          color: var(--text-main);
          border: 1px solid var(--border-glass);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-glass);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProjectDemoModal;

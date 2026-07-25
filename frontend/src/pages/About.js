import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiDownload, FiSmartphone, FiCode, FiCpu, FiBookOpen, FiCopy, FiCheck, FiZap } from 'react-icons/fi';
import TiltCard from '../components/TiltCard';

const defaultData = {
  name: 'Shawaiz Ali Rehman',
  title: 'Mobile & Software Engineer',
  location: 'Lahore, Pakistan',
  status: 'Open to Mobile (React Native / Android Java) & Software Engineering roles',
  bio: 'Computer Science undergraduate at FAST-NUCES (GPA 3.89) with specialized expertise in Mobile App Development (React Native & Android Java), Web applications, AI systems, and low-level software engineering. I build production-ready mobile apps ranging from gig-economy service marketplaces and native Android audio streaming apps to custom React Native camera platforms and Smart TV podcast experiences.',
  stats: [
    { label: 'GPA', value: '3.89' },
    { label: 'Projects', value: '10+' },
    { label: 'Degree', value: 'BSCS' },
    { label: 'Focus', value: 'Mobile & Web' }
  ],
  skills: {
    mobile: ['React Native', 'Android Studio', 'Java', 'Expo', 'VegaOS / FireTV', 'Mobile UI/UX', 'VisionCamera'],
    frontend: ['React', 'Next.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'BERT / NLP', 'SQL', 'PostgreSQL', 'Supabase', 'Firebase'],
    tools: ['Java', 'C++', 'C', 'x86 Assembly', 'Git & GitHub', 'Figma', 'Android SDK']
  },
  education: [
    {
      year: '2023 - 2027',
      degree: 'BS Computer Science',
      school: 'FAST-NUCES, Lahore',
      note: 'Current GPA: 3.89'
    },
    {
      year: '2021 - 2023',
      degree: 'A-Levels, Computer Science',
      school: 'Beaconhouse College Gulberg, Lahore',
      note: 'Grade: A*'
    }
  ],
  links: {
    github: 'https://github.com/Shawaiz788',
    linkedin: 'https://www.linkedin.com/in/shawaiz-ali-rehman-52227427b/',
    email: 'shawaizali788@gmail.com'
  },
  resume: {
    href: '/resume.pdf',
    label: 'Download Resume'
  }
};

function mergeAboutData(apiData) {
  if (!apiData || typeof apiData !== 'object') {
    return defaultData;
  }

  return {
    ...defaultData,
    ...apiData,
    stats: Array.isArray(apiData.stats) && apiData.stats.length ? apiData.stats : defaultData.stats,
    education: Array.isArray(apiData.education) && apiData.education.length ? apiData.education : defaultData.education,
    skills: {
      mobile: Array.isArray(apiData.skills?.mobile) && apiData.skills.mobile.length ? apiData.skills.mobile : defaultData.skills.mobile,
      frontend: Array.isArray(apiData.skills?.frontend) && apiData.skills.frontend.length ? apiData.skills.frontend : defaultData.skills.frontend,
      backend: Array.isArray(apiData.skills?.backend) && apiData.skills.backend.length ? apiData.skills.backend : defaultData.skills.backend,
      tools: Array.isArray(apiData.skills?.tools) && apiData.skills.tools.length ? apiData.skills.tools : defaultData.skills.tools
    }
  };
}

const About = ({ onSelectSkill }) => {
  const [about, setAbout] = useState(defaultData);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    axios.get('/api/about')
      .then((res) => {
        setAbout(mergeAboutData(res.data));
      })
      .catch((err) => {
        console.error('Error fetching about data:', err);
      });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shawaizali788@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const data = mergeAboutData(about);

  return (
    <div className="about-page">
      {/* Copy Email Toast */}
      {copied && (
        <div className="toast-notification">
          <FiCheck /> Copied shawaizali788@gmail.com to clipboard!
        </div>
      )}

      <div className="section-badge">
        <FiZap className="badge-icon" /> About Me
      </div>

      <h1 className="section-title">
        Engineering <span className="gradient-text">Background</span> & Skills
      </h1>

      <p className="section-subtitle">
        Passionate software engineer with a 3.89 GPA at FAST-NUCES, specializing in mobile and cross-platform architecture. Click any skill chip below to filter matching projects!
      </p>

      {/* Profile Overview */}
      <div className="about-overview-grid">
        <TiltCard className="bio-card">
          <h3 className="card-heading">My Journey</h3>
          <p className="bio-paragraph">{data.bio}</p>
          <p className="bio-paragraph">
            I specialize in engineering high-quality user experiences, from cross-platform mobile apps in React Native and native Android Java applications to AI-backed health assistants and low-level x86 Assembly systems.
          </p>
        </TiltCard>

        <TiltCard className="stats-card">
          <h3 className="card-heading">Key Highlights</h3>
          <div className="highlights-list">
            <div className="hl-item">
              <span className="hl-label">Degree</span>
              <span className="hl-val">BSCS (FAST-NUCES)</span>
            </div>
            <div className="hl-item">
              <span className="hl-label">Academic GPA</span>
              <span className="hl-val">3.89 / 4.0</span>
            </div>
            <div className="hl-item">
              <span className="hl-label">Primary Stack</span>
              <span className="hl-val">React Native & Android</span>
            </div>
            <div className="hl-item">
              <span className="hl-label">Email Contact</span>
              <button className="copy-email-btn" onClick={handleCopyEmail}>
                {copied ? <FiCheck /> : <FiCopy />} Copy Email
              </button>
            </div>
          </div>
          <a href={data.resume.href} className="btn btn-primary resume-btn" download>
            <FiDownload /> {data.resume.label}
          </a>
        </TiltCard>
      </div>

      {/* Skills Grid */}
      <div className="skills-container">
        <h2 className="sub-title">Technical Expertise (Click to filter projects)</h2>
        <div className="skills-grid">
          <TiltCard className="skill-card">
            <div className="skill-header">
              <FiSmartphone className="skill-icon purple" />
              <h3>Mobile Development</h3>
            </div>
            <div className="chips">
              {(data.skills.mobile || []).map((skill) => (
                <span
                  key={skill}
                  className="chip clickable-chip"
                  onClick={() => onSelectSkill && onSelectSkill(skill)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </TiltCard>

          <TiltCard className="skill-card">
            <div className="skill-header">
              <FiCode className="skill-icon cyan" />
              <h3>Frontend Web</h3>
            </div>
            <div className="chips">
              {(data.skills.frontend || []).map((skill) => (
                <span
                  key={skill}
                  className="chip clickable-chip"
                  onClick={() => onSelectSkill && onSelectSkill(skill)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </TiltCard>

          <TiltCard className="skill-card">
            <div className="skill-header">
              <FiCpu className="skill-icon pink" />
              <h3>Backend & AI</h3>
            </div>
            <div className="chips">
              {(data.skills.backend || []).map((skill) => (
                <span
                  key={skill}
                  className="chip clickable-chip"
                  onClick={() => onSelectSkill && onSelectSkill(skill)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </TiltCard>

          <TiltCard className="skill-card">
            <div className="skill-header">
              <FiBookOpen className="skill-icon indigo" />
              <h3>Systems & Languages</h3>
            </div>
            <div className="chips">
              {(data.skills.tools || []).map((skill) => (
                <span
                  key={skill}
                  className="chip clickable-chip"
                  onClick={() => onSelectSkill && onSelectSkill(skill)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="education-container">
        <h2 className="sub-title">Education History</h2>
        <div className="edu-grid">
          {data.education.map((edu, idx) => (
            <TiltCard key={idx} className="edu-card">
              <div className="edu-year">{edu.year}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <span className="edu-note-chip">{edu.note}</span>
            </TiltCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-page {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          position: relative;
        }

        .toast-notification {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #10b981;
          color: #ffffff;
          padding: 0.75rem 1.25rem;
          border-radius: 99px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          z-index: 3000;
          animation: slideUp 0.3s ease-out;
        }

        .copy-email-btn {
          background: rgba(148, 163, 184, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--accent-primary);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-size: 0.775rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: all 0.2s ease;
        }

        .copy-email-btn:hover {
          background: var(--accent-primary);
          color: #ffffff;
        }

        .clickable-chip {
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clickable-chip:hover {
          background: var(--accent-primary);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .about-overview-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 1.5rem;
        }

        .bio-card, .stats-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          padding: 1.75rem;
        }

        .card-heading {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .bio-paragraph {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 1rem;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .hl-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .hl-label {
          color: var(--text-muted);
        }

        .hl-val {
          color: var(--text-main);
          font-weight: 600;
        }

        .resume-btn {
          width: 100%;
          justify-content: center;
        }

        .sub-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text-main);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .skill-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 18px;
          padding: 1.5rem;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          font-size: 1.2rem;
        }
        .skill-icon.purple { color: var(--accent-primary); }
        .skill-icon.cyan { color: var(--accent-secondary); }
        .skill-icon.pink { color: var(--accent-cyan); }
        .skill-icon.indigo { color: var(--accent-indigo); }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .chip {
          font-size: 0.775rem;
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
          background: rgba(148, 163, 184, 0.08);
          color: var(--text-main);
          border: 1px solid var(--border-glass);
        }

        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .edu-card {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-glass);
          border-radius: 18px;
          padding: 1.5rem;
        }

        .edu-year {
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .edu-degree {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .edu-school {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .edu-note-chip {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          background: var(--badge-bg);
          color: var(--accent-primary);
          border: 1px solid var(--badge-border);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 800px) {
          .about-overview-grid, .skills-grid, .edu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;

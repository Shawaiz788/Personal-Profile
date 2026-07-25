import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiDownload, FiSmartphone, FiCode, FiCpu, FiBookOpen } from 'react-icons/fi';
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
    mobile: ['React Native', 'Android Studio', 'Java (Android)', 'Expo', 'VegaOS / FireTV', 'Mobile UI/UX', 'VisionCamera'],
    frontend: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'BERT / NLP', 'SQL / PostgreSQL', 'Supabase', 'Firebase'],
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

const About = () => {
  const [about, setAbout] = useState(defaultData);

  useEffect(() => {
    axios.get('/api/about')
      .then((res) => {
        setAbout(mergeAboutData(res.data));
      })
      .catch((err) => {
        console.error('Error fetching about data:', err);
      });
  }, []);

  const data = mergeAboutData(about);

  return (
    <div className="about-page">
      <div className="section-badge">
        <span className="badge-dot"></span> About Me
      </div>

      <h1 className="section-title">
        Engineering <span className="gradient-text">Background</span> & Skills
      </h1>

      <p className="section-subtitle">
        Passionate software engineer with a 3.89 GPA at FAST-NUCES, specializing in mobile and cross-platform architecture.
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
              <span className="hl-label">Location</span>
              <span className="hl-val">Lahore, Pakistan</span>
            </div>
          </div>
          <a href={data.resume.href} className="btn btn-primary resume-btn" download>
            <FiDownload /> {data.resume.label}
          </a>
        </TiltCard>
      </div>

      {/* Skills Grid */}
      <div className="skills-container">
        <h2 className="sub-title">Technical Expertise</h2>
        <div className="skills-grid">
          <TiltCard className="skill-card">
            <div className="skill-header">
              <FiSmartphone className="skill-icon purple" />
              <h3>Mobile Development</h3>
            </div>
            <div className="chips">
              {(data.skills.mobile || []).map((skill) => (
                <span key={skill} className="chip">{skill}</span>
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
                <span key={skill} className="chip">{skill}</span>
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
                <span key={skill} className="chip">{skill}</span>
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
                <span key={skill} className="chip">{skill}</span>
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
          font-size: 0.875rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hl-label {
          color: var(--text-muted);
        }

        .hl-val {
          color: #ffffff;
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
        .skill-icon.purple { color: #c084fc; }
        .skill-icon.cyan { color: #22d3ee; }
        .skill-icon.pink { color: #f472b6; }
        .skill-icon.indigo { color: #818cf8; }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .chip {
          font-size: 0.775rem;
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-main);
          border: 1px solid rgba(255, 255, 255, 0.06);
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
          color: var(--accent-indigo);
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .edu-degree {
          font-size: 1.1rem;
          font-weight: 700;
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
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          background: rgba(168, 85, 247, 0.1);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.25);
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

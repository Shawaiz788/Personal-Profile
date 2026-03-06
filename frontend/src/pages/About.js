import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiBriefcase, FiCode } from 'react-icons/fi';

const defaultData = {
  name: 'Shawaiz Ali Rehman',
  title: 'Computer Science Student',
  location: 'Lahore, Punjab',
  status: 'Open to full-time roles, internships, and freelance work',
  bio: 'Computer Science undergraduate at FAST-NUCES with a strong academic record and hands-on experience in software development and teaching. Skilled in C/C++, Python, SQL, and modern web technologies including React and Node.js. Experienced in building web, console, and systems-oriented projects such as reservation platforms, console games, and assembly-based applications. Passionate about problem-solving, clean system design, and growing into a strong software engineer.',
  stats: [
    { label: 'GPA', value: '3.9' },
    { label: 'Projects', value: '6+' },
    { label: 'Degree', value: 'BSCS' },
    { label: 'Goal', value: 'Software Engineer' }
  ],
  skills: {
    frontend: ['React', 'Next.js', 'JavaScript', 'HTML/CSS'],
    backend: ['Node.js', 'Express', 'SQL', 'Supabase', 'PostgreSQL'],
    tools: ['C++', 'C', 'Python', 'x86 Assembly', 'GitHub', 'Figma']
  },
  education: [
    {
      year: '2023 - 2027',
      degree: 'BS Computer Science',
      school: 'FAST-NUCES, Lahore',
      note: 'Current GPA: 3.9'
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

const placeholderValues = new Set([
  'Your Name',
  'Web Developer',
  'Full-Stack Developer',
  'Welcome to my portfolio! I am a passionate full-stack developer.'
]);

function sanitizeText(value, fallback) {
  if (typeof value !== 'string') {
    return fallback;
  }

  const trimmed = value.trim();
  if (!trimmed || placeholderValues.has(trimmed)) {
    return fallback;
  }

  return trimmed;
}

function mergeAboutData(apiData) {
  if (!apiData || typeof apiData !== 'object') {
    return defaultData;
  }

  return {
    ...defaultData,
    ...apiData,
    name: sanitizeText(apiData.name, defaultData.name),
    title: sanitizeText(apiData.title, defaultData.title),
    location: sanitizeText(apiData.location, defaultData.location),
    status: sanitizeText(apiData.status, defaultData.status),
    bio: sanitizeText(apiData.bio, defaultData.bio),
    stats: Array.isArray(apiData.stats) && apiData.stats.length ? apiData.stats : defaultData.stats,
    education: Array.isArray(apiData.education) && apiData.education.length ? apiData.education : defaultData.education,
    skills: {
      ...defaultData.skills,
      ...(apiData.skills || {})
    },
    links: {
      ...defaultData.links,
      ...(apiData.links || {})
    },
    resume: {
      ...defaultData.resume,
      ...(apiData.resume || {})
    }
  };
}

const About = () => {
  const [about, setAbout] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/about')
      .then((res) => {
        setAbout(mergeAboutData(res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching about data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading about...</p>
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

  const data = mergeAboutData(about);
  const socialLinks = [
    { href: data.links.github, icon: <FiGithub />, label: 'GitHub' },
    { href: data.links.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
    { href: `mailto:${data.links.email}`, icon: <FiMail />, label: 'Email' }
  ];

  return (
    <div className="about-container">
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
        <div className="code-snippet">{'<About />'}</div>
        <div className="code-snippet-2">{'{Aspiring Software Engineer}'}</div>
      </div>

      <div className="content">
        <div className="about-header">
          <div className="header-badge">
            <span className="dot"></span>
            Get to know me
          </div>

          <h1 className="about-title">
            About <span className="gradient-text">Me</span>
          </h1>
        </div>

        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-avatar">
              <span className="avatar-text">{data.name.charAt(0)}</span>
            </div>
            <h2 className="profile-name">{data.name}</h2>
            <p className="profile-title">{data.title}</p>

            <div className="profile-info">
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>{data.location}</span>
              </div>
              <div className="info-item">
                <FiCalendar className="info-icon" />
                <span>{data.education[0]?.year || 'Current'}</span>
              </div>
              <div className="info-item">
                <FiBriefcase className="info-icon" />
                <span>{data.status}</span>
              </div>
            </div>

            <div className="profile-social">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} className="social-link" aria-label={item.label} target={item.label !== 'Email' ? '_blank' : undefined} rel={item.label !== 'Email' ? 'noreferrer' : undefined}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bio-card">
            <h3 className="bio-title">My Story</h3>
            <p className="bio-text">{data.bio}</p>
            <p className="bio-text">
              I enjoy building polished user experiences, solving systems-level problems, and turning technically complex ideas into practical software products. My work spans browser applications, backend services, and lower-level programming projects while I continue developing toward a long-term career in software engineering.
            </p>

            <div className="stats-grid">
              {data.stats.map((item) => (
                <div key={item.label} className="stat-item">
                  <span className="stat-number">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="section-title">
            <span className="gradient-text">⚡</span> Skills & Technologies
          </h2>

          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-header">
                <FiCode className="category-icon" />
                <h3>Frontend</h3>
              </div>
              <div className="skill-tags">
                {data.skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiBriefcase className="category-icon" />
                <h3>Backend</h3>
              </div>
              <div className="skill-tags">
                {data.skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiCode className="category-icon" />
                <h3>Systems & Tools</h3>
              </div>
              <div className="skill-tags">
                {data.skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h2 className="section-title">
            <span className="gradient-text">🎓</span> Education
          </h2>

          <div className="education-grid">
            {data.education.map((item) => (
              <div key={`${item.school}-${item.degree}`} className="education-card">
                <div className="education-year">{item.year}</div>
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <p className="education-note">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <a href={data.resume.href} className="resume-button" download>
            <FiDownload className="button-icon" />
            {data.resume.label}
          </a>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
          background: #0a0a0a;
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
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 2;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
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

        .content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-header {
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

        .about-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea, #764ba2, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        .profile-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .profile-card,
        .bio-card,
        .skill-category,
        .education-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
        }

        .profile-card {
          padding: 2rem;
          text-align: center;
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(255, 255, 255, 0.2);
        }

        .avatar-text {
          font-size: 3rem;
          font-weight: 700;
          color: white;
        }

        .profile-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .profile-title {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.95rem;
        }

        .info-icon,
        .category-icon {
          color: #667eea;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        .profile-social {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-3px);
        }

        .bio-card {
          padding: 2rem;
        }

        .bio-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .bio-text {
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.85;
          margin-bottom: 1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.35rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.64);
        }

        .skills-section,
        .education-section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .skill-category {
          padding: 1.5rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .category-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .education-card {
          padding: 1.75rem;
        }

        .education-year {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .education-degree {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }

        .education-school {
          color: rgba(255, 255, 255, 0.78);
          margin-bottom: 0.6rem;
        }

        .education-note {
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.92rem;
        }

        .resume-section {
          display: flex;
          justify-content: center;
        }

        .resume-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 999px;
          text-decoration: none;
          color: #111318;
          background: linear-gradient(135deg, #ffffff, #dbe4ff);
          font-weight: 700;
          box-shadow: 0 18px 40px rgba(102, 126, 234, 0.25);
          transition: transform 0.3s ease;
        }

        .resume-button:hover {
          transform: translateY(-3px);
        }

        .button-icon {
          font-size: 1.1rem;
        }

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

        @media (max-width: 968px) {
          .profile-section,
          .skills-grid,
          .education-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 4rem 1rem;
          }

          .about-title {
            font-size: 2.2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;

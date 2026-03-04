import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiBriefcase, FiCode } from 'react-icons/fi';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/about')
      .then(res => {
        setAbout(res.data);
        setLoading(false);
      })
      .catch(err => {
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

  // Default data in case API doesn't return anything
  const defaultData = {
    name: "Your Name",
    title: "Full-Stack Developer",
    bio: "I'm a passionate Full-Stack Developer with expertise in React, Node.js, and modern web technologies. I love creating elegant solutions to complex problems and building applications that make a difference."
  };

  const data = about || defaultData;

  // Skills data (you can fetch this from API or define here)
  const skills = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma', 'Jest']
  };

  // Experience timeline
  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of web applications, mentoring junior developers.'
    },
    {
      year: '2021 - 2023',
      role: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Built responsive web applications using React and modern frameworks.'
    },
    {
      year: '2019 - 2021',
      role: 'Junior Developer',
      company: 'Startup',
      description: 'Developed and maintained various web applications.'
    }
  ];

  return (
    <div className="about-container">
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
        <div className="code-snippet">{"<About />"}</div>
        <div className="code-snippet-2">{"{Developer}"}</div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header */}
        <div className="about-header">
          <div className="header-badge">
            <span className="dot"></span>
            Get to know me
          </div>
          
          <h1 className="about-title">
            About <span className="gradient-text">Me</span>
          </h1>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-avatar">
              <span className="avatar-text">{data.name.charAt(0)}</span>
            </div>
            <h2 className="profile-name">{data.name}</h2>
            <p className="profile-title">{data.title}</p>
            
            <div className="profile-info">
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>San Francisco, CA</span>
              </div>
              <div className="info-item">
                <FiCalendar className="info-icon" />
                <span>5+ years experience</span>
              </div>
              <div className="info-item">
                <FiBriefcase className="info-icon" />
                <span>Available for work</span>
              </div>
            </div>

            <div className="profile-social">
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

          {/* Bio Card */}
          <div className="bio-card">
            <h3 className="bio-title">My Story</h3>
            <p className="bio-text">{data.bio}</p>
            <p className="bio-text">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Coffee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
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
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiBriefcase className="category-icon" />
                <h3>Backend</h3>
              </div>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <FiCode className="category-icon" />
                <h3>Tools & Others</h3>
              </div>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-section">
          <h2 className="section-title">
            <span className="gradient-text">📅</span> Work Experience
          </h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="education-section">
          <h2 className="section-title">
            <span className="gradient-text">🎓</span> Education
          </h2>

          <div className="education-grid">
            <div className="education-card">
              <div className="education-year">2015 - 2019</div>
              <h3 className="education-degree">Bachelor's in Computer Science</h3>
              <p className="education-school">University Name</p>
            </div>
            
            <div className="education-card">
              <div className="education-year">2020</div>
              <h3 className="education-degree">Full-Stack Web Development</h3>
              <p className="education-school">Bootcamp/Certification</p>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="resume-section">
          <a href="/resume.pdf" className="resume-button" download>
            <FiDownload className="button-icon" />
            Download Resume
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

        /* Header */
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

        /* Profile Section */
        .profile-section {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        /* Profile Card */
        .profile-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
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
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }

        .info-icon {
          color: #667eea;
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

        /* Bio Card */
        .bio-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .bio-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .bio-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
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
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }

        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Skills Section */
        .skills-section {
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
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .category-icon {
          color: #667eea;
          font-size: 1.25rem;
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
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        /* Timeline Section */
        .timeline-section {
          margin-bottom: 4rem;
        }

        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #667eea, #764ba2);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-dot {
          position: absolute;
          left: -2.4rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #667eea;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .timeline-year {
          font-size: 0.9rem;
          color: #667eea;
          font-weight: 600;
        }

        .timeline-role {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0.5rem 0 0.25rem;
        }

        .timeline-company {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }

        .timeline-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Education Section */
        .education-section {
          margin-bottom: 4rem;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }

        .education-year {
          font-size: 0.9rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .education-degree {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .education-school {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        /* Resume Section */
        .resume-section {
          text-align: center;
        }

        .resume-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: #0a0a0a;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .resume-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 30px -10px rgba(102, 126, 234, 0.5);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .resume-button:hover .button-icon {
          transform: translateY(-2px);
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
        @media (max-width: 968px) {
          .profile-section {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .education-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 4rem 1rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .profile-card {
            padding: 1.5rem;
          }

          .profile-avatar {
            width: 100px;
            height: 100px;
          }

          .avatar-text {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;